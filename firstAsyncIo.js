let fs = require('fs');

let path = process.argv[2];

let file;

fs.readFile(path, function read(err, data) {
    if (err) throw err;

    file = data;
    console.log(file.toString().split('\n').length - 1);
});
