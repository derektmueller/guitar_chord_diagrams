require('babel-polyfill');

class ChordDiagrams {
  constructor({fretCount} = {fretCount: 23}) {
    this.fretCount = fretCount;
    this.tuning = ['e', 'a', 'd', 'g', 'b', 'e'];
    this.chromaticScale = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'];
  }

  getDiagram(notesStr) {
    let notes = notesStr.split(/\s+/);

    return this.tuning.slice().reverse().map((stringNote) => {
      return Array(this.fretCount + 1).fill(0).map((_, i) => {
        return +(notes.includes(this.getNoteAt({stringNote: stringNote, fret: i})));
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
