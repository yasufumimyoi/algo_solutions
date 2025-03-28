const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const len = Number(input[0])
const firstStr = input[1].split('')
const secondStr = input[2].split('')
let count = 0

for (let i = 0; i <= len; i++) {
    if(firstStr[i] !== secondStr[i]){
        count = count + 1
    }
}

console.log(count)
