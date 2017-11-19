describe("ChordDiagrams", () => {
  let ChordDiagrams = require('../../lib/ChordDiagrams.js');

  describe("getDiagram", () => {
    describe("notes", () => {
      describe("note notation", () => {
        describe("when no notes are passed in", () => {
          it(`returns an empty fretboard`, () => {

            let chordDiagrams = new ChordDiagrams({
              fretCount: 23});

            expect(chordDiagrams.getDiagram()).toEqual([
              ['','','','', '','','','', '','','','', '','','','', '','','','', '','','',''],
              ['','','','', '','','','', '','','','', '','','','', '','','','', '','','',''],
              ['','','','', '','','','', '','','','', '','','','', '','','','', '','','',''],
              ['','','','', '','','','', '','','','', '','','','', '','','','', '','','',''],
              ['','','','', '','','','', '','','','', '','','','', '','','','', '','','',''],
              ['','','','', '','','','', '','','','', '','','','', '','','','', '','','','']
            ]);    
          });
        });

        describe("when a single note is passed in", () => {
          it(`returns a multidimensional array of strings representing frets matching the notes passed 
            in the parameter`, () => {

            let chordDiagrams = new ChordDiagrams({
              fretCount: 23, notes: 'e'});

            expect(chordDiagrams.getDiagram()).toEqual([
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

            chordDiagrams = new ChordDiagrams({
              fretCount: '23', notes: 'e'});

            expect(chordDiagrams.getDiagram()).toEqual([
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

            let chordDiagrams = new ChordDiagrams({
              fretCount: 23,
              notes: 'e g# b'
            });

            expect(chordDiagrams.getDiagram()).toEqual([
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

        describe("when passed a space-delimited string of notes containing flats is passed in", () => {
          it(`returns a multidimensional array of strings representing frets matching the notes passed 
            in the parameter`, () => {

            let chordDiagrams = new ChordDiagrams({
              fretCount: 23,
              notes: 'e ab b'
            });

            expect(chordDiagrams.getDiagram()).toEqual([
            // e  f  f# g   g# a  a# b   c  c# d  d#  e  f  f# g   g# a  a# b   c  c# d  d#
              ['e','','','', 'ab','','','b', '','','','', 'e','','','', 'ab','','','b', '','','',''],
            // b  c  c# d   d# e  f  f#  g  g# a  a#  b  c  c# d   d# e  f  f#  g  g# a  a#
              ['b','','','', '','e','','', '','ab','','', 'b','','','', '','e','','', '','ab','',''],
            // g  g# a  a#  b  c  c# d   d# e  f  f#  g  g# a  a#  b  c  c# d   d# e  f  f#
              ['','ab','','', 'b','','','', '','e','','', '','ab','','', 'b','','','', '','e','',''],

            // d  d# e  f   f# g  g# a   a# b  c  c#  d  d# e  f   f# g  g# a   a# b  c  c#
              ['','','e','', '','','ab','', '','b','','', '','','e','', '','','ab','', '','b','',''],
            // a  a# b  c   c# d  d# e   f  f# g  g#  a  a# b  c   c# d  d# e   f  f# g  g#
              ['','','b','', '','','','e', '','','','ab', '','','b','', '','','','e', '','','','ab'],
            // e  f  f# g   g# a  a# b   c  c# d  d#  e  f  f# g   g# a  a# b   c  c# d  d#
              ['e','','','', 'ab','','','b', '','','','', 'e','','','', 'ab','','','b', '','','','']
            ]);    
          });
        });
      });

      describe("fret notation", () => {
        it(`returns a multidimensional array of strings representing frets matching the notes passed 
          in the parameter`, () => {

          let chordDiagrams = new ChordDiagrams({
            fretCount: 11,
            notes: '0 4 7/2 7 11/2 6 9/1 4 9/0 5 9/0 4 7'
          });

          expect(chordDiagrams.getDiagram()).toEqual([
            ['e','','','', 'g#','','','b', '','','',''],
            ['b','','','', '','e','','', '','g#','',''],
            ['','g#','','', 'b','','','', '','e','',''],
            ['','','e','', '','','g#','', '','b','',''],
            ['','','b','', '','','','e', '','','','g#'],
            ['e','','','', 'g#','','','b', '','','','']
          ]);    

          chordDiagrams = new ChordDiagrams({
            fretCount: 11,
            notes: '/2 7 11/2 6 9/1 4 9/0 5 9/0 4 7'
          });

          expect(chordDiagrams.getDiagram()).toEqual([
            ['e','','','', 'g#','','','b', '','','',''],
            ['b','','','', '','e','','', '','g#','',''],
            ['','g#','','', 'b','','','', '','e','',''],
            ['','','e','', '','','g#','', '','b','',''],
            ['','','b','', '','','','e', '','','','g#'],
            ['','','','', '','','','', '','','','']
          ]);    

          chordDiagrams = new ChordDiagrams({
            fretCount: 11,
            notes: '0 4 7/2 7 11/2 6 9/1 4 9/0 5 9/'
          });

          expect(chordDiagrams.getDiagram()).toEqual([
            ['','','','', '','','','', '','','',''],
            ['b','','','', '','e','','', '','g#','',''],
            ['','g#','','', 'b','','','', '','e','',''],
            ['','','e','', '','','g#','', '','b','',''],
            ['','','b','', '','','','e', '','','','g#'],
            ['e','','','', 'g#','','','b', '','','','']
          ]);    

          chordDiagrams = new ChordDiagrams({
            fretCount: 11,
            notes: '   0 4 7/2 7 11/2 6 9/ 1 4 9/0 5  9 / '
          });

          expect(chordDiagrams.getDiagram()).toEqual([
            ['','','','', '','','','', '','','',''],
            ['b','','','', '','e','','', '','g#','',''],
            ['','g#','','', 'b','','','', '','e','',''],
            ['','','e','', '','','g#','', '','b','',''],
            ['','','b','', '','','','e', '','','','g#'],
            ['e','','','', 'g#','','','b', '','','','']
          ]);    
        });
      });
    });
  });

  describe("alternate tunings", () => {
    describe('ukulele tuning', () => {
      it(`returns a multidimensional array of strings representing frets matching the notes passed 
        in the parameter`, () => {

        let chordDiagrams = new ChordDiagrams({
          fretCount: 18, 
          tuning: 'g c e a',
          notes: 'e g# b'
        });

        expect(chordDiagrams.getDiagram()).toEqual([
        // a  a# b   c  c# d  d#  e  f  f# g   g# a  a# b   c  c# d  d#
          ['','','b', '','','','', 'e','','','', 'g#','','','b', '','','',''],
        // e  f  f#  g  g# a  a#  b  c  c# d   d# e  f  f#  g  g# a  a#
          ['e','','', '','g#','','', 'b','','','', '','e','','', '','g#','',''],
        // c  c# d   d# e  f  f#  g  g# a  a#  b  c  c# d   d# e  f  f#
          ['','','', '','e','','', '','g#','','', 'b','','','', '','e','',''],

        // g  g# a   a# b  c  c#  d  d# e  f   f# g  g# a   a# b  c  c#
          ['','g#','', '','b','','', '','','e','', '','','g#','', '','b','',''],
        ]);    
      });
    });

    describe('sharp tuning', () => {
      it(`returns a multidimensional array of strings representing frets matching the notes passed 
        in the parameter`, () => {

        let chordDiagrams = new ChordDiagrams({
          fretCount: 10, 
          tuning: 'g# c# e# a#',
          notes: 'e g# b'
        });

        expect(chordDiagrams.getDiagram()).toEqual([
        // a# b   c  c# d  d#  e  f  f# g   g#
          ['','b', '','','','', 'e','','','', 'g#'],
        // f  f#  g  g# a  a#  b  c  c# d   d#
          ['','', '','g#','','', 'b','','','', ''],
        // c# d   d# e  f  f#  g  g# a  a#  b
          ['','', '','e','','', '','g#','','', 'b'],

        // g# a   a# b  c  c#  d  d# e  f   f#
          ['g#','', '','b','','', '','','e','', ''],
        ]);    
      });
    });

    describe('flat tuning', () => {
      it(`returns a multidimensional array of strings representing frets matching the notes passed 
        in the parameter`, () => {

        let chordDiagrams = new ChordDiagrams({
          fretCount: 12, 
          tuning: 'gb cb eb ab',
          notes: 'e g# b'
        });

        expect(chordDiagrams.getDiagram()).toEqual([
        // g# a a# b   c  c# d  d#  e  f  f# g   g#
          ['g#', '', '','b', '','','','', 'e','','','', 'g#'],
        // d# e f  f#  g  g# a  a#  b  c  c# d   d#
          ['', 'e', '','', '','g#','','', 'b','','','', ''],
        // b c c# d   d# e  f  f#  g  g# a  a#  b
          ['b', '', '','', '','e','','', '','g#','','', 'b'],

        // e# g g# a   a# b  c  c#  d  d# e  f   f#
          ['', '', 'g#','', '','b','','', '','','e','', ''],
        ]);    
      });
    });
  });
});
