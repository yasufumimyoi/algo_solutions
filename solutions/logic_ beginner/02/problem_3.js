const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const score = Number(input)
const min = 0
const max = 100
if(min <= score && max >= score) {
    console.log('valid')
} else {
    console.log('invalid')
}