const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.trim().split("\n");
const len = Number(lines[0])

let str = ""
for (let i = 1; i <= len; i++) {
  str = str + lines[i];
}

console.log(str.length)