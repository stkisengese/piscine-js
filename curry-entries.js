const defaultCurry = (obj1) => (obj2) => ({ ...obj1, ...obj2 });

const mapCurry = (fn) => (obj) =>
  Object.fromEntries(Object.entries(obj).map(fn));

const reduceCurry = (fn) => (obj, initialValue) =>
  Object.entries(obj).reduce(fn, initialValue);

const filterCurry = (fn) => (obj) =>
  Object.fromEntries(Object.entries(obj).filter(fn));

// reduceScore returns the total value of scores of people who use the force.
const reduceScore = (personnel, addParam = 0) =>
  reduceCurry((acc, [_, person]) =>
    person.isForceUser ? acc + person.pilotingScore + person.shootingScore : acc
  )(personnel, addParam);

// filterForce returns an object of only people who use the force greater or equal to 80.
const filterForce = (personel) =>
  filterCurry(
    ([_, { pilotingScore, shootingScore }]) =>
      pilotingScore + shootingScore >= 80
    //   ([_, person]) => 
    //   person.isForceUser && person.shootingScore >= 80
  )(personel);

// mapAverage returns the averageScore property for average score per person.
const mapAverage = (personnel) =>
  mapCurry(([name, person]) => [
    name,
    {
      ...person,
      averageScore: (person.pilotingScore + person.shootingScore) / 2,
    },
  ])(personnel);

// // Example usage:
// console.log(defaultCurry({ a: 1, b: 2 })({ b: 3, c: 4 }));
// console.log(mapCurry(([k, v]) => [`${k}_mapped`, v * 2])({ a: 1, b: 2 }));
// console.log(reduceCurry((acc, [_, v]) => acc + v)({ a: 1, b: 2, c: 3 }, 0));
// console.log(filterCurry(([_, v]) => v > 1)({ a: 1, b: 2, c: 3 }));

// // Using the personnel data:
// const personnel = {
//   lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
//   sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
//   zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
//   ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
//   calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
// };

// console.log(reduceScore(personnel));
// console.log(filterForce(personnel));
// console.log(mapAverage(personnel));
