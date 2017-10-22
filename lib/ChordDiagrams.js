class ChordDiagrams {
  constructor(options) {
    this.fretCount = parseInt(options.fretCount, 10) || 23;
    this.tuning = (options.tuning || 'e a d g b e').split(/\s+/);
    this.chromaticScaleSharps = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'];
    this.notes = (options.notes || '').split(/\s+/);
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
    return this.tuning.slice().reverse().map((stringNote) => {
      return Array(this.fretCount + 1).fill().map((_, i) => {
        return this.getIncludedNote(this.notes, this.getNoteAt(
          {stringNote: stringNote, fret: i})) || '';
      });
    });
  }

  private

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
