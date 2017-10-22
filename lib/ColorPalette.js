class ColorPalette {
  getColor(note) {
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
    ][this.getNoteIndex(note)];
  }

  private

  getNoteIndex(note) {
    const chromaticScaleWithSharps = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#'];
    const chromaticScaleWithFlats = ['a', 'bb', 'b', 'c', 'db', 'd', 'eb', 'e', 'f', 'gb', 'g', 'ab'];

    if(chromaticScaleWithSharps.includes(note)) {
      return chromaticScaleWithSharps.indexOf(note);
    } else {
      return chromaticScaleWithFlats.indexOf(note);
    }
  }
}

module.exports = ColorPalette;
