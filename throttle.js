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
function opThrottle(func, wait, options = { leading: true, trailing: true }) {
  let timeout,
    lastCall = 0,
    lastArgs,
    lastThis;

  const invokeFunc = (time) => {
    lastCall = time;
    timeout = null;
    func.apply(lastThis, lastArgs);
    lastThis = lastArgs = null;
  };

  const leadingEdge = (time) => {
    lastCall = time;
    if (options.leading) {
      invokeFunc(time);
    }
  };

  const trailingEdge = () => {
    if (options.trailing && lastArgs) {
      invokeFunc(Date.now());
    }
    timeout = null;
  };

  return function (...args) {
    const now = Date.now();
    const remaining = wait - (now - lastCall);
    lastThis = this;
    lastArgs = args;

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      lastCall = now;
      func.apply(lastThis, lastArgs);
      lastThis = lastArgs = null;
    } else if (!timeout && options.trailing) {
      timeout = setTimeout(trailingEdge, remaining);
    }
  };
}
