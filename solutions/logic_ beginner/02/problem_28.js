const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.trim().split("\n");
const total = Number(lines[0])
const average = lines[1].split(' ').map(Number).reduce((sum, element) => sum + element) / total 
const array = lines[1].split(' ').map(Number)

array.forEach((element, index) => {
    if(element >= average) {
        console.log(index)
    }
})