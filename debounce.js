// Basic debounce function
function debounce(func, wait) {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounce function with 'leading' option
function opDebounce(func, wait, options = {}) {
  let timeout;
  let lastCallTime = 0;

  return function executedFunction(...args) {
    const currentTime = Date.now();
    const isCooldownPeriodOver = currentTime - lastCallTime > wait;

    if (options.leading && isCooldownPeriodOver) {
      lastCallTime = currentTime;
      func(...args);
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        lastCallTime = Date.now();
        if (!options.leading || isCooldownPeriodOver) {
          func(...args);
        }
      }, wait);
    }
  };
}
