const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const [math, english] = input.split(' ').map(Number)
const min = 70
const total = 160

if((math >= min && english >= min) && (math + english >= total)) {
    console.log('Yes')
} else {
    console.log('No')
}