function isFriday(date) {
    if (!isValid(date)) return false;
    return date.getDay() === 5; // 5 represents Friday
}

function isWeekend(date) {
    if (!isValid(date)) return false;
    return date.getDay() === 6 || date.getDay() === 0; // 7 represents
}

function isLeapYear(date) {
    if (!isValid(date)) return false;
    const year = date.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function isLastDayOfMonth(date) {
    if (!isValid(date)) return false;
    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 1);
    return nextDate.getDate() === 1;
}

function isValid(date) {
    if (typeof date === 'number') {
        date = new Date(date);
        
    }
    return date instanceof Date && !isNaN(date.getTime());
}

const date = new Date(Date.now());
console.log(isFriday(date)); // false
// console.log(isWeekend('2024-09-14')); // true
console.log(isWeekend(date)); // false
console.log(isLeapYear(date)); // true
console.log(isLastDayOfMonth(date)); // false