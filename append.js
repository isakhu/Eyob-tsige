const fs = require('fs');

let content = fs.readFileSync('app/data/proverbs.ts', 'utf8');

const newProverbs = [
  {
    amharic: [
      "\"እንኳንስ ሚልዮኖች ይቅርና አዳምና ሄዋንም በገነት ውስጥ አልተስማሙም ነበር።...ልባሞች ሁኑ፤ ከጥላቻ ነጻ ውጡ፤ ከተራ አመለካከትና ከጎጠኝነት ነጻ ውጡ፤ የሌላዉን ችግር ብቻ ሳይሆን መጀመርያ የራሳችሁን ችግር አራግፋችሁ ታጠቡ፤ የባሰውን እንዳይመጣ ጸልዩ፤ የተሻለውን ስጠን እንጂ እገሌ ይውደም እገሌ ይሁንልን አይባልም።\"",
      "",
      "መጋቤ ሐዲስ እሸቱ አለማየሁ"
    ].join("\\n"),
    english: "",
    categories: ["Wisdom", "Unity", "Peace", "Self-Reflection"],
    attribution: "Megabe Haddis Eshetu Alemayehu",
    meaning: "Even Adam and Eve couldn't agree in Paradise, let alone millions of people today. Be wise, free yourself from hatred and tribalism. Before pointing out others' faults, wash away your own. Pray for better times instead of wishing destruction upon others."
  }
];

let itemsStr = newProverbs.map(p => {
  let str = "  {\n";
  if (p.amharic) str += `    amharic: \`${p.amharic}\`,\n`;
  if (p.english) str += `    english: \`${p.english}\`,\n`;
  if (p.categories) str += `    categories: ${JSON.stringify(p.categories)},\n`;
  if (p.attribution) str += `    attribution: ${JSON.stringify(p.attribution)},\n`;
  if (p.meaning) str += `    meaning: ${JSON.stringify(p.meaning)}\n`;
  str += "  }";
  return str;
}).join(",\n");

// Replace the end of the array
content = content.replace(/  \}\r?\n\];?\r?\n?$/, "  },\n" + itemsStr + "\n];\n");
fs.writeFileSync('app/data/proverbs.ts', content);
console.log("Appended 1 new proverb.");
