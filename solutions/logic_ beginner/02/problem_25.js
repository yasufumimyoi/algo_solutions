const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.trim().split("\n");
const len = Number(lines[0])

let totalAmount = 0
for (let i = 1; i <= len; i++) {
  let [A, B] = lines[i].split(' ').map(Number)
  totalAmount = totalAmount + (A * B);
}

console.log(totalAmount)