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
  let timeout = null;
  let lastArgs = null;
  let lastCallTime = 0;
  let lastInvokeTime = 0;
  let isInvoking = false;

  const leading = "leading" in options ? !!options.leading : true;
  const trailing = "trailing" in options ? !!options.trailing : true;

  function invokeFunc(time) {
    lastInvokeTime = time;
    isInvoking = true;
    func(...lastArgs);
    isInvoking = false;
  }

  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;

    return (
      lastCallTime === 0 ||
      timeSinceLastCall >= wait ||
      timeSinceLastInvoke >= wait
    );
  }

  function trailingEdge(time) {
    timeout = null;
    if (trailing && lastArgs) {
      invokeFunc(time);
    }
    lastArgs = null;
  }

  return function throttledFunction(...args) {
    const time = Date.now();
    const isInvokeNeeded = shouldInvoke(time);

    lastArgs = args;
    lastCallTime = time;

    if (isInvokeNeeded) {
      if (timeout === null) {
        if (leading) {
          invokeFunc(time);
        }
      }
      if (timeout === null && !isInvoking && trailing) {
        timeout = setTimeout(() => trailingEdge(Date.now()), wait);
      }
    } else if (timeout === null && trailing) {
      timeout = setTimeout(() => trailingEdge(Date.now()), wait);
    }

    return lastInvokeTime;
  };
}
