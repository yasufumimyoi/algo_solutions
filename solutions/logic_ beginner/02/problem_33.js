const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.trim().split("\n");
const numbers = lines[1].split(' ').map(Number)
const reversedNumber = numbers.reverse();

for(const number of reversedNumber) {
    console.log(number)
}
