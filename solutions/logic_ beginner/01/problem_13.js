const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.trim().split("\n");
let S = lines[0].split("");
const [N, M] = lines[1].split(' ').map(Number)

const originalText = lines[0]
const firstLetter = originalText.charAt(N - 1)
const secondLetter = originalText.charAt(M - 1)

S[N - 1] = secondLetter
S[M - 1] = firstLetter

console.log(S.join(""))

