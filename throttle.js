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
    lastThis,
    result;

  const invokeFunc = (time) => {
    lastCall = time;
    timeout = null;
    result = func.apply(lastThis, lastArgs);
    lastThis = lastArgs = null;
    return result;
  };

  const leadingEdge = (time) => {
    lastCall = time;
    if (options.leading) {
      result = invokeFunc(time);
    }
    return result;
  };

  const trailingEdge = () => {
    if (timeout) clearTimeout(timeout);
    timeout = null;
    if (options.trailing && lastArgs) {
      return invokeFunc(Date.now());
    }
    lastThis = lastArgs = null;
    return result;
  };

  const remainingWait = (time) => {
    const timeSinceLastCall = time - lastCall;
    const timeWaiting = wait - timeSinceLastCall;
    return timeWaiting;
  };

  return function (...args) {
    const now = Date.now();
    const isInvoking = !timeout;
    lastThis = this;
    lastArgs = args;

    if (isInvoking) {
      if (options.leading) {
        return leadingEdge(now);
      }
      timeout = setTimeout(trailingEdge, wait);
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(trailingEdge, remainingWait(now));
    }
    return result;
  };
}
