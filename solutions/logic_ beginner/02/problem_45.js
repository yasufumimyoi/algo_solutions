const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const target = input[1].split('').filter((item) => item.includes('a'))

console.log(target.length)