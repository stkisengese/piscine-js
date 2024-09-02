function firstDayWeek(week, year) {
    year = parseInt(year);
    let jan1 = new Date(year, 0, 1);
   
    jan1.setDate(jan1.getDate() + (8-jan1.getDate())%7);
    jan1.setDate(jan1.getDate() + (week -1)*7);
    
    // if targetDate is in previous year, we return January 1st
    if (jan1.getFullYear() < year) {
        return formatDate(jan1);
    }
    return formatDate(jan1);
}

function formatDate(date) {
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();

    return `${day}-${month}-${year}`;
}

// Example usage:
console.log(firstDayWeek(1, 2024)); // Output: "01-01-2024"
console.log(firstDayWeek(2, 2025)); // Output: "08-01-2024"