const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const [len, min, max] = input.split(' ').map(Number)

let targetCards = []
let originalCard = []

for(let i = 0; i < len; i++) {
    if(i >= min && i <= max) {
        targetCards.push(i)
    } else {
        originalCard.push(i)
    }
}

console.log([...targetCards, ...originalCard].join('\n'));
