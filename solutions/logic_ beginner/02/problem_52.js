for (let i = 1; i <= 31; i += 7) {
    console.log([...Array(7)].map((_, j) => i + j).filter(n => n <= 31).join(' '));
}
