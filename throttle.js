// Basic throttle function
function throttle(func, wait) {
  let timeout = null;
  let lastArgs = null;
  let lastCallTime = 0;

  return function executedFunction(...args) {
    const currentTime = Date.now();

    if (!lastCallTime || currentTime - lastCallTime >= wait) {
      func(...args);
      lastCallTime = currentTime;
    } else {
      lastArgs = args;
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          lastCallTime = Date.now();
          func(...lastArgs);
        }, wait - (currentTime - lastCallTime));
      }
    }
  };
}

// Throttle function with 'trailing' and 'leading' options
function opThrottle(func, wait, options = {}) {
  let lastArgs = null;
  let lastCallTime = 0;
  let timeout = null;
  let result;

  const leading = "leading" in options ? !!options.leading : true;
  const trailing = "trailing" in options ? !!options.trailing : true;

  function invokeFunc(time) {
    const args = lastArgs;
    lastArgs = null;
    lastCallTime = time;
    result = func(...args);
  }

  function shouldInvoke(time) {
    return lastCallTime === 0 || time - lastCallTime >= wait;
  }

  function trailingEdge(time) {
    timeout = null;
    if (trailing && lastArgs) {
      invokeFunc(time);
    }
  }

  return function throttledFunction(...args) {
    const time = Date.now();
    lastArgs = args;

    if (shouldInvoke(time)) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      if (leading || lastCallTime > 0) {
        return invokeFunc(time);
      }
    }

    if (!timeout && trailing) {
      timeout = setTimeout(
        () => trailingEdge(Date.now()),
        wait - (time - lastCallTime)
      );
    }

    return result;
  };
}
