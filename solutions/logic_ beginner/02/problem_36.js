const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const reversedInput = input.split('').reverse().join(''); 
console.log(input === reversedInput ? "Yes" : "No")