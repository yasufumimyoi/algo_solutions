const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const number = Number(input)

for (let i = 1; i <= number; i++) {
    let target = i.toString();
    if (!(target.includes("4")) && !(target.includes("9"))) { 
        console.log(target);
    }
}