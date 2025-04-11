const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const number = Number(input)
let count = 0

const checkFizzBuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return 0;
  } else if (number % 3 === 0) {
    return 1;
  } else if (number % 5 === 0) {
    return 0;
  } else {
    return 0;
  }
};

for (let i = 1; i <= number; i++) {
   count = count + checkFizzBuzz(i)
}

console.log(count)



