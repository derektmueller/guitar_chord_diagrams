describe("ChordDiagrams", () => {
  let ChordDiagrams = require('../lib/ChordDiagrams.js');
  let chordDiagrams = new ChordDiagrams();

  // ideas: alternate tunings, variable fret count, number of strings

  describe("getDiagram", () => {
    describe("when passed a single note is passed in", () => {
      it(`returns a multidimensional array of numbers with 1 for entries corresponding to notes 
        passed in parameter`, () => {

        expect(chordDiagrams.getDiagram('e')).toEqual([
        // e  f  f# g   g# a  a# b   c  c# d  d#  e  f  f# g   g# a  a# b   c  c# d  d#
          [1, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  1, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0],
        // b  c  c# d   d# e  f  f#  g  g# a  a#  b  c  c# d   d# e  f  f#  g  g# a  a#
          [0, 0, 0, 0,  0, 1, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 1, 0, 0,  0, 0, 0, 0],
        // g  g# a  a#  b  c  c# d   d# e  f  f#  g  g# a  a#  b  c  c# d   d# e  f  f#
          [0, 0, 0, 0,  0, 0, 0, 0,  0, 1, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 1, 0, 0],

        // d  d# e  f   f# g  g# a   a# b  c  c#  d  d# e  f   f# g  g# a   a# b  c  c#
          [0, 0, 1, 0,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 1, 0,  0, 0, 0, 0,  0, 0, 0, 0],
        // a  a# b  c   c# d  d# e   f  f# g  g#  a  a# b  c   c# d  d# e   f  f# g  g#
          [0, 0, 0, 0,  0, 0, 0, 1,  0, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 1,  0, 0, 0, 0],
        // e  f  f# g   g# a  a# b   c  c# d  d#  e  f  f# g   g# a  a# b   c  c# d  d#
          [1, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0,  1, 0, 0, 0,  0, 0, 0, 0,  0, 0, 0, 0]
        ]);    
      });
    });

    describe("when passed a space-delimited string of notes is passed in", () => {
      it(`returns a multidimensional array of numbers with 1 for entries corresponding to notes 
        passed in parameter`, () => {

        expect(chordDiagrams.getDiagram('e g# b')).toEqual([
        // e  f  f# g   g# a  a# b   c  c# d  d#  e  f  f# g   g# a  a# b   c  c# d  d#
          [1, 0, 0, 0,  1, 0, 0, 1,  0, 0, 0, 0,  1, 0, 0, 0,  1, 0, 0, 1,  0, 0, 0, 0],
        // b  c  c# d   d# e  f  f#  g  g# a  a#  b  c  c# d   d# e  f  f#  g  g# a  a#
          [1, 0, 0, 0,  0, 1, 0, 0,  0, 1, 0, 0,  1, 0, 0, 0,  0, 1, 0, 0,  0, 1, 0, 0],
        // g  g# a  a#  b  c  c# d   d# e  f  f#  g  g# a  a#  b  c  c# d   d# e  f  f#
          [0, 1, 0, 0,  1, 0, 0, 0,  0, 1, 0, 0,  0, 1, 0, 0,  1, 0, 0, 0,  0, 1, 0, 0],

        // d  d# e  f   f# g  g# a   a# b  c  c#  d  d# e  f   f# g  g# a   a# b  c  c#
          [0, 0, 1, 0,  0, 0, 1, 0,  0, 1, 0, 0,  0, 0, 1, 0,  0, 0, 1, 0,  0, 1, 0, 0],
        // a  a# b  c   c# d  d# e   f  f# g  g#  a  a# b  c   c# d  d# e   f  f# g  g#
          [0, 0, 1, 0,  0, 0, 0, 1,  0, 0, 0, 1,  0, 0, 1, 0,  0, 0, 0, 1,  0, 0, 0, 1],
        // e  f  f# g   g# a  a# b   c  c# d  d#  e  f  f# g   g# a  a# b   c  c# d  d#
          [1, 0, 0, 0,  1, 0, 0, 1,  0, 0, 0, 0,  1, 0, 0, 0,  1, 0, 0, 1,  0, 0, 0, 0]
        ]);    
      });
    });

    describe("when specifying a diagram with fewer frets", () => {
      let chordDiagrams = new ChordDiagrams({fretCount: 12});

      it(`returns a multidimensional array of numbers with 1 for entries corresponding to notes 
        passed in parameter`, () => {

        expect(chordDiagrams.getDiagram('e g# b')).toEqual([
        // e  f  f# g   g# a  a# b   c  c# d  d#  e
          [1, 0, 0, 0,  1, 0, 0, 1,  0, 0, 0, 0,  1],
        // b  c  c# d   d# e  f  f#  g  g# a  a#  b
          [1, 0, 0, 0,  0, 1, 0, 0,  0, 1, 0, 0,  1],
        // g  g# a  a#  b  c  c# d   d# e  f  f#  g
          [0, 1, 0, 0,  1, 0, 0, 0,  0, 1, 0, 0,  0],

        // d  d# e  f   f# g  g# a   a# b  c  c#  d
          [0, 0, 1, 0,  0, 0, 1, 0,  0, 1, 0, 0,  0],
        // a  a# b  c   c# d  d# e   f  f# g  g#  a
          [0, 0, 1, 0,  0, 0, 0, 1,  0, 0, 0, 1,  0],
        // e  f  f# g   g# a  a# b   c  c# d  d#  e
          [1, 0, 0, 0,  1, 0, 0, 1,  0, 0, 0, 0,  1]
        ]);    
      });
    });
  });
});
