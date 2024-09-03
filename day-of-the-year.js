function dayOfTheYear(date) {
    const yearStart = new Date(date.getFullYear(), 0, 1);
    const diff = date - yearStart;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay) + 1;
}

console.log(dayOfTheYear(new Date('2022-02-29'))); // Output: 59
console.log(dayOfTheYear(new Date('2024-01-03'))); // Output: 247