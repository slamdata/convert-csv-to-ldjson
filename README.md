Example usage:

`node convert-csv-to-ldjson.js input.csv > output.ldjson`

For many files use:

`for f in directory/*.csv; do node convert-csv-to-ldjson.js "$f" > "${f%.csv}.ldjson" ; done`

Don't forget to run `npm i` first.
