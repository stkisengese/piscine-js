#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

/**
 * Reverses the "very disco" transformation on a word.
 * @param {string} word - The word to transform back.
 * @returns {string} - The original word.
 */
function reverseDiscoify(word) {
    const midpoint = Math.floor(word.length / 2);
    return word.slice(midpoint) + word.slice(0, midpoint);
}

/**
 * Processes the input string to reverse the transformation on each word.
 * @param {string} input - The input string.
 * @returns {string} - The transformed string.
 */
function processInput(input) {
    return input.split(' ').map(reverseDiscoify).join(' ');
}

/**
 * Main function to handle the script execution.
 */
async function main() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.error('Error: Please provide the name of a file.');
        process.exit(1);
    }

    const filename = path.join(process.cwd(), args[0]);

    try {
        const data = await fs.readFile(filename, 'utf8');
        const result = processInput(data);
        console.log(result);
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
    }
}

main().catch(error => console.error(error));