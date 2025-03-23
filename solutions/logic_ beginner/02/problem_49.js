const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const len = input[0]
const str = input[1]
let count = 0

for (let i = 0; i <= len - 3; i++) {
    if(str.substring(i, i + 3) === "abc") {
        count++;
    }
}

console.log(count)