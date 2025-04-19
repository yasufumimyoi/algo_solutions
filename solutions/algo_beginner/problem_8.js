const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.trim().split("\n");
const len = Number(lines[0])
const numbers = lines[1].split(' ').map(Number)
let count = 0

for(let i = 0; i < len; i++) {
    if(numbers[i] < numbers[i + 1]) {
        count = count + 1
    }
}

console.log(count)