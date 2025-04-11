const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const number = Number(input)

const checkFizzBuzz = (number) => {
  if (number % 4 === 0 && number % 6 === 0) {
    return "FizzBuzz";
  } else if (number % 4 === 0) {
    return "Fizz";
  } else if (number % 6 === 0) {
    return "Buzz";
  } else {
    return number;
  }
};

Array.from({length: number}, (_, index) => {
    console.log(checkFizzBuzz(index + 1))
})
