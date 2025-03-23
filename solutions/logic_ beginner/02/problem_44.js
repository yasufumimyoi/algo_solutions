const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const str = input[1].split('')

console.log(str.indexOf('a'))