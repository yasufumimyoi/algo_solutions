const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const code = Number(input.codePointAt(0)) + 1
console.log(String.fromCodePoint(code))