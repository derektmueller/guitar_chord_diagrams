let aMajor7Arpeggios = 
        [
            {
                "notes": "a c# e g#",
                "root": "a",
                "title": "a major 7 arpeggios (all)"
            },
            {
                "notes": "5/4 7/6 7/6/5/4 5",
                "root": "a",
                "title": "a major 7 arpeggio (position 1)"
            },
            {
                "notes": "9/7 11/7 11/9/9 10/9",
                "root": "a",
                "title": "a major 7 arpeggio (position 2)"
            },
            {
                "notes": "9 12/11 12/11/9/9 10/9 12",
                "root": "a",
                "title": "a major 7 arpeggio (position 3)"
            },
            {
                "notes": "0 4/0 4/2/1 2/2/0 4",
                "root": "a",
                "title": "a major 7 arpeggio (position 4)"
            },
            {
                "notes": "12/11 12/11 14/13 14/14/12 16",
                "root": "a",
                "title": "a major 7 arpeggio (position 4.1)"
            },
            {
                "notes": "4 5/4/2 6/2/2 5/4 5",
                "root": "a",
                "title": "a major 7 arpeggio (position 5)"
            }
        ];

let aMinor7Arpeggios = 
        [
          {
              "notes": "a c e g",
              "root": "a",
              "title": "a minor 7 arpeggios (all)"
          },
          {
              "notes": "5 8/7/5 7/5/5 8/5 8",
              "root": "a",
              "title": "a minor 7 arpeggio (position 1)"
          },
          {
              "notes": "8/7 10/7 10/9/8 10/8",
              "root": "a",
              "title": "a minor 7 arpeggio (position 2)"
          },
          {
              "notes": "8 12/10 12/10/9 12/10/8 12",
              "root": "a",
              "title": "a minor 7 arpeggio (position 3)"
          },
          {
              "notes": "0 3/0 3/2/0 2/1/0 3",
              "root": "a",
              "title": "a minor 7 arpeggio (position 4)"
          },
          {
              "notes": "3 5/3/2 5/2 5/5/3 5",
              "root": "a",
              "title": "a minor 7 arpeggio (position 5)"
          }
      ];

export class ChordConfigDescParser {
  parse(desc) {
    let notes = ["A", "B", "C", "D", "E", "F", "G"];
    let accidentals = ["#", "b"];
    let chordTypes = ["maj7", "-7"];
    let configTypes = ["arpeggios", "chords"];
    let validDescPattern = 
      new RegExp(
        `^(${notes.join('|')})(${accidentals.join('|')})?` +
        `(${chordTypes.join('|')})? (${configTypes.join('|')})$`);
    let match = desc.match(validDescPattern);

    if(!match) {
      throw new Error('invalid description');
    } else {
      return {
        root: match[1] + (match[2] ? match[2] : ''),
        chordType: match[3],
        configType: match[4],
      }
    }
  }
}

export default class ChordConfigCreator {
  constructor(options) {
    this.desc = options.description;
    this.chromaticScaleSharps = [
      'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 
      'g#'];
    this.chromaticScaleFlats = ['a', 'bb', 'b', 'c', 'db', 'd', 'eb', 'f', 'gb', 'g', 'ab'];

  }

  get() {
    let parsedDesc = (new ChordConfigDescParser).parse(this.desc);

    if(parsedDesc.configType === 'arpeggios') {
      if(parsedDesc.root === 'E') {
        if(parsedDesc.chordType === '-7') {
          return this.transpose(aMinor7Arpeggios, -5);
        }
      } else if(parsedDesc.root === 'A') {
        if(parsedDesc.chordType === '-7') {
          return this.transpose(aMinor7Arpeggios, 0);
        } else if(parsedDesc.chordType === 'maj7') {
          return this.transpose(aMajor7Arpeggios, 0);
        }
      }
    }
  }

  transpose(config, interval) {
    return config.map((diagram) => {
      return Object.assign(diagram, {
        notes: this.transposeNotes(
          diagram.notes, interval),
        root: this.transposeNotes(diagram.root, interval),
        title: this.transposeTitle(diagram.title, interval)
      });
    });
  }

  transposeTitle(title, interval) {
    return title.split(/ /).map((word) => {
      if (word.match(new RegExp(
        `^(${this.chromaticScaleFlats.concat(
            this.chromaticScaleSharps).join('|')})$`))) {

        return this.transposeNotes(word, interval);
      } else {
        return word;
      }
    }).join(' ');
  }

  transposeNotes(notes, interval) {
    if(this.isNotesNotation(notes)) {
      return this.transposeNotesNotation(notes, interval);
    } else if(this.isFretNotation(notes)) {
      return this.transposeNotesFretNotation(notes, interval);
    }
  }

  transposeNotesNotation(notes, interval) {
    return notes.split(/\s+/).map((note) => {
      return this.transposeNote(note, interval);
    }).join(' ');
  }

  transposeNote(note, interval) {
    let mod = (n, m) => ((n % m) + m) % m;

    return this.chromaticScaleSharps[
      mod(this.chromaticScaleSharps.indexOf(note) + interval,
        this.chromaticScaleSharps.length)];
  }

  transposeNotesFretNotation(notes, interval) {
    let transposedNotes = notes.split('/').map((stringNotes) => {
      return stringNotes.split(' ').map((note) => {
        return parseInt(note, 10) + interval;
      }).join(' ');
    }).join('/');

    if(transposedNotes.match(/-/)) {
      transposedNotes = this.transposeNotesFretNotation(
        transposedNotes, 12);
    }

    return transposedNotes;
  }

  isNotesNotation(notes) {
    return notes.match(/^\s*([a-g][b#]?\s+)*([a-g][b#]?)?\s*$/);
  }

  isFretNotation(notes) {
    return notes.match(
      /^(\s*((\d+\s+)*\d+)?\s*\/)*(\s*((\d+\s+)*\d+)?\s*)$/);
  }
}
