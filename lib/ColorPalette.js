class ColorPalette {
  getColor(note) {
//    return {
//      e: 'BB453C',
//      g: '7D9F13',
//      a: 'E7DB84',
//      b: 'A2D2E9',
//      d: '3EB88D'
//    }[note];
    return [
      'ebc844',
      'a2b86c',
      '5ca793',
      '1395ba',
      '117899',
      '0f5b78',
      '0d3c55',
      'c02e1d',
      'd94e1f',
      'f16c20',
      'ef8b2c',
      'ecaa38'
    ][['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'].indexOf(note)];
  }
}

module.exports = ColorPalette;
