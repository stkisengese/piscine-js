function format(date, format) {
    const options = {
        y: date.getFullYear() > 0 ? date.getFullYear() : -date.getFullYear(),
        yyyy: date.getFullYear() > 0 ? date.getFullYear() : String(-date.getFullYear()).padStart(4, '0'),
        G: date.getFullYear() > 0 ? 'AD' : 'BC',
        GGGG: date.getFullYear() > 0 ? 'Anno Domini' : 'Before Christ',
        M: date.getMonth() + 1,
        MM: String(date.getMonth() + 1).padStart(2, '0'),
        MMM: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][date.getMonth()],
        MMMM: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()],
        d: date.getDate(),
        dd: String(date.getDate()).padStart(2, '0'),
        E: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()],
        EEEE: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()],
        h: date.getHours() % 12 || 12,
        hh: String(date.getHours() % 12 || 12).padStart(2, '0'),
        m: date.getMinutes(),
        mm: String(date.getMinutes()).padStart(2, '0'),
        s: date.getSeconds(),
        ss: String(date.getSeconds()).padStart(2, '0'),
        H: date.getHours(),
        HH: String(date.getHours()).padStart(2, '0'),
        a: date.getHours() < 12 ? 'AM' : 'PM'
      };
      return format.replace(/y{1,4}|G{1,4}|M{1,4}|d{1,2}|E{1,4}|h{1,2}|m{1,2}|s{1,2}|H{1,2}|a/g, match => options[match]);
}

const d = new Date(1969, 4, 28);
console.log(format(d, 'yyyy')); // -> '03(08)19 [07] <Jan>'