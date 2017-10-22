describe("ColorPalette", () => {
  let ColorPalette = require('../../lib/ColorPalette.js');

  it("returns a CSS color for a given note", () => {
    let palette = new ColorPalette;
    ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'].forEach((note) => {
      expect(palette.getColor(note)).toMatch(/^[a-z0-9]{6}$/);
    });

    expect(
      ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g',
       'g#'].map((note) => palette.getColor(note)))
    .toEqual(
      ['a', 'bb', 'b', 'c', 'db', 'd', 'eb', 'e', 'f', 'gb', 'g',
       'ab'].map((note) => palette.getColor(note))
    );
  });
});
