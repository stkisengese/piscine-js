const filterShortStateName = (states) => {
    return states.filter(state => state.length < 7);
  };
  
const filterStartVowel = (states) => {
    return states.filter(state => /^[aeiou]/i.test(state));
  };
  
const filter5Vowels = (states) => {
    return states.filter(state => (state.match(/[aeiou]/gi) || []).length >= 5);
  };
  
const filter1DistinctVowel = (states) => {
    return states.filter(state => {
      const vowels = new Set(state.toLowerCase().match(/[aeiou]/g) || []);
      return vowels.size === 1;
    });
  };
  
const multiFilter = (stateObjects) => {
    return stateObjects.filter(obj => 
      obj.capital.length >= 8 &&
      !/^[aeiou]/i.test(obj.name) &&
      /[aeiou]/i.test(obj.tag) &&
      obj.region !== "South"
    );
  };