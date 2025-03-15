/*
2つの正の整数 A,B が空白区切りで入力されます。A が B の倍数かどうかを判定してください。
*/

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const [A, B] = input.split(' ').map(Number)

if(A % B === 0){
    console.log('Yes')
} else {
    console.log('No')
}