const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8");
const lines = input.trim().split("\n");
const S = lines[0];
const N = lines[1] - 1;

console.log(S.charAt(N))