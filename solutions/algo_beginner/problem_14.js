const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.trim().split("\n");
const len = Number(lines[0]);
const str = lines[1].split('');

const printType = (ch) => {
    const code = ch.charCodeAt(0);
    if (code >= 48 && code <= 57) {
        console.log('digit');
    } else if (code >= 65 && code <= 90) {
        console.log('uppercase');
    } else if (code >= 97 && code <= 122) {
        console.log('lowercase');
    } else {
        console.log(ch); // ← 文字をそのまま出力
    }
}

for (let i = 0; i < len; i++) {
    printType(str[i]);
}

