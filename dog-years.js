const orbitalPeriods = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132  

  };

  function dogYears(planet, ageInSeconds) {
    const earthYears = ageInSeconds / 31557600;
    const planetYears = earthYears / orbitalPeriods[planet];
    const dogYears = planetYears * 7;
    return parseFloat(dogYears.toFixed(2));
  }

  //console.log(dogYears('earth', 1000000000)); 