const fs = require('fs');

let content = fs.readFileSync('app/data/proverbs.ts', 'utf8');

// The lines causing errors are missing a trailing comma before `categories:`
// For example:
// attribution: "some text"
// categories: [...]
// Or:
// english: "some text"
// categories: [...]

// Let's replace any line ending with a quote that is immediately followed by a line starting with categories
content = content.replace(/(["'])\s*\n(\s*categories:)/gm, '$1,\n$2');

// And if there's an attribution missing a comma before meaning
content = content.replace(/(["'])\s*\n(\s*meaning:)/gm, '$1,\n$2');

fs.writeFileSync('app/data/proverbs.ts', content);
console.log("Fixed missing commas using regex.");
