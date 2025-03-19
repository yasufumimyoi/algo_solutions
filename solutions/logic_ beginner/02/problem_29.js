const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.trim().split("\n");
const totalLength = Number(lines[0])

const checkScore = (level, score) => {
    if(level === 1) {
        if(score >= 90) {
            return 1
        } else {
            return 0
        }
    } else if (level === 2) {
        if(score >= 80) {
            return 1
        } else {
            return 0
        }
    } else if (level >= 3) {
        if(score >= 70) {
            return 1
        } else {
            return 0
        }
    } else {
        return 0
    }
}

let passedNumber = 0 

for(let i = 1; i <= totalLength; i++) {
    let [level, score] = lines[i].split(' ').map(Number)
    passedNumber += checkScore(level, score)
}
console.log(passedNumber)