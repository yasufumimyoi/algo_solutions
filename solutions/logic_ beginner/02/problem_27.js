const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const len = Number(input)
const checkFizzBuzz = (number) => 
    number % 3 === 0 && number % 5 === 0 ? "FizzBuzz" :
    number % 3 === 0 ? "Fizz" :
    number % 5 === 0 ? "Buzz" :
    number;

for (let i = 1; i <= len; i++) {
    console.log(checkFizzBuzz(i))
}
