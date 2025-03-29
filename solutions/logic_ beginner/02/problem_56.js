const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

let target = []
const firstStr = input[1].split('').map((item) => {
    if(item.includes("A")) {
        target.push('T')
    } else if(item.includes("T")) {
        target.push('A')
    } else if(item.includes("G")) {
        target.push('C')
    } else if(item.includes("C")) {
        target.push('G')
    }
})

console.log(target.join(''))