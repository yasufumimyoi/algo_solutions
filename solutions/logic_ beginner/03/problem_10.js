const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const [A, B] = input.split(' ').map(Number)
const A1 = A % 10
const B1 = B % 10

console.log(A1 > B1 ? B : A)