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
  let lastCallTime = 0;
  let lastInvokeTime = 0;
  let timeout = null;
  let lastArgs = null;

  const leading = "leading" in options ? !!options.leading : true;
  const trailing = "trailing" in options ? !!options.trailing : true;

  function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    return (
      lastCallTime === 0 ||
      timeSinceLastCall >= wait ||
      timeSinceLastInvoke >= wait
    );
  }

  function invokeFunc(time) {
    lastInvokeTime = time;
    func(...lastArgs);
  }

  function leadingEdge(time) {
    lastInvokeTime = time;
    if (leading) invokeFunc(time);
    return leading;
  }

  function trailingEdge(time) {
    timeout = null;
    if (trailing && lastArgs) invokeFunc(time);
  }

  return function throttled(...args) {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    lastCallTime = time;

    if (isInvoking) {
      if (timeout === null) {
        if (leadingEdge(time)) {
          return;
        }
      } else {
        clearTimeout(timeout);
        timeout = null;
      }
      lastInvokeTime = time;
      if (trailing) invokeFunc(time);
    } else if (timeout === null && trailing) {
      timeout = setTimeout(
        () => trailingEdge(Date.now()),
        Math.max(wait - (time - lastCallTime), 0)
      );
    }
  };
}
