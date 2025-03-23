const daysInMonth = 31;
const firstDayOfWeek = 3; 

let week = [];
for (let i = 0; i < firstDayOfWeek; i++) {
    week.push("."); 
}

for (let day = 1; day <= daysInMonth; day++) {
    week.push(day);

    if (week.length === 7) {
        console.log(week.join(" "));
        week = [];
    }
}


if (week.length > 0) {
    console.log(week.join(" "));
}
