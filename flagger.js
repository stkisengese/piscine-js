function flags(input) {
    const result = {
        alias: {},
        description: []
    };

    const keys = Object.keys(input);
    const longToShortMap = {};
    const usedAliases = new Set();

    // Check if the input is empty or contains only the help flag
    if (keys.length === 0 || (keys.length === 1 && keys[0] === 'help')) {
        return {
            alias: { h: 'help' },
            description: ''
        };
    }

    // Generate aliases and short descriptions
    keys.forEach(key => {
        if (key !== 'help') {
            const sanitizedKey = key.replace(/[^a-zA-Z]/g, '');
            const shortKey = sanitizedKey.charAt(0); // Get the first letter for alias
            
            // Ensure unique shortKey
            let uniqueShortKey = shortKey;
            let counter = 1;
            while (usedAliases.has(uniqueShortKey)) {
                uniqueShortKey = sanitizedKey.charAt(counter++) || shortKey;
            }
            usedAliases.add(uniqueShortKey);

            const formattedKey = `--${key}`;
            result.alias[uniqueShortKey] = key;
            longToShortMap[key] = uniqueShortKey;
            result.description.push(`-${uniqueShortKey}, ${formattedKey}: ${input[key]}`);
        }
    });

    // Always add the help flag alias
    result.alias['h'] = 'help';

    // Handle 'help' flag to return specific descriptions
    if (input.help) {
        result.description = input.help
            .filter(flag => input[flag])
            .map(flag => {
                const shortFlag = longToShortMap[flag] || flag.charAt(0);
                const formattedFlag = `--${flag}`;
                return `-${shortFlag}, ${formattedFlag}: ${input[flag]}`;
            });
    }

    return {
        alias: result.alias,
        description: result.description.join('\n') // Join descriptions with new lines
    };
}

// Example usage
const input1 = {
    invert: 'inverts an object',
    'convert-map': 'converts the object to an array',
    assign: 'uses the function assign - assign to target object'
};

const input2 = {
    invert: 'inverts an object',
    'convert-map': 'converts the object to an array',
    assign: 'uses the function assign - assign to target object',
    help: ['assign', 'invert']
};

const input3 = {
    invert: 'inverts an object',
    'convert-map': 'converts the object to an array',
    assign: 'uses the function assign - assign to target object',
    help: ['invert']
};

console.log(JSON.stringify(flags({}), null, 2)); // Should return { alias: { h: 'help' }, description: '' }
console.log(JSON.stringify(flags(input1), null, 2)); // Should include all flags
console.log(JSON.stringify(flags(input2), null, 2)); // Should include only 'assign' and 'invert'
console.log(JSON.stringify(flags(input3), null, 2)); // Should include only 'invert'
