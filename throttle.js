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
  const { leading = false, trailing = true } = options;
  let timeout = null;
  let lastArgs = null;
  let lastCallTime = 0;

  return function (...args) {
    const now = Date.now();
    const remaining = wait - (now - lastCallTime);
    const shouldCallNow = leading && !lastCallTime;
    const shouldCallLater = trailing && (remaining <= 0 || remaining >= wait);

    if (shouldCallNow) {
      func(...args);
      lastCallTime = now;
    }

    if (shouldCallLater && !timeout) {
      timeout = setTimeout(() => {
        timeout = null;
        if (trailing && lastArgs) {
          func(...lastArgs);
        }
        lastCallTime = leading ? Date.now() : 0;
        lastArgs = null;
      }, remaining);
    }

    lastArgs = args;
  };
}
