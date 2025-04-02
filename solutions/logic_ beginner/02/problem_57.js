const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const price = Number(input)

console.log(price.toLocaleString())