describe("ChordDiagrams", () => {
  let ChordDiagrams = require('../lib/ChordDiagrams.js');
  let chordDiagrams = new ChordDiagrams({fretCount: 23});

  // ideas: alternate tunings, variable fret count, number of strings

  describe("getDiagram", () => {
    describe("when passed a single note is passed in", () => {
      it(`returns a multidimensional array of strings representing frets matching the notes passed 
        in the parameter`, () => {

        expect(chordDiagrams.getDiagram('e')).toEqual([
        // e  f  f# g   g# a  a# b   c  c# d  d#  e  f  f# g   g# a  a# b   c  c# d  d#
          ['e','','','', '','','','', '','','','', 'e','','','', '','','','', '','','',''],
        // b  c  c# d   d# e  f  f#  g  g# a  a#  b  c  c# d   d# e  f  f#  g  g# a  a#
          ['','','','', '','e','','', '','','','', '','','','', '','e','','', '','','',''],
        // g  g# a  a#  b  c  c# d   d# e  f  f#  g  g# a  a#  b  c  c# d   d# e  f  f#
          ['','','','', '','','','', '','e','','', '','','','', '','','','', '','e','',''],

        // d  d# e  f   f# g  g# a   a# b  c  c#  d  d# e  f   f# g  g# a   a# b  c  c#
          ['','','e','', '','','','', '','','','', '','','e','', '','','','', '','','',''],
        // a  a# b  c   c# d  d# e   f  f# g  g#  a  a# b  c   c# d  d# e   f  f# g  g#
          ['','','','', '','','','e', '','','','', '','','','', '','','','e', '','','',''],
        // e  f  f# g   g# a  a# b   c  c# d  d#  e  f  f# g   g# a  a# b   c  c# d  d#
          ['e','','','', '','','','', '','','','', 'e','','','', '','','','', '','','','']
        ]);    
      });
    });

    describe("when passed a space-delimited string of notes is passed in", () => {
      it(`returns a multidimensional array of strings representing frets matching the notes passed 
        in the parameter`, () => {

        expect(chordDiagrams.getDiagram('e g# b')).toEqual([
        // e  f  f# g   g# a  a# b   c  c# d  d#  e  f  f# g   g# a  a# b   c  c# d  d#
          ['e','','','', 'g#','','','b', '','','','', 'e','','','', 'g#','','','b', '','','',''],
        // b  c  c# d   d# e  f  f#  g  g# a  a#  b  c  c# d   d# e  f  f#  g  g# a  a#
          ['b','','','', '','e','','', '','g#','','', 'b','','','', '','e','','', '','g#','',''],
        // g  g# a  a#  b  c  c# d   d# e  f  f#  g  g# a  a#  b  c  c# d   d# e  f  f#
          ['','g#','','', 'b','','','', '','e','','', '','g#','','', 'b','','','', '','e','',''],

        // d  d# e  f   f# g  g# a   a# b  c  c#  d  d# e  f   f# g  g# a   a# b  c  c#
          ['','','e','', '','','g#','', '','b','','', '','','e','', '','','g#','', '','b','',''],
        // a  a# b  c   c# d  d# e   f  f# g  g#  a  a# b  c   c# d  d# e   f  f# g  g#
          ['','','b','', '','','','e', '','','','g#', '','','b','', '','','','e', '','','','g#'],
        // e  f  f# g   g# a  a# b   c  c# d  d#  e  f  f# g   g# a  a# b   c  c# d  d#
          ['e','','','', 'g#','','','b', '','','','', 'e','','','', 'g#','','','b', '','','','']
        ]);    
      });
    });
  });
});
