const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const numbers = Number(input)
let count = 0

for (let i = 1; i <= numbers; i++) {
    if(i % 3 === 0) {
        count = count + 1
    }
}


console.log(count)