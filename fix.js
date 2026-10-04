const fs = require('fs');

let content = fs.readFileSync('app/data/proverbs.ts', 'utf8');

// Match `amharic: "..."` or `amharic: \`...\`` or `english: "..."` without a trailing comma
content = content.replace(/(amharic:\s*(?:"[^"]*"|`[^`]*`|\[.*?\]\.join\([^)]*\)))\s*(?!,)(?=\n\s*[a-zA-Z]+:)/gs, '$1,');
content = content.replace(/(english:\s*(?:"[^"]*"|`[^`]*`|\[.*?\]\.join\([^)]*\)))\s*(?!,)(?=\n\s*[a-zA-Z]+:)/gs, '$1,');

fs.writeFileSync('app/data/proverbs.ts', content);
console.log("Fixed commas");
