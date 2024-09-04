function mult2(a) {
    return function(b) {
      return a * b;
    };
}

function add3(a) {
    return function(b) {
      return function(c) {
        return a + b + c;
      };
    };
}

const sub4 = (a) =>
    (b) =>
        (c) =>
            (d) =>
                a - b - c - d;
