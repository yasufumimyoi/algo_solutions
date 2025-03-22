const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const N = Number(input);
const len = 2 * N;
let rest = Array.from({ length: len }, (_, i) => i);
let target = [];

for (let n = 0; n < N; n++) {
    target.push(rest.shift()); 
    target.push(rest.pop());  
}

console.log(target.join("\n"));