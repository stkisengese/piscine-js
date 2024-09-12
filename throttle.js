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
function opThrottle(func, wait, options = {}) {
  let last = 0;
  let timer = null;
  const leading = options.leading !== false;
  const trailing = options.trailing !== false;

  function invoke(time) {
    last = time;
    func.apply(this, arguments);
  }

  return function () {
    const now = +new Date();
    const remaining = wait - (now - last);

    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      if (leading || last !== 0) {
        invoke(now);
      } else if (trailing) {
        last = now;
      }
    } else if (!timer && trailing) {
      timer = setTimeout(() => {
        invoke(+new Date());
      }, remaining);
    }
  };
}
