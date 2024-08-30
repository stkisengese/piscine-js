function sums(n) {
    let result = [];
    function backtrack(start, remaining, path) {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }
        for (let i = start; i <= remaining; i++) {
            path.push(i);
            backtrack(i, remaining - i, path);
            path.pop();
        }
    }   
    backtrack(1, n, []);
    return result;
}

console.log(sums(6)); // [ [1, 1, 1, 1], [1, 1, 2], [1, 3], [2, 2] ]

