#!/usr/bin/env node

import { readdir } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

const readDirAsync = promisify(readdir)

async function countEntriesInDirectory(directoryPath) {
    try {
        const entries = await readDirAsync(directoryPath);
        return entries.length;
    } catch (error) {
        console.error(`Error reading directory: ${error.message}`);
        process.exit(1);
    }
}

async function main() {
    // Get the directory path from command line argument or use current directory
    const directoryPath = process.argv[2] || '.';
    
    // Resolve the path to handle both relative and absolute paths
    const resolvedPath = resolve(directoryPath);

    const count = await countEntriesInDirectory(resolvedPath);
    console.log(count);
}

main().catch(error => {
    console.error(`Unexpected error: ${error.message}`);
    process.exit(1);
});