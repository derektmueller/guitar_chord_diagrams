class ChordDiagrams {
  constructor(options) {
    this.fretCount = options.fretCount || 23;
    this.tuning = (options.tuning || 'e a d g b e').split(/\s+/);
    this.chromaticScale = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'];
    this.notes = options.notes.split(/\s+/);
  }

  getDiagram() {
    return this.tuning.slice().reverse().map((stringNote) => {
      return Array(this.fretCount + 1).fill(0).map((_, i) => {
        return this.notes.includes(this.getNoteAt({stringNote: stringNote, fret: i})) ?
          this.getNoteAt({stringNote: stringNote, fret: i}) : '';
      });
    });
  }

  getNoteAt({stringNote, fret}) {
    return this.chromaticScale[
      (this.chromaticScale.indexOf(stringNote) + fret) % this.chromaticScale.length
    ];
  }
}

module.exports = ChordDiagrams;
