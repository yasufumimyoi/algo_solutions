const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();

console.log(input % 2 === 0 ? "even" : "odd")