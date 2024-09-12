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
    const timeSinceLastCall = now - lastCallTime;
    const shouldCallNow = leading && timeSinceLastCall >= wait;
    const shouldCallLater = trailing && timeSinceLastCall >= wait;

    if (shouldCallNow) {
      func(...args);
      lastCallTime = now;
    } else if (!timeout) {
      timeout = setTimeout(() => {
        if (trailing && lastArgs) {
          func(...lastArgs);
        }
        lastCallTime = leading ? Date.now() : 0;
        timeout = null;
        lastArgs = null;
      }, wait - timeSinceLastCall);
    }

    lastArgs = args;
  };
}
