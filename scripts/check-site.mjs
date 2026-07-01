import { access, readFile } from 'node:fs/promises';
const files = ['index.html','src/main.js','src/styles/main.css','src/data/recipes.js','src/data/lessons.js'];
for (const file of files) await access(file);
const html = await readFile('index.html','utf8');
if (!html.includes('src/main.js')) throw new Error('index.html must load src/main.js');
console.log('Static site files validated.');
