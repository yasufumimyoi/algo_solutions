const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const day = Number(input)
const days = [	"Sun",	"Mon",	"Tue"	,"Wed"	,"Thu"	,"Fri"	,"Sat"]
const targetDate = new Date(`2021-1-${day}`);
console.log(days[targetDate.getDay()])