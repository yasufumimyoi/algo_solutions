const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();

const result = input.split('')
const win = result.filter((item) => item === "o")

console.log(win.length)
