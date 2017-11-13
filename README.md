
A web application that lets users create fret board diagrams with configurable notes, tuning, and number of strings & frets. Diagrams are stored in the URL query string.

## Examples

Arpeggios from Autumn Leaves:

http://www.derekmueller.info/fretBoardDiagrams?chordDiagrams=%5B%7B%22notes%22%3A%22a%20c%20e%20g%22%2C%22title%22%3A%22Am7%22%2C%22root%22%3A%22a%22%7D%2C%7B%22notes%22%3A%22d%20f%23%20a%20c%22%2C%22title%22%3A%22D7%22%2C%22root%22%3A%22d%22%7D%2C%7B%22notes%22%3A%22c%20e%20g%20b%22%2C%22title%22%3A%22Cmaj7%22%2C%22root%22%3A%22c%22%7D%2C%7B%22notes%22%3A%22f%23%20a%20c%20e%22%2C%22title%22%3A%22F%23m7b5%22%2C%22root%22%3A%22f%23%22%7D%2C%7B%22notes%22%3A%22b%20d%23%20f%23%20a%22%2C%22title%22%3A%22B7%22%2C%22root%22%3A%22b%22%7D%2C%7B%22notes%22%3A%22e%20g%20b%22%2C%22title%22%3A%22Em%22%2C%22root%22%3A%22e%22%7D%5D

## Development

```
npm install
npm run-script dev-server
```

## Testing

```
npm run-script test
```
