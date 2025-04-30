const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const charCode = input.charCodeAt(0);

if (charCode >= 97 && charCode <= 122) {
    console.log('lowercase');
} else {
    console.log('uppercase');
}
