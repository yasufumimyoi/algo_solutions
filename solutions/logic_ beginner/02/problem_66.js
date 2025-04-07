const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const [people, limit] = input.split(' ').map(Number)

const busWithFull = Math.floor(people / limit)
const extraPeople = people % limit === 0 ? 0 : 1

console.log(busWithFull + extraPeople)