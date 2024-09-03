function dayOfTheYear(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let totalDays = 0;
    for (let i = 0; i < month - 1; i++) {
      totalDays += daysInMonth[i];
    }
    totalDays += day;
    return totalDays;
  }

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

console.log(dayOfTheYear(new Date('2022-02-29'))); // Output: 60
console.log(dayOfTheYear(new Date('0001-01-01'))); // Output: 1