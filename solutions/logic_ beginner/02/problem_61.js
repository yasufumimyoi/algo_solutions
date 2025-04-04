const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();

const [savings, price] = input.split(' ')

console.log(savings % price)