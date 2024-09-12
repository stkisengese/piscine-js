// Retry function
function retry(count, callback) {
  return async function (...args) {
    let attempts = 0;
    let lastError;

    while (attempts <= count) {
      try {
        return await callback(...args);
      } catch (error) {
        lastError = error;
        attempts++;

        if (attempts > count) {
          throw new Error(`${attempts}:${lastError}`);
        }
      }
    }
  };
}

// Timeout function
function timeout(delay, callback) {
  return async function (...args) {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error("timeout")), delay);
    });

    return Promise.race([callback(...args), timeoutPromise]);
  };
}
