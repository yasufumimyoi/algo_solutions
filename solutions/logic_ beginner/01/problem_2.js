/*
2つの正の整数 A,B が空白区切りで入力されます。 A と B のうち大きい方の値を出力してください。
ただし、A と B の値は異なることが保証されています。
*/

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const [A, B] = input.split(' ').map(Number)

console.log(A > B ? A : B)
