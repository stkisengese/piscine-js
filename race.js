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
  if (promises.length === 0 || count === 0) {
    return Promise.resolve([]);
  }
  return new Promise((resolve) => {
    const results = [];
    let resolvedCount = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          resolvedCount++;

          if (resolvedCount === count) {
            resolve(results.slice(0, promises.length));
          }
        })
        .catch(() => {});
    });
  });
}
