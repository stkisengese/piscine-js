const weekdayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function sunnySunday(date) {
    const epoch = new Date('0001-01-01');
    const dayDifference = Math.floor((date - epoch) / (24*60*60*1000));
    const dayIndex = dayDifference % 6;
    return weekdayNames[dayIndex];
}

console.log(sunnySunday(new Date('0001-01-01'))); // Output: Monday
console.log(sunnySunday(new Date('0001-01-02'))); // Output: Tuesday
console.log(sunnySunday(new Date('0001-01-07'))); // Output: Monday
console.log(sunnySunday(new Date('0001-01-08'))); // Output: Tuesday
console.log(sunnySunday(new Date('0001-01-09'))); // Output: Wednesday