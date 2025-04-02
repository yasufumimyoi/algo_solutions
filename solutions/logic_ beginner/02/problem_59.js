const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();

const index = input.split('').findIndex(x => x!=='0');
const result = input.slice(index)

console.log(result !== '0' ? result : "")