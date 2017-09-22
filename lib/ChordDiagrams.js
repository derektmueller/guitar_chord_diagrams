require('babel-polyfill');

class ChordDiagrams {
  constructor() {
    this.fretCount = 23;
    this.tuning = ['e', 'a', 'd', 'g', 'b', 'e'];
    this.chromaticScale = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'];
  }

  getDiagram(notesStr) {
    let notes = notesStr.split(/\s+/);

//    let fretboard = {;
//      e2: [0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0],
//      b:  [0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0],
//      g:  [0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0],
//      d:  [0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0],
//      a:  [0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0],
//      e:  [0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0]
//    };
//
//    for(let stringNoteKey in fretboard) {
//      let stringNote = stringNoteKey.replace(/\d+/, '');
//      let string = fretboard[stringNoteKey];
//
//      for(let i = 0; i < string.length; ++i) {
//        if(notes.includes(this.getNoteAt({stringNote: stringNote, fret: i}))) {
//          string[i] = 1;
//        }
//      }
//    }

    return this.tuning.slice().reverse().map((stringNote) => {
      return Array(this.fretCount + 1).fill(0).map((_, i) => {
        return +(notes.includes(this.getNoteAt({stringNote: stringNote, fret: i})));
      });
    });

    return Object.values(fretboard);
  }

  getNoteAt({stringNote, fret}) {
    return this.chromaticScale[
        (this.chromaticScale.indexOf(stringNote) + fret) % this.chromaticScale.length
    ];
  }
}

module.exports = ChordDiagrams;
