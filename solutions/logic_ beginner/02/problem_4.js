const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const score = Number(input)

if(score >= 90 && score <= 100){
    console.log('A')
} else if (score >= 80 && score <= 89) {
    console.log('B')
} else {
    console.log('C')
}