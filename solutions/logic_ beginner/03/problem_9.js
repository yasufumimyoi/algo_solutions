const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const price = Number(input)
const taxRate = 0.1
const tax = price * taxRate
const totalPrice = price + tax

console.log(totalPrice)