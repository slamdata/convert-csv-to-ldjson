var x = require("papaparse");
var fs = require('fs');

x.parse(fs.createReadStream(process.argv[2]), {
  delimiter: ",",
  header: true,
  step: function(results) {
    console.log(JSON.stringify(results.data[0]) + "\n");
  }
});
