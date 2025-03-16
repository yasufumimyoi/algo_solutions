const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const time = 24
const currentTime = Number(input)

console.log(time- currentTime)