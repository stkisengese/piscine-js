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
    arrObj.map(({ city, temperature }) => 
        ({ city, temperature: temperature.replace(/\s+/g, '') })
    );

const tempForecasts = (arrObj) =>
    arrObj.map(({ city, temperature, state }) => 
        `${fahrenheitToCelsius([temperature])[0]} in ${upperCasingStates([city])}, ${upperCasingStates([state])}`
    );



console.log(citiesOnly([
    {
      city: 'Los Angeles',
      temperature: '  101 °F   ',
    },
    {
      city: 'San Francisco',
      temperature: ' 84 ° F   ',
    },
  ])) // -> ['Los Angeles', 'San Francisco']

console.log(upperCasingStates(['alabama', 'new jersey'])) // -> ['Alabama', 'New Jersey']
console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F'])) // -> ['20°C', '15°C', '-4°C']
console.log(trimTemp([
    { city: 'Los Angeles', temperature: '  101 °F   ' },
    { city: 'San Francisco', temperature: ' 84 ° F   ' },
  ])) /* -> [
    { city: 'Los Angeles', temperature: '101°F' },
    { city: 'San Francisco', temperature: '84°F' },
  ] */
    console.log(tempForecasts([
        {
          city: 'Pasadena',
          temperature: ' 101 ° F',
          state: 'california',
          region: 'West',
        },
      ])); // -> ['38°C in Pasadena, California']