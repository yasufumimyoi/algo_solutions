const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.trim().split("\n");
const [len, target] = lines[0].split(' ').map(Number)
const numbers = lines[1].split(' ').map(Number)

let index = -1

for (let i = 0; i <= len; i++) {
  if(numbers[i] === target) {
    index = i
  }
}

console.log(index)