const weekdayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function addWeek(date) {
    const epoch = new Date('0001-01-01');
    const dayDifference = Math.floor((date - epoch) / (24*60*60*1000));
    const dayIndex = dayDifference % 6;
    return weekdayNames[dayIndex];
}