const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
let [savings, price] = input.split(' ')

console.log(Math.floor(savings / price))