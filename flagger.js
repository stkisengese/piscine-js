const flags = (input) => {
    const result = {
      alias: { h: 'help' },
      description: []
    };
  
    const generateAlias = (flag) => flag.charAt(0).toLowerCase();
  
    for (const [flag] of Object.entries(input)) {
      if (flag !== 'help') {
        const alias = generateAlias(flag);
        result.alias[alias] = flag;
      }
    }
  
    const generateDescription = (flag) => {
      const alias = generateAlias(flag);
      return `-${alias}, --${flag}: ${input[flag]}`;
    };
  
    if (Array.isArray(input.help)) {
      input.help.forEach(flag => {
        if (input[flag]) {
          result.description.push(generateDescription(flag));
        }
      });
    } else {
      for (const flag in input) {
        if (flag !== 'help') {
          result.description.push(generateDescription(flag));
        }
      }
    }
  
    if (result.description.length === 0) {
      delete result.description;
    } else {
      result.description = result.description.join('\n');
    }
  
    return result;
  };

  const input = {
    multiply: 'multiply the values',
    divide: 'divides the values',
    help: ['divide']
};

console.log(JSON.stringify(flags(input), null, 2));