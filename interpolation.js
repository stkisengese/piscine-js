function interpolation({ step, start, end, callback, duration }) {
  const stepSize = (end - start) / step;
  const timeStep = duration / step;

  for (let i = 0; i < step; i++) {
    const distance = Number((start + i * stepSize).toFixed(1));
    const point = i * timeStep;

    setTimeout(() => {
      callback([distance, point]);
    }, point);
  }
}

const options = {
  step: 5,
  start: 0,
  end: 1,
  callback: (data) => {
    console.log("Callback called with:", data);
  },
  duration: 10,
};

console.log(interpolation(options));
