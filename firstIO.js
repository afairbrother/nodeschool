let fs = require('fs');

let path = process.argv[2];

let file = fs.readFileSync(path);

let splits = file.toString().split('\n');

console.log(splits.length - 1);
