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
function opThrottle(fn, wait, options = {}) {
  let timeout = null;
  let lastCall = 0;
  const { leading = true, trailing = true } = options;

  return function (...args) {
    const now = Date.now();

    if (!lastCall && !leading) lastCall = now;

    const remaining = wait - (now - lastCall);

    if (remaining <= 0) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      lastCall = now;
      fn.apply(this, args);
    } else if (trailing && !timeout) {
      timeout = setTimeout(() => {
        lastCall = leading ? 0 : Date.now();
        timeout = null;
        fn.apply(this, args);
      }, remaining);
    }
  };
}
