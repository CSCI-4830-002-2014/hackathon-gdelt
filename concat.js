// Challenge Week 7
// Brian Newsom
// Script to concatenate files using nodejs
var fs = require('fs');

function append(file,toAppend){
  fs.readFile(toAppend, function read(err,data) {
    if (err) {
      throw err;
    }
    console.log("File Read successful");
    fs.appendFile(file, data, function (err) {
      if (err) {
        throw err;
      }
      console.log('Data appended to file');
    });
  });
}

// Async is okay here because order doesn't matter, we just need the data

file = './data/headers.txt';
toAppend = './data/20140731.export.CSV';
append(file,toAppend);

toAppend = './data/20140801.export.CSV';
append(file,toAppend);

toAppend = './data/20140802.export.CSV';
append(file,toAppend);

toAppend = './data/20140803.export.CSV';
append(file,toAppend);

toAppend = './data/20140930.export.CSV';
append(file,toAppend);

toAppend = './data/20141001.export.CSV';
append(file,toAppend);

toAppend = './data/20141002.export.CSV';
append(file,toAppend);

toAppend = './data/20141003.export.CSV';
append(file,toAppend);
