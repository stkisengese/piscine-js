// function hasCity(country, cities) {
//     return function(city) {
//       if (cities.includes(city)) {
//         return `${city} is a city from ${country}`;
//       } else {
//         return `${city} is not a city from ${country}`;
//       }
//     };
// }

// const hasCity = (country, cities) => {
//   return city => cities.includes(city) ? `${city} is a city from ${country}` : `${city} is not a city from ${country}`;
// }

const hasCity = (country, cities) =>
  city => 
    `${city} ${
      cities.includes(city) ? 'is' : 'is not'
    } a city from ${country}`;

// Example usage:
const citiesInKenya = hasCity('Kenya', ['Nairobi', 'Mombasa', 'Kisumu']);
console.log(citiesInKenya('Nairobi')); 
console.log(citiesInKenya('Dar es Salaam')); 
