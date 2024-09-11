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

  const leading = "leading" in options ? !!options.leading : true;
  const trailing = "trailing" in options ? !!options.trailing : true;

  function invokeFunc() {
    lastInvokeTime = Date.now();
    func(...lastArgs);
    lastArgs = null;
  }

  return function executedFunction(...args) {
    const currentTime = Date.now();
    const timeSinceLastInvoke = currentTime - lastInvokeTime;

    lastCallTime = currentTime;
    lastArgs = args;

    if (timeSinceLastInvoke >= wait && leading) {
      invokeFunc();
    } else if (!timeout && trailing) {
      timeout = setTimeout(() => {
        const shouldInvoke = Date.now() - lastCallTime >= wait;
        if (shouldInvoke) {
          invokeFunc();
        }
        timeout = null;
      }, Math.max(wait - timeSinceLastInvoke, 0));
    }
  };
}
