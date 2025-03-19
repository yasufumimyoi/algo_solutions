const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.trim().split("\n");
const [_, len] = lines[0].split(' ').map(Number)
const array = lines[1].split(' ').map(Number)

for (let i = 1; i <= len; i++) {
    let index = Number(lines[i + 1])
    console.log(array[index])
}
