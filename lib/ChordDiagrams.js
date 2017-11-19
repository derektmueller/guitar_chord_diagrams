class ChordDiagrams {
  constructor(options) {
    this.fretCount = parseInt(options.fretCount, 10) || 23;
    this.tuning = (options.tuning || 'e a d g b e').split(/\s+/);
    this.chromaticScaleSharps = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'];
    this.notation = this.getNotation(options.notes || '');
    this.notes = this.parseNotes(options.notes || '');
    this.noteEquivalence = {
      'a': ['a'],
      'b': ['b', 'cb'],
      'c': ['c', 'b#'],
      'd': ['d'],
      'e': ['e', 'fb'],
      'f': ['f', 'e#'],
      'g': ['g'],
      'a#': ['a#', 'bb'],
      'b#': ['b#', 'c'],
      'c#': ['c#', 'db'],
      'd#': ['d#', 'eb'],
      'e#': ['e#', 'f'],
      'f#': ['f#', 'gb'],
      'g#': ['g#', 'ab'],
      'ab': ['ab', 'g#'],
      'bb': ['bb', 'a#'],
      'cb': ['cb', 'b'],
      'db': ['db', 'c#'],
      'eb': ['eb', 'd#'],
      'fb': ['fb', 'e'],
      'gb': ['gb', 'f#']
    };
  }

  getDiagram() {
    if(this.notation === 'notes') {
      return this.tuning.slice().reverse().map((stringNote) => {
        return Array(this.fretCount + 1).fill().map((_, i) => {
          return this.getIncludedNote(this.notes, this.getNoteAt(
            {stringNote: stringNote, fret: i})) || '';
        });
      });
    } else if(this.notation === 'frets') {
      return this.tuning.slice().reverse().map((stringNote, i) => {
        return Array(this.fretCount + 1).fill().map((_, j) => {
          return this.notes[i].includes(j) ?
            this.getNoteAt({stringNote: stringNote, fret: j}) : '';
        });
      });
    }
  }

  private

  parseNotes(notes) {
    if(this.notation === 'notes') {
      return notes.split(/\s+/);
    } else if(this.notation === 'frets') {
      return notes.split(/\//).reverse().map(
        (string) => string.trim().split(/\s+/).map(
          (fretNumber) => parseInt(fretNumber, 10)));
    }
  }

  getNotation(notes) {
    if(this.isNotesNotation(notes)) {
      return 'notes';
    } else if(this.isFretNotation(notes)) {
      return 'frets';
    }
  }

  isNotesNotation(notes) {
    return notes.match(/^\s*([a-g][b#]?\s+)*([a-g][b#]?)?\s*$/);
  }

  isFretNotation(notes) {
    return notes.match(
      /^(\s*((\d+\s+)*\d+)?\s*\/)*(\s*((\d+\s+)*\d+)?\s*)$/);
  }

  getIncludedNote(notes, note) {
    return this.noteEquivalence[note].find((note) => {
      return notes.includes(note);
    });
  }

  getNoteIndex(notes, note) {
    return notes.indexOf(this.getIncludedNote(notes, note));
  }

  getNoteAt({stringNote, fret}) {
    return this.chromaticScaleSharps[
      (this.getNoteIndex(
        this.chromaticScaleSharps, stringNote) + fret) % 
        this.chromaticScaleSharps.length
    ];
  }
}

module.exports = ChordDiagrams;
