const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.trim().split("\n");
const [A, B] = lines[0].split(' ').map(Number)
const [X, Y] = lines[1].split(' ').map(Number)
const total = A + B

if(A < X) {
  return console.log('No')
}

if(total >= Y) {
    console.log('Yes')
} else {
    console.log('No')
}