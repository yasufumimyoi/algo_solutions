const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const PASSWORD = "password"

console.log(input === PASSWORD ? "dangerous" : "safe")
