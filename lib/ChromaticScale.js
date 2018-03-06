export default class ChromaticScale {
  constructor() {
    this.sharps = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'];
    this.flats = ['a', 'bb', 'b', 'c', 'db', 'd', 'eb', 'f', 'gb', 'g', 'ab'];
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

  getIncludedNote(notes, note) {
    return this.noteEquivalence[note].find((note) => {
      return notes.includes(note);
    });
  }

  getNoteIndex(notes, note) {
    return notes.indexOf(this.getIncludedNote(notes, note));
  }

  getNoteAt({stringNote, fret}) {
    return this.sharps[
      (this.getNoteIndex(
        this.sharps, stringNote) + fret) % 
        this.sharps.length
    ];
  }
}
