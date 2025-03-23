const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const [_, start, end] = input[0].split(' ').map(Number)
const str = input[1]

console.log(str.substring(start, (end + 1)))