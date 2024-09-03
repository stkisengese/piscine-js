function matchCron(cron, date) {
    const [cronMin, cronHour, cronDay, cronMonth, cronWeekday] = cron.split(' ');

    const dateMin = date.getMinutes();
    const dateHour = date.getHours();
    const dateDay = date.getDate();
    const dateMonth = date.getMonth() + 1;
    const dateWeekday = date.getDay() === 0 ? 7 : date.getDay();

    function match(cronPart, datePart) {
        return cronPart === '*' || cronPart === String(datePart);
    }
    
    return match(cronMin, dateMin) &&
        match(cronHour, dateHour) &&
        match(cronDay, dateDay) &&
        match(cronMonth, dateMonth) &&
        match(cronWeekday, dateWeekday);
}

console.log(matchCron('9 * * * *', new Date('2020-05-30 18:09:00'))); // Output: true
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00'))); // Output: true
console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00'))); // Output: false