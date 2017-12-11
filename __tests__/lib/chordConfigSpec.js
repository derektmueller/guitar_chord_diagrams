import lazy from 'jasmine-lazy';
import ChordConfigCreator from '../../lib/ChordConfigCreator.js';

describe("ChordConfigCreator", () => {
  describe('get', () => {
    xit('returns the specified configs', () => {
      expect(new ChordConfigCreator('Amaj7 arpeggios').get()).toEqual(
        [
            {
                "notes": "a c# e g#",
                "root": "a",
                "title": "a major 7 arpeggios (all)"
            },
            {
                "notes": "0 4/0 4/2/1 2/2/0 4",
                "root": "a",
                "title": "a major 7 arpeggio (position 4)"
            },
            {
                "notes": "12/11 12/11 14/13 14/14/12 16",
                "root": "a",
                "title": "a major 7 arpeggio (position 4.1)"
            },
            {
                "notes": "4 5/4/2 6/2/2 5/4 5",
                "root": "a",
                "title": "a major 7 arpeggio (position 5)"
            },
            {
                "notes": "5/4 7/6 7/6/5/4 5",
                "root": "a",
                "title": "a major 7 arpeggio (position 1)"
            },
            {
                "notes": "9/7 11/7 11/9/9 10/9",
                "root": "a",
                "title": "a major 7 arpeggio (position 2)"
            },
            {
                "notes": "9 12/11 12/11/9/9 10/9 12",
                "root": "a",
                "title": "a major 7 arpeggio (position 3)"
            }
        ]
      );

      expect(new ChordConfigCreator('A-7 arpeggios').get()).toEqual(
        [
          {
              "notes": "a c e g",
              "root": "a",
              "title": "a minor 7 arpeggios (all)"
          },
          {
              "notes": "0 3/0 3/2/0 2/1/0 3",
              "root": "a",
              "title": "a minor 7 arpeggio (position 4)"
          },
          {
              "notes": "3 5/3/2 5/2 5/5/3 5",
              "root": "a",
              "title": "a minor 7 arpeggio (position 5)"
          },
          {
              "notes": "5 8/7/5 7/5/5 8/5 8",
              "root": "a",
              "title": "a minor 7 arpeggio (position 1)"
          },
          {
              "notes": "8/7 10/7 10/9/8 10/8",
              "root": "a",
              "title": "a minor 7 arpeggio (position 2)"
          },
          {
              "notes": "8 12/10 12/10/9 12/10/8 12",
              "root": "a",
              "title": "a minor 7 arpeggio (position 3)"
          }
      ]
      );
    });
  });
});
