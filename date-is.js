function isValid(date) {
    if (typeof date === 'number') {
        date = new Date(date);
    }
    return date instanceof Date && !isNaN(new Date(date));
}

//checks if the fist date is after the second date
function isAfter(date1, date2) {
    if (typeof date1 === 'number') {
        date1 = new Date(date1);
    }
    if (typeof date2 === 'number') {
        date2 = new Date(date2);
    }
    return isValid(date1) && isValid(date2) && date1.getTime() > date2.getTime();
}

// checks if first date is before the second date
function isBefore(date1, date2) {
    if (typeof date1 === 'number') {
        date1 = new Date(date1);
    }
    if (typeof date2 === 'number') {
        date2 = new Date(date2);
    }
    return isValid(date1) && isValid(date2) && date1.getTime() < date2.getTime();
}

// checks if a given date is in future
function isFuture(date) {
    return isValid(date) && isAfter(date, new Date());
}

// checks if a given date is in past
function isPast(date) {
    return isValid(date) && isBefore(date, new Date());
}
  
const date1 = new Date('2024-10-02');
const date2 = new Date('2023-09-02');

console.log(isValid(date1)); 
console.log(isValid(Date.now())); 
console.log(isValid(new Date('1995-12-17T03:24:00').getTime())); 
console.log(isAfter(date1, date2)); 
console.log(isAfter(123123, 526));
console.log(isBefore(date1, date2));
console.log(isFuture(date1)); 
console.log(isPast(date2)); 