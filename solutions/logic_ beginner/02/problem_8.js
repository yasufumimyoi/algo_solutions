const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const year = Number(input)
const exceptionYear = 2021
const postponedYear = 2020

if((year % 4 == 0 && year !== postponedYear) || year === exceptionYear) {
    console.log('Yes')
} else {
    console.log('No')
}