const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const score = Number(input)

if(!score) {
    console.log("invalid")
}

if(score === 100) {
    console.log('S')
} else if(score >= 90 && score <= 99){
    console.log('A')
} else if (score >= 80 && score <= 89) {
    console.log('B')
} else if (score >= 70 && score <= 79) {
    console.log('C')
} else if (score >= 60 && score <= 69) {
    console.log('D')
} else if (score >= 50 && score <= 59) {
    console.log('E')
} else if (score <= 49) {
    console.log('F')
} 