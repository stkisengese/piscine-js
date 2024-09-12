function interpolation({ step, start, end, callback, duration }) {
  const stepSize = (end - start) / step;
  const timeStep = duration / step;

  for (let i = 1; i <= step; i++) {
    const distance = Number((start + (i - 1) * stepSize).toFixed(2));
    const point = Number((i * timeStep).toFixed(2));

    setTimeout(() => {
      callback([distance, point]);
    }, point);
  }
}

const options = {
  step: 3,
  start: 1,
  end: 2,
  callback: (data) => {
    console.log("Callback called with:", data);
  },
  duration: 10,
};

console.log(interpolation(options));
