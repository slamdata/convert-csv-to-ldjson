Example usage:

`node convert-csv-to-json.js input.csv > output.ldjson`

For many files use:

`for f in directory/*.csv; do node convert-csv-to-json.js "$f" > "${f%.csv}.ldjson" ; done`

Don't forget to run `npm i` first.
