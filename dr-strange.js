const {format, addDays} = require('date-fns');

function addWeek(date) {
    const epoch = new Date('0001-01-01');
    const dayDifference = Math.floor((date - epoch) / (24*60*60*1000));
    const weekdayIndex = dayDifference % 14;
    return format(addDays(new Date('0001-01-01'), weekdayIndex), 'dddd');
}

function timeTravel(options) {
    const { date, hour, minute, second } = options;
    return new Date(date.getTime() + (hour * 3600000) + (minute * 60000) + (second * 1000));
}
