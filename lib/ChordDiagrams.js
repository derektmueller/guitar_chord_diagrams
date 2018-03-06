import ChromaticScale from './ChromaticScale.js';

export default class ChordDiagrams {
  constructor(options) {
    this.fretCount = parseInt(options.fretCount, 10) || 23;
    this.tuning = (options.tuning || 'e a d g b e').split(/\s+/);
    this.notation = this.getNotation(options.notes || '');
    this.notes = this.parseNotes(options.notes || '');
    this.chromaticScale = new ChromaticScale;
  }

  getDiagram() {
    if(this.notation === 'notes') {
      return this.tuning.slice().reverse().map((stringNote) => {
        return Array(this.fretCount + 1).fill().map((_, i) => {
          return this.chromaticScale.getIncludedNote(
              this.notes, this.chromaticScale.getNoteAt(
                {stringNote: stringNote, fret: i})) || '';
        });
      });
    } else if(this.notation === 'frets') {
      return this.tuning.slice().reverse().map((stringNote, i) => {
        return Array(this.fretCount + 1).fill().map((_, j) => {
          return this.notes[i].includes(j) ?
            this.chromaticScale.getNoteAt(
                {stringNote: stringNote, fret: j}) : '';
        });
      });
    }
  }

  parseNotes(notes) {
    if(this.notation === 'notes') {
      return notes.split(/\s+/);
    } else if(this.notation === 'frets') {
      return notes.split(/\//).reverse().map(
        (string) => string.trim().split(/\s+/).map(
          (fretNumber) => parseInt(fretNumber, 10)));
    }
  }

  getNotation(notes) {
    if(this.isNotesNotation(notes)) {
      return 'notes';
    } else if(this.isFretNotation(notes)) {
      return 'frets';
    }
  }

  isNotesNotation(notes) {
    return notes.match(/^\s*([a-g][b#]?\s+)*([a-g][b#]?)?\s*$/);
  }

  isFretNotation(notes) {
    return notes.match(
      /^(\s*((\d+\s+)*\d+)?\s*\/)*(\s*((\d+\s+)*\d+)?\s*)$/);
  }
}
