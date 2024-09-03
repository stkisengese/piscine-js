function countLeapYears(date) {
    const year = date.getFullYear();
    const leapYears = Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);
    if (year > 1) {
        return leapYears - 1; 
    }
    return leapYears;
  }

console.log(countLeapYears(new Date('0001-12-01'))) // 0
console.log(countLeapYears(new Date(Date.now()))) // 490
console.log(countLeapYears(new Date('2020-01-01'))) // 489