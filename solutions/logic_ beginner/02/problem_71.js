const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const number = Number(input)

const checkFizzBuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else {
    return number;
  }
};

Array.from({length: number}, (_, index) => {
    console.log(checkFizzBuzz(index + 1))
})

