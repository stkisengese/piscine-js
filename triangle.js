function triangle(char, height) {
    let i = 1;
    while (i < height) {
        console.log(char.repeat(i));
        i++;
    }
    return char.repeat(i);
}

console.log(triangle("H", 5));