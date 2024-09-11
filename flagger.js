function flags(input) {
    const result = {
        alias: {},
        description: []
    };

    const keys = Object.keys(input);
    keys.forEach(key => {
        if (key.length === 1) {
            result.alias[key] = key;
        }
    });
    result.alias['h'] = 'help';

    if (input.help) {
        // description for specified flags
        input.help.forEach(flag => {
            if (input[flag]) {
                const flagName = flag.length === 1 ? flag : `--${flag}`;
                result.description.push(`-${flagName.charAt(0)}, ${flagName}: ${input[flag]}`);
            }
        });
    } else {
        // descriptions for all flags
        keys.forEach(key => {
            if (key !== 'help') {
                const flagName = key.length === 1 ? key : `--${key}`;
                result.description.push(`-${flagName.charAt(0)}, ${flagName}: ${input[key]}`);
            }
        });
    }

    return {
        alias: result.alias,
        description: result.description.join('\n')
    };
}

  const input = {
    multiply: 'multiply the values',
    divide: 'divides the values',
    help: ['divide']
};

console.log(JSON.stringify(flags(input), null, 2));
console.log(JSON.stringify(flags({}), null, 2));