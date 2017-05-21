var args = process.argv.slice(2);
var sum = 0;

args.map((item) => {
    sum = sum + parseInt(item);
});

console.log(sum);
