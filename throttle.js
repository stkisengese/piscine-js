// Basic throttle function
function throttle(func, wait) {
  let last = 0;
  return function () {
    const now = +new Date();
    if (now - last > wait) {
      func.apply(this, arguments);
      last = now;
    }
  };
}

// Advanced throttle function with options
function opThrottle(func, wait, { leading = false, trailing = false }, {}) {
  let last = 0;
  let timer = null;
  return function () {
    const now = +new Date();
    // leading execution
    if (!last && leading === false) {
      last = now;
    }

    if (now - last > wait) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      func.apply(this, arguments);
      last = now;
      // trailing execution
    } else if (!timer && trailing !== false) {
      timer = setTimeout(() => {
        func.apply(this, arguments); // execute function immediately
        last = +new Date();
        timer = null;
      }, wait);
    }
  };
}
