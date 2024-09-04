// function citiesOnly(arrObj) {
//     return arrObj.map(item => item.city);
// } 

const citiesOnly = (arrObj) => arrObj.map(({ city }) => city);
const upperCasingStates = (state) =>
    state.map(city => 
    city.split(' ').map(names => 
    names[0].toUpperCase() + names.slice(1)
).join(' ')
);

const fahrenheitToCelsius = (arrFahrenheit) => 
    arrFahrenheit.map( temp => 
            Math.floor((parseFloat(temp) - 32) * 5 / 9) + '°C'
    );

const trimTemp = (arrObj) => 
    arrObj.map( item  => 
        ({ ...item, temperature: item.temperature.replace(/\s+/g, '') })
    );

const tempForecasts = (arrObj) =>
    arrObj.map(({ city, temperature, state, region }) => 
        `${fahrenheitToCelsius([temperature])[0]} in ${upperCasingStates([city])}, ${upperCasingStates([state])} (${upperCasingStates([region])})}`
    );


console.log(trimTemp([
    {
      city: 'Los Angeles',
      state: 'california',
      region: 'West',
      temperature: '101°F',
    },
    {
      city: 'San Francisco',
      state: 'california',
      region: 'West',
      temperature: '84°F',
    },
    { city: 'Miami', state: 'Florida', region: 'South', temperature: '112°F' },
    {
      city: 'New York City',
      state: 'new york',
      region: 'North East',
      temperature: '0°F',
    },
    { city: 'Juneau', state: 'Alaska', region: 'West', temperature: '21°F' },
    {
      city: 'Boston',
      state: 'massachussetts',
      region: 'North East',
      temperature: '45°F',
    },
    {
      city: 'Jackson',
      state: 'mississippi',
      region: 'South',
      temperature: '70°F',
    },
    { city: 'Utqiagvik', state: 'Alaska', region: 'West', temperature: '-1°F' },
    {
      city: 'Albuquerque',
      state: 'new mexico',
      region: 'West',
      temperature: '95°F',
    },
  ])
);

// console.log(citiesOnly([
//     {
//       city: 'Los Angeles',
//       temperature: '  101 °F   ',
//     },
//     {
//       city: 'San Francisco',
//       temperature: ' 84 ° F   ',
//     },
//   ])) // -> ['Los Angeles', 'San Francisco']

// console.log(upperCasingStates(['alabama', 'new jersey'])) // -> ['Alabama', 'New Jersey']
// console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F'])) // -> ['20°C', '15°C', '-4°C']
// console.log(trimTemp([
//     { city: 'Los Angeles', temperature: '  101 °F   ' },
//     { city: 'San Francisco', temperature: ' 84 ° F   ' },
//   ])) /* -> [
//     { city: 'Los Angeles', temperature: '101°F' },
//     { city: 'San Francisco', temperature: '84°F' },
//   ] */
//     console.log(tempForecasts([
//         {
//           city: 'Pasadena',
//           temperature: ' 101 ° F',
//           state: 'california',
//           region: 'West',
//         },
//       ])); // -> ['38°C in Pasadena, California']