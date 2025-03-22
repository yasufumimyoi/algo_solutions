for (let i = 1; i <= 9; i++) {
    let numbers = []
    for (let j = 1; j <= 9; j++) {
        numbers.push(i * j);
    }
    console.log(numbers.join(' '))
    numbers = []
}