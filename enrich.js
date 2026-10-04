const fs = require('fs');

const enrichments = [
  { starts: "ከትልቅ ዛፍ ጥላ", categories: ["Wisdom", "Life"], meaning: "True legacy is leaving behind something that benefits others, even if they don't know you." },
  { starts: "የምንሰጠው ምክር", categories: ["Love", "Responsibility", "Relationships"], meaning: "Giving good things like love and advice to others enriches us rather than diminishing what we have." },
  { starts: "«የ20 ማይል ጉዞ»", categories: ["Success", "Perseverance", "Work"], meaning: "Success comes from consistent, steady daily progress, not unpredictable bursts of effort." },
  { starts: "ሕይወት ልክ እንደ ወይን", categories: ["Life", "Patience", "Wisdom"], meaning: "Life's difficulties and the passage of time build our character and inner strength." },
  { starts: "ኖረው ከማይደርሱ", categories: ["Friendship", "Relationships", "Love"], meaning: "A true friend leaves a lasting emotional impact that outlives their physical presence." },
  { starts: "ከአንድ ውሸት በኋላ", categories: ["Honesty", "Wisdom"], meaning: "A single lie can permanently destroy your credibility and make people doubt your future truths." },
  { starts: "ሰው ሆዱን አስፍቶ", categories: ["Human Nature", "Wisdom"], meaning: "Greed and selfishness ultimately lead to a person's downfall, not their success." },
  { starts: "ከአንድ ከፍታ ወደ ሌላ", categories: ["Success", "Perseverance", "Courage"], meaning: "Setbacks are often necessary to gather the strength required to reach even greater heights." },
  { starts: "ሰዎች የተናገርከውን", categories: ["Relationships", "Human Nature"], meaning: "How you treat people and the emotions you evoke in them leave the most lasting impression." },
  { starts: "ያለቀለትን ነገር", categories: ["Work", "Courage", "Perseverance"], meaning: "True fulfillment comes from taking on difficult challenges and improving things that seem impossible." },
  { starts: "የንጉሡ እና የሸክላ", categories: ["Wisdom", "Human Nature", "Life"], meaning: "True glory is often found in humble, honest work rather than in titles or conquests." },
  { starts: "ዛሬህን በጥራት", categories: ["Life", "Advice"], meaning: "Focusing on doing your best right now ensures a happy past and a confident future." },
  { starts: "ሕይወት ማለት", categories: ["Life", "Wisdom"], meaning: "True meaning comes from the person you become through your experiences, not the things you acquire." },
  { starts: "ለካ የሰው ልጅ", categories: ["Honesty", "Responsibility", "Human Nature"], meaning: "Education and skills are useless without a strong foundation of ethics and moral principles." },
  { starts: "ዓለም መንገድ", categories: ["Courage", "Perseverance", "Success"], meaning: "When faced with closed doors, true innovators and heroes carve out their own unique paths." },
  { starts: "አበው ሲናገሩ", categories: ["Work", "Success"], meaning: "Hard work and active effort attract divine help and favorable opportunities." },
  { starts: "ማንም ሰው ራሱ", categories: ["Education", "Advice"], meaning: "Seeking guidance from knowledgeable mentors can provide profound personal healing and growth." },
  { starts: "የሰው ልጅ እውነተኛ", categories: ["Human Nature", "Love", "Community"], meaning: "The core of a good human life is treating others with the same love and respect we desire for ourselves." },
  { starts: "ተወደደም፣ተጠላም", categories: ["Wisdom", "Life"], meaning: "True fulfillment and happiness stem from an attitude of deep gratitude for what we are given." },
  { starts: "ሁሉም ሰው ህይወትን", categories: ["Human Nature", "Relationships"], meaning: "People often seek validation for their own views; sometimes it's best to let time reveal the truth." },
  { starts: "ማንኛውም ሰው ያለፈው", categories: ["Life", "Courage", "Advice"], meaning: "No matter your history, you always have the power to begin again and change your future." },
  { starts: "መኖር እና መሞት", categories: ["Life", "Responsibility", "Community"], meaning: "Our true existence is measured by the positive impact and legacy we leave behind in society." },
  { starts: "ይህ ሞት ከመኖር", categories: ["Wisdom", "Respect"], meaning: "A life lived with great humility, wisdom, and love stands as a monument that death cannot erase." },
  { starts: "መልካም መስራትን", categories: ["Life", "Wisdom"], meaning: "The greatest well-being and inner peace come from generosity, doing good, and learning to let go." },
  { starts: "አርቆ እንደማየት", categories: ["Wisdom", "Patience"], meaning: "Careful planning, foresight, and patience are the best tools for making good decisions." },
  { starts: "«ነበርኩ» ህመም", categories: ["Life", "Human Nature"], meaning: "Our past can be a source of regret for lost virtues, or a source of relief for overcoming bad habits." },
  { starts: "\"Some of you", categories: ["Honesty", "Responsibility"], meaning: "True faith is about internal transformation and honesty, not just outward religious appearances." },
  { starts: "ብሩህ ዘመን", categories: ["Life", "Wisdom"], meaning: "A hopeful wish that divine guidance will fight our battles and lead us into a brighter future." },
  { starts: "ቀጣዩ የህይወት ምዕራፍ", categories: ["Education", "Leadership"], meaning: "The ultimate purpose of acquiring knowledge is to share it and empower others to succeed." },
  { starts: "እውነተኛ የሕይወት ጥበብ", categories: ["Wisdom", "Life"], meaning: "True wisdom is found in understanding things deeply and applying a few core truths in practice." },
  { starts: "ስለ ሰብዓዊነት", categories: ["Community", "Human Nature", "Respect"], meaning: "We must respect the dignity of every human life, put an end to senseless violence, and inherit a legacy of pure humanity." },
  { starts: "ስኬት እና ቁርጠኝነት", categories: ["Success", "Perseverance"], meaning: "Motivation may start a journey, but only strong commitment and a willingness to sacrifice will bring true success." },
  { starts: "እውነተኛው ወዳጅ", categories: ["Love", "Friendship"], meaning: "The purest form of love and friendship is selfless sacrifice, exemplified by unconditional divine love." },
  { starts: "መኖር ደስ ይላል", categories: ["Life", "Community"], meaning: "Life is most joyful when we serve others, lift up the fallen, and become a reason for their happiness." },
  { starts: "ሀዋሳን ስወዳት", categories: ["Community", "Responsibility"], meaning: "Loving our city means actively participating in its development and ensuring it remains a place of peace and progress." },
  { starts: "ስምህ እንደሚፈስ", categories: ["Wisdom", "Love"], meaning: "Faith should be rooted in deep love, humility, and brotherhood, rather than serving as a reason for conflict and boasting." },
  { starts: "የገንዘብ ስነ-ልቦና", categories: ["Education", "Responsibility"], meaning: "Achieving financial freedom requires not just the ability to make money, but the discipline to manage and multiply it wisely." },
  { starts: "Functional Illiteracy", categories: ["Education", "Human Nature"], meaning: "Possessing basic skills without the ability to practically apply them is a silent killer of progress and innovation." },
  { starts: "የአስተሳሰብ አብዮት", categories: ["Education", "Success", "Leadership"], meaning: "To solve deeply rooted problems, we must undergo a mindset revolution, shifting from learned helplessness to active self-empowerment." },
  { starts: "የገና በዓል መልእክት", categories: ["Humility", "Love", "Community"], meaning: "True greatness often starts from the humblest beginnings, and we should honor this by showing compassion and kindness to the marginalized." },
  { starts: "የመንጋት ፀጋ", categories: ["Life", "Wisdom"], meaning: "Every new dawn is a beautiful opportunity for a fresh start and a transition from darkness into light." },
  { starts: "ወጥነት ዓላማችንን", categories: ["Perseverance", "Success", "Responsibility"], meaning: "Consistency and discipline are the essential forces required to see our goals through to the very end." },
  { starts: "ከጅማሬያችሁ በላይ", categories: ["Relationships", "Friendship", "Love"], meaning: "A truly valuable partner or friend is one who heals your wounds, understands your struggles, and helps you finish strong." },
  { starts: "ሁሉም ሰው ያስባል", categories: ["Wisdom", "Education"], meaning: "Intentional, focused thinking is a rare and highly valuable skill." },
  { starts: "የአብዛኞቻችን ችግር", categories: ["Human Nature", "Wisdom"], meaning: "Many people prefer the comfortable harm of flattery over the constructive benefit of honest criticism." },
  { starts: "አንዳንድ ሰዎች በፈጣሪ", categories: ["Human Nature", "Wisdom"], meaning: "Some people are driven more by their fears of evil than by their trust in what is good." },
  { starts: "“መስቀለኛ መንገድ", categories: ["Courage", "Life"], meaning: "Choosing to follow a unique, less popular path often leads to the most significant life adventures." },
  { starts: "አንዳንድ ጊዜ በረከት", categories: ["Perseverance", "Success", "Wisdom"], meaning: "Hardships often carry hidden blessings, and those who persistently seek solutions will eventually find them." },
  { starts: "\"እውነት የራስዋም", categories: ["Honesty", "Life"], meaning: "The best way to expose a flaw is not to argue against it, but to build something new and undeniably better next to it." },
  { starts: "የሆነ ጊዜ ላይ ህይወት", categories: ["Relationships", "Human Nature", "Success"], meaning: "The greatest revenge against those who failed you is to become a better, more helpful person yourself." },
  { starts: "ነጋችንን የሚገል ጉዳይ", categories: ["Courage", "Life"], meaning: "We must aggressively eliminate anything in our present that threatens our future success and well-being." },
  { starts: "አንዳንድ ሰዎች እንደማስነጠስ", categories: ["Relationships", "Human Nature"], meaning: "It is healthy and relieving to let go of toxic people from your life." },
  { starts: "የመድመቃችንን መጠን", categories: ["Relationships", "Respect", "Community"], meaning: "We should shine based on our own merits, not by dimming the light or success of those around us." },
  { starts: "የጅማሬህን መሰረት", categories: ["Success", "Perseverance", "Wisdom"], meaning: "Starting is not enough; you must build a strong mindset and resilient character to actually finish what you start." },
  { starts: "ሕይወት ፈቃድ ጠያቂዎችን", categories: ["Courage", "Work", "Success"], meaning: "Bold action, rather than waiting for someone else's approval, is what leads to real success in life." },
  { starts: "ሰው ሆነን ስንኖር", categories: ["Responsibility", "Respect", "Community"], meaning: "We must strive to live by strong principles so that we leave a positive, lasting legacy that commands respect." },
  { starts: "ስለችግር ስታስብ", categories: ["Wisdom", "Success"], meaning: "Focusing on solutions brings gratitude and blessings, while dwelling on problems only attracts failure." },
  { starts: "ሀሳብ ከሌላቸው", categories: ["Advice", "Relationships"], meaning: "Protect yourself by keeping a distance from arrogant, uninspired, and hopeless individuals." },
  { starts: "ለማኅበረሰቡ አገልግሎትን", categories: ["Community", "Responsibility", "Respect"], meaning: "A truly valuable person serves society with love, compassion, sincerity, and equality towards all." },
  { starts: "የማምነውን የቀራንዮ", categories: ["Courage", "Life"], meaning: "A deep, true faith is so strongly rooted in the heart that nothing can erase or diminish it." },
  { starts: "በፕላስተር ከተለጠፉት", categories: ["Honesty", "Love", "Responsibility"], meaning: "Giving the best of what you have, even in small ways, attracts profound blessings and teaches lifelong lessons." },
  { starts: "የታዋቂ ሰዎች ቤተ እምነት", categories: ["Wisdom", "Respect", "Community"], meaning: "True faith is demonstrated through humility and love, not through pride, rivalry, or the actions of the famous." },
];

let content = fs.readFileSync('app/data/proverbs.ts', 'utf8');
let outContent = "";

const proverbsStartIdx = content.indexOf('export const proverbs: Proverb[] = [');
outContent += content.substring(0, proverbsStartIdx);

let arrayContent = content.substring(proverbsStartIdx);
let depth = 0;
let objStartIdx = -1;
let lastIdx = 0;

for (let i = 0; i < arrayContent.length; i++) {
  if (arrayContent[i] === '{') {
    if (depth === 1) {
      objStartIdx = i;
    }
    depth++;
  } else if (arrayContent[i] === '}') {
    depth--;
    if (depth === 1 && objStartIdx !== -1) {
      const objStr = arrayContent.substring(objStartIdx, i + 1);
      
      let matched = null;
      for (const e of enrichments) {
        if (objStr.includes(e.starts)) {
          matched = e;
          break;
        }
      }
      
      if (matched) {
        const insertStr = `,\n    categories: ${JSON.stringify(matched.categories)},\n    meaning: ${JSON.stringify(matched.meaning)}`;
        const newObjStr = objStr.slice(0, -1) + insertStr + '\n  }';
        
        outContent += arrayContent.substring(lastIdx, objStartIdx) + newObjStr;
      } else {
        outContent += arrayContent.substring(lastIdx, i + 1);
        console.warn("Could not find match for an object!");
      }
      
      lastIdx = i + 1;
      objStartIdx = -1;
    }
  } else if (arrayContent[i] === '[') {
    depth++;
  } else if (arrayContent[i] === ']') {
    depth--;
  }
}

outContent += arrayContent.substring(lastIdx);

outContent = outContent.replace(
  'export type Proverb = {',
  'export type Proverb = {\n  categories?: string[];\n  meaning?: string;'
);

fs.writeFileSync('app/data/proverbs.ts', outContent);
console.log("Done");
