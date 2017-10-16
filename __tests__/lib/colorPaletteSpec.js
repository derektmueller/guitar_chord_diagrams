describe("ColorPalette", () => {
  let ColorPalette = require('../../lib/ColorPalette.js');

  xit("returns a CSS color for a given note", () => {
    let palette = new ColorPalette;
    ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'].forEach((note) => {
      expect(palette.getColor(note)).toMatch(/^[a-z0-9]{6}$/);
    });
  });
});
