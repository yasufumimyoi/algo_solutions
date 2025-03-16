const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim()
const array = input.split(' ').map(Number)

console.log(Math.max(...array));