const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const len = input[0]
const first = input[1].split('')
const second = input[2].split('')
let match = 0

for (let i = 0; i < len; i++) {
    if(first[i] === second[i]) {
        match = match + 1
    }
}

console.log(match)