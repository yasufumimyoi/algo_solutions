const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const number = Number(input)

console.log(number % 3 === 0 ? "Yes" : "No")