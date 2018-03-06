let aMajor7Arpeggios = require(
  '../diagrams/arpeggios/a_major_7_arpeggios.json');

let aDominant7Arpeggios = require(
  '../diagrams/arpeggios/a_dominant_7_arpeggios.json');

let aMinor7Arpeggios = require(
  '../diagrams/arpeggios/a_minor_7_arpeggios.json');

let aMinorArpeggios = require(
  '../diagrams/arpeggios/a_minor_arpeggios.json');

import ChromaticScale from './ChromaticScale.js';

export class ChordConfigDescParser {
  parse(desc) {
    let notes = ["A", "B", "C", "D", "E", "F", "G"];
    let accidentals = ["#", "b"];
    let chordTypes = ["maj7", "-7", "7", "-"];
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
        configType: match[4]
      }
    }
  }
}

export default class ChordConfigCreator {
  constructor(options) {
    this.desc = options.description;
    this.chromaticScale = new ChromaticScale;
  }

  get() {
    let parsedDesc = (new ChordConfigDescParser).parse(this.desc);
    let delta = this.chromaticScale.getNoteIndex(
        this.chromaticScale.sharps, 
        parsedDesc.root.toLowerCase()) - 12;

    if(parsedDesc.configType === 'arpeggios') {
      if(parsedDesc.chordType === '7') {
        return this.transpose(aDominant7Arpeggios, delta);
      } else if(parsedDesc.chordType === '-7') {
        return this.transpose(aMinor7Arpeggios, delta);
      } else if(parsedDesc.chordType === '-') {
        return this.transpose(aMinorArpeggios, delta);
      } else if(parsedDesc.chordType === 'maj7') {
        return this.transpose(aMajor7Arpeggios, delta);
      }
    }
  }

  transpose(config, interval) {
    return config.map((diagram) => {
      return Object.assign(JSON.parse(JSON.stringify(diagram)), {
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
        `^(${this.chromaticScale.flats.concat(
            this.chromaticScale.sharps).join('|')})$`))) {

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

    return this.chromaticScale.sharps[
      mod(this.chromaticScale.sharps.indexOf(note) + 
          interval, this.chromaticScale.sharps.length)];
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
