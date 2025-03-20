const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const len = Number(input[0]);

for (let i = 1; i <= len; i++) {
    const [middleTestScore, finalTestScore] = input[i].split(" ").map(Number);
    const averageScore = (middleTestScore + finalTestScore) / 2;
    const score = Math.max(finalTestScore, averageScore);

    if (score >= 90) console.log("S");
    else if (score >= 80) console.log("A");
    else if (score >= 70) console.log("B");
    else if (score >= 60) console.log("C");
    else console.log("F");
}
