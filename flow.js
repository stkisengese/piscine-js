function flow(funcs) {
    return function(...args) {
      return funcs.reduce((acc, func, index) => {
        return index === 0 ? func(...acc) : func(acc);
      }, args);
    };
}