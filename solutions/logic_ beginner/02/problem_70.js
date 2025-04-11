const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const number = Number(input)

const checkFizzBuzz = (number) => {
    return number % 3 === 0 && number % 5 === 0 ? number : number % 5 === 0 ? number : number % 3 === 0 ? "Yes" : number
}

console.log(checkFizzBuzz(number))