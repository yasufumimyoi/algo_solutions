const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const inputLength = input.length
const MIN_LENGTH = 6

if (MIN_LENGTH < inputLength) {
    console.log("safe")
} else {
    console.log("dangerous")
}