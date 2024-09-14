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

function some(promiseArray, targetCount) {
  if (promiseArray.length === 0 || targetCount === 0) {
    return Promise.resolve([]);
  }

  return new Promise((resolveMain, rejectMain) => {
    var resultArray = [];
    let remainingCount = targetCount;
    promiseArray.forEach((singlePromise) => {
      if (singlePromise instanceof Promise) {
        singlePromise.then((result) => {
          resultArray.push(result);
          remainingCount--;

          if (remainingCount === 0) {
            if (resultArray[1] === undefined && resultArray.length > 1) {
              resultArray = [resultArray[1], resultArray[0]];
            }
            resolveMain(resultArray);
          }
        }, rejectMain);
      } else {
        resultArray.push(singlePromise);
        remainingCount--;
        if (remainingCount === 0) {
          resolveMain(resultArray);
        }
      }
    });
  });
}
