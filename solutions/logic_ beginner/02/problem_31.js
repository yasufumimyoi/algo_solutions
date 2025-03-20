const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [initialMoney, len] = input[0].split(" ").map(Number);
let pocketMoney = initialMoney;

const PLUS = 1;
const MINUS = 2;

for (let i = 1; i <= len; i++) {
    const [symbol, money] = input[i].split(" ").map(Number);

    if (symbol === PLUS) {
        pocketMoney += money;
    } else if (symbol === MINUS) {
        pocketMoney -= money;
    }

    if (pocketMoney < 0) {
        return console.log(i - 1); 
    }

    if(i === len && pocketMoney < 0) {
        console.log(i);
    } 

    if(i === len) {
        console.log(pocketMoney)
    }
 }
