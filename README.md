
A web application that lets users create fret board diagrams with configurable notes, tuning, and number of strings & frets. Diagrams are stored in the URL query string.

## Examples

Arpeggios from Autumn Leaves:

http://www.derekmueller.info/fretBoardDiagrams?chordDiagrams=%5B%7B%22notes%22%3A%22a%20c%20e%20g%22%2C%22title%22%3A%22Am7%22%2C%22root%22%3A%22a%22%7D%2C%7B%22notes%22%3A%22d%20f%23%20a%20c%22%2C%22title%22%3A%22D7%22%2C%22root%22%3A%22d%22%7D%2C%7B%22notes%22%3A%22c%20e%20g%20b%22%2C%22title%22%3A%22Cmaj7%22%2C%22root%22%3A%22c%22%7D%2C%7B%22notes%22%3A%22f%23%20a%20c%20e%22%2C%22title%22%3A%22F%23m7b5%22%2C%22root%22%3A%22f%23%22%7D%2C%7B%22notes%22%3A%22b%20d%23%20f%23%20a%22%2C%22title%22%3A%22B7%22%2C%22root%22%3A%22b%22%7D%2C%7B%22notes%22%3A%22e%20g%20b%22%2C%22title%22%3A%22Em%22%2C%22root%22%3A%22e%22%7D%5D

A major 7 arpeggios:

http://www.derekmueller.info/fretBoardDiagrams?chordDiagrams=%5B%7B%22notes%22%3A%22a%20c%23%20e%20g%23%22%2C%22root%22%3A%22a%22%2C%22title%22%3A%22a%20major%207%20arpeggios%20(all)%22%7D%2C%7B%22notes%22%3A%220%204%2F0%204%2F2%2F1%202%2F2%2F0%204%22%2C%22root%22%3A%22a%22%2C%22title%22%3A%22a%20major%207%20arpeggio%20(position%204)%22%7D%2C%7B%22notes%22%3A%2212%2F11%2012%2F11%2014%2F13%2014%2F14%2F12%2016%22%2C%22root%22%3A%22a%22%2C%22title%22%3A%22a%20major%207%20arpeggio%20(position%204.1)%22%7D%2C%7B%22notes%22%3A%224%205%2F4%2F2%206%2F2%2F2%205%2F4%205%22%2C%22root%22%3A%22a%22%2C%22title%22%3A%22a%20major%207%20arpeggio%20(position%205)%22%7D%2C%7B%22notes%22%3A%225%2F4%207%2F6%207%2F6%2F5%2F4%205%22%2C%22root%22%3A%22a%22%2C%22title%22%3A%22a%20major%207%20arpeggio%20(position%201)%22%7D%2C%7B%22notes%22%3A%229%2F7%2011%2F7%2011%2F9%2F9%2010%2F9%22%2C%22root%22%3A%22a%22%2C%22title%22%3A%22a%20major%207%20arpeggio%20(position%202)%22%7D%2C%7B%22notes%22%3A%229%2012%2F11%2012%2F11%2F9%2F9%2010%2F9%2012%22%2C%22root%22%3A%22a%22%2C%22title%22%3A%22a%20major%207%20arpeggio%20(position%203)%22%7D%5D

## Development

```
npm install
npm run-script dev-server
```

## Testing

```
npm run-script test
```
