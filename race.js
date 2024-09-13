function race(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) {
      return;
    }

    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
}

function some(promises, count) {
  return new Promise((resolve, reject) => {
    if (promises.length === 0 || count === 0) {
      resolve([]);
      return;
    }

    const results = [];
    let resolvedCount = 0;
    let rejectedCount = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          if (resolvedCount < count) {
            results[index] = value;
            resolvedCount++;

            if (resolvedCount === count) {
              resolve(results.filter((result) => result !== undefined));
            }
          }
        })
        .catch(() => {
          rejectedCount++;
          if (
            rejectedCount + resolvedCount === promises.length &&
            resolvedCount < count
          ) {
            resolve(results.filter((result) => result !== undefined));
          }
        });
    });
  });
}
