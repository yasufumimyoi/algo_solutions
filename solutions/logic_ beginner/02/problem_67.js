const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const [T, A] = input.split(" ").map(Number);

const nextBusTime = Math.ceil(A / T) * T;
console.log(nextBusTime);
