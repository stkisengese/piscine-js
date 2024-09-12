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
  let timeout = null;
  let lastArgs = null;
  let lastCallTime = 0;
  let result;

  const later = (context) => {
    lastCallTime = options.leading === false ? 0 : Date.now();
    timeout = null;
    if (options.trailing && lastArgs) {
      result = func.apply(context, lastArgs);
      lastArgs = null;
    }
  };

  return function (...args) {
    const now = Date.now();
    const isInvoking = options.leading && now - lastCallTime >= wait;

    if (!lastCallTime && options.leading === false) {
      lastCallTime = now;
    }

    if (isInvoking) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      result = func.apply(this, args);
      lastCallTime = now;
    } else if (!timeout && options.trailing) {
      lastArgs = args;
      timeout = setTimeout(() => later(this), wait);
    }

    return result;
  };
}
