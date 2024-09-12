// Basic throttle function
function throttle(func, wait) {
  let timeout = null;
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall < wait) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        lastCall = now;
        func.apply(this, args);
      }, wait - (now - lastCall));
    } else {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Advanced throttle function with options
function opThrottle(func, wait, options = {}) {
  let timeout = null;
  let lastCall = 0;
  let lastArgs = null;
  const { leading = true, trailing = true } = options;

  return function (...args) {
    const now = Date.now();

    if (!lastCall && !leading) {
      lastCall = now;
    }

    const remaining = wait - (now - lastCall);

    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      lastCall = now;
      func.apply(this, args);
    } else if (!timeout && trailing) {
      lastArgs = args;
      timeout = setTimeout(() => {
        lastCall = leading ? Date.now() : 0;
        timeout = null;
        func.apply(this, lastArgs);
      }, remaining);
    }
  };
}
