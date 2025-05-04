const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();

if(input.length !== 4 ) {
    return console.log('invalid')
}

function isNumericString(str) {
  return /^\d+$/.test(str);
}

console.log(isNumericString(input) ? 'valid' : "invalid")