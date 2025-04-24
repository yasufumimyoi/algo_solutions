const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const start = 96
console.log(Number(input.codePointAt(0)) - start)