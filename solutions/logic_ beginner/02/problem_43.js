const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");
const str = input[1].split('')

for (let i = 0; i <= str.length; i++) {
    if(str[i] === "a") {
        console.log(i)
    }
}

