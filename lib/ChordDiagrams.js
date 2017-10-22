class ChordDiagrams {
  constructor(options) {
    this.fretCount = parseInt(options.fretCount, 10) || 23;
    this.tuning = (options.tuning || 'e a d g b e').split(/\s+/);
    this.chromaticScaleSharps = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'];
    this.notes = (options.notes || '').split(/\s+/);
    this.noteEquivalence = {
      'a': 'a',
      'a#': 'bb',
      'b': 'b',
      'b#': 'c',
      'c': 'c',
      'c#': 'db',
      'd': 'd',
      'd#': 'eb',
      'g': 'g',
      'g#': 'ab'
    };
  }

  getDiagram() {
    return this.tuning.slice().reverse().map((stringNote) => {
      return Array(this.fretCount + 1).fill().map((_, i) => {
        return this.getIncludedNote(this.notes, this.getNoteAt({stringNote: stringNote, fret: i}));
      });
    });
  }

  private

  getIncludedNote(notes, note) {
    if(notes.includes(note)) {
      return note;
    } else if (notes.includes(this.noteEquivalence[note])) {
      return this.noteEquivalence[note];
    } else {
      return '';
    }
  }

  getNoteAt({stringNote, fret}) {
    return this.chromaticScaleSharps[
      (this.chromaticScaleSharps.indexOf(stringNote) + fret) % this.chromaticScaleSharps.length
    ];
  }
}

module.exports = ChordDiagrams;
