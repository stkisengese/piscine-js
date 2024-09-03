function firstDayWeek(week, year) {
  let time = new Date(year);
  if (week === 1) {
    time.setHours(24);
    return formattedDate(time);
  }

  let dayPlus = week * 7 * 24;
  time.setHours(dayPlus -123);

  for (let i = 0; i < 7; i++ ) {
    if (getWeekDay(time) === 'Monday') {
      return formattedDate(time);
    }
    time.setHours(-24);
  }
  return time;
}

function formattedDate(date) {
  let dd = String(date.getDate() - 1).padStart(2, '0');
  let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = String(date.getFullYear()).padStart(4, '0');
  return `${dd}-${mm}-${yyyy}`;
}

function getWeekDay(date) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[date.getDay() - 1];
}

// Example usage:
console.log(firstDayWeek(1, 2024)); // Output: "01-01-2024"
console.log(firstDayWeek(2, 2025)); // Output: "08-01-2024"
