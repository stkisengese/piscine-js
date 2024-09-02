const isValid = (date) => date instanceof Date && !isNaN(new Date(date)) || Date.now() === date;

//checks if the fist date is after the second date
function isAfter(date1, date2) {
    return isValid(date1) && isValid(date2) && date1.getTime() > date2.getTime();
}

// checks if first date is before the second date
function isBefore(date1, date2) {
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
console.log(isAfter(date1, date2)); 
console.log(isBefore(date1, date2));
console.log(isFuture(date1)); 
console.log(isPast(date2)); 