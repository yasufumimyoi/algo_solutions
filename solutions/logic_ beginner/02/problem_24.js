const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.trim().split("\n");
const firstLine = lines[1].split(' ').map(Number).filter((item) => item > 0)
const secondLine = lines[2].split(' ').map(Number).filter((item) => item > 0)

console.log(firstLine.length === secondLine.length ? "same" : firstLine.length > secondLine.length ? "A" : "B")

