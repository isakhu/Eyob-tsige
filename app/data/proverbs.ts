/**
 * Proverbs & Wisdom — content for the swipeable proverb carousel.
 *
 * Edit this array to add, remove, or reorder cards.
 *
 * Fields:
 *  - amharic         (required) The proverb text in Amharic.
 *  - meaningAmharic  (optional) Short meaning/explanation in Amharic.
 *  - english / meaningEnglish  (optional) English versions, shown when the
 *                    header language toggle is set to EN. If missing, the
 *                    card falls back to Amharic.
 *  - attribution     (optional) Who the words are credited to.
 *                    Defaults to "Eyob Tsige Terefe" when omitted, so only omit
 *                    it for proverbs that are genuinely Eyob's own words.
 *  - placeholder     (optional) Shows a "Placeholder" badge on the card.
 */

export type Proverb = {
  categories?: string[];
  meaning?: string;
  amharic: string;
  english?: string;
  attribution?: string;
  placeholder?: boolean;
};

export const DEFAULT_ATTRIBUTION = "Eyob Tsige Terefe";

export const proverbs: Proverb[] = [
  {
    amharic:
      "ከትልቅ ዛፍ ጥላ ስር የሚያርፉት አብዛኞቹ ሰዎች ዛፉን የተከለውን ሰው አያውቁትም፤ ነገር ግን ዛፉ አሁንም ጥላ መስጠቱን ይቀጥላል።",
    english:
      "Most people who rest in the shade of a great tree do not know the one who planted it; yet the tree keeps on giving shade.",
  ,
    categories: ["Wisdom","Life"],
    meaning: "True legacy is leaving behind something that benefits others, even if they don't know you."
  },
  {
    amharic:
      "የምንሰጠው ምክር፣ የምንሰጠው ፍቅር፣ የምንሰጠው ጊዜ፣ የምንሰጠው ሀሳብ፣ የምንሰጠው አንዳች ነገር አያሳጣን።",
    english:
      "The advice we give, the love we give, the time we give, the ideas we give — nothing we give will ever leave us poorer.",
  ,
    categories: ["Love","Responsibility","Relationships"],
    meaning: "Giving good things like love and advice to others enriches us rather than diminishing what we have."
  },
  {
    amharic: [
      "«የ20 ማይል ጉዞ» (The 20-Mile March)",
      "",
      "«የ20 ማይል ጉዞ» መርህ በውጫዊ ሁኔታዎች መውጣት ወይም መውረድ ሳንበገር፣ በማንኛውም ሁኔታ ውስጥ በየቀኑ የማይወላወልና የተወሰነ ወጥ እንቅስቃሴ የማድረግ ጽናትን ያመለክታል። ይህ ጽንሰ-ሀሳብ በስኬትና በውድቀት መካከል ያለውን ልዩነት የሚያሳየው በችሎታ ብዛት ሳይሆን፣ በቋሚነት (consistency) እና በራስ ቁጥጥር ነው። በጥሩ ቀናት ከልክ በላይ ባለመወጠርና በከፋ ቀናት ደግሞ ጨርሶ ባለመቆም የሚገለጽ ጥበብ ነው።",
      "አብዛኛው ሰው ስሜት ሲኖረው ወይም ሁኔታዎች ሲመቹ ብቻ በከፍተኛ ሁኔታ ይሮጣል፤ አየር ጠባይ ሲከፋ ወይም ድካም ሲሰማው ደግሞ ሙሉ በሙሉ ይቆማል። «የ20 ማይል ጉዞ» ግን ስሜትና ውጫዊ ማበልጸጊያዎችን ሳይጠብቁ፣ በየቀኑ የተጣለውን ግብ በጽናት ማጠናቀቅን ይጠይቃል።",
      "በመጨረሻም ታላቅ ስኬት የሚገነባው በአንድ ጀምበር በሚደረግ ግዙፍ አውሎ ነፋሳዊ እንቅስቃሴ ሳይሆን፣ በየቀኑ በምናደርጋቸው ጥናታዊና ወጥ እርምጃዎች ድምር ውጤት ነው።",
      "እ.ኤ.አ. በ1900ዎቹ መጀመሪያ ላይ በኖርዌያዊው መርከበኛ ሮአልድ አሙንድሰን የተነደፈ ጽኑ መርህ ነው።"
    ].join("\n"),
    english: [
      "The 20-Mile March",
      "",
      "The 20-Mile March principle is the discipline of making steady, unwavering, fixed progress every single day, in any situation, without being swayed by the ups and downs of outside conditions. It shows that the difference between success and failure lies not in an abundance of talent, but in consistency and self-control. It is the wisdom of not overreaching on good days and never stopping on bad days.",
      "Most people run hard only when they feel inspired or when conditions are favourable, and stop completely when the weather turns bad or they feel tired. The 20-Mile March, however, demands that we complete our daily goal with perseverance, without waiting for motivation or outside boosts.",
      "In the end, great success is built not by one massive, storm-like burst of effort overnight, but by the combined result of the deliberate, consistent steps we take every day.",
      "A steadfast principle designed by the Norwegian sailor Roald Amundsen in the early 1900s."
    ].join("\n"),
  ,
    categories: ["Success","Perseverance","Work"],
    meaning: "Success comes from consistent, steady daily progress, not unpredictable bursts of effort."
  },
  {
    amharic:
      "ሕይወት ልክ እንደ ወይን ናት፤ በቆየችና በተፈተነች ቁጥር እየነጠረች ትሄዳለች።\n\nወይን በጨለማና በታሸገ በርሜል ውስጥ ለረጅም ጊዜ እንደሚያሳልፍ ሁሉ፣ ህይወትም በተለያዩ ፈተናዎችና የትግል ወቅት ውስጥ አልፋ ነው እውነተኛ ጣዕሟንና ክብሯን የምታገኘው። ይህ የበሰለና የነጠረ ማንነትን ይዞ ለመውጣት የሚደረግ ድንቅ ጉዞ ነው።",
    english:
      "Life is just like wine; the longer it ages and the more it is tested, the more refined it becomes.\n\nJust as wine spends a long time in a dark, sealed barrel, life too finds its true flavour and dignity only after passing through trials and seasons of struggle. It is a remarkable journey toward emerging with a mature and refined character.",
  ,
    categories: ["Life","Patience","Wisdom"],
    meaning: "Life's difficulties and the passage of time build our character and inner strength."
  },
  {
    amharic:
      "ኖረው ከማይደርሱ፣ በቁም ከተረሱ ይልቅ ሞተው የሚናፈቁ ወዳጆች ያፅናናሉ። የአንዳንዶች ፍቅር ትንሳኤ ያለው ፍቅር ነው። ከሟቹ ጋር አብሮ የማይቀበር ፍቅር።",
    english:
      "Friends who are missed after they are gone comfort us more than those who are alive yet never reach us, forgotten while still living. Some people's love is a love with a resurrection — a love that is not buried with the departed.",
  ,
    categories: ["Friendship","Relationships","Love"],
    meaning: "A true friend leaves a lasting emotional impact that outlives their physical presence."
  },
  {
    amharic:
      "ከአንድ ውሸት በኋላ የሚመጡ እውነቶች ሁሉ ያጠራጥሩኛል። ስህተትን ለማረም፣ ሰዎችን ለማሳመን፣ ተቀባይነትን ለማግኘት ብለህ መታመንህን አትጣ።",
    english:
      "After one lie, all subsequent truths become questionable to me. Do not lose your trustworthiness just to correct a mistake, convince people, or gain acceptance.",
  ,
    categories: ["Honesty","Wisdom"],
    meaning: "A single lie can permanently destroy your credibility and make people doubt your future truths."
  },
  {
    amharic: "ሰው ሆዱን አስፍቶ ሲወድቅ እንጂ ሲቆም አላየንም።",
    english: "We have only seen a person fall when expanding their stomach (in greed), never stand tall.",
    attribution: "የገበታ ገፅ",
  ,
    categories: ["Human Nature","Wisdom"],
    meaning: "Greed and selfishness ultimately lead to a person's downfall, not their success."
  },
  {
    amharic: "ከአንድ ከፍታ ወደ ሌላ የላቀ ደረጃ ለመድረስ አንዳንዴ ታች ወርዶ ድጋሚ መውጣትን ሊጠይቅ ይችላል። ወደ ታች የምንወርደው ስለተሸነፍን ሳይሆን፣ ወደ ላይ በበለጠ ኃይል ለመንደርደር ትልቅ ጉልበት ለማግኘት ነው!\n\nኃይላችንን ሰብስበን ወደ አዲሱ ከፍታችን እንወጣለን። እንበርታ! 💪✨",
    english: "To reach a higher level from one peak, it sometimes requires going down and climbing again. We go down not because we are defeated, but to gather great strength to propel ourselves upwards with more power!\n\nWe will gather our strength and rise to our new heights. Let us be strong! 💪✨",
  ,
    categories: ["Success","Perseverance","Courage"],
    meaning: "Setbacks are often necessary to gather the strength required to reach even greater heights."
  },
  {
    amharic: "ሰዎች የተናገርከውን ሊረሱ ይችላሉ፤ ያደረግከውንም ሊረሱ ይችላሉ። ነገር ግን እንዲሰማቸው ያደረግከውን ስሜት መቼም አይረሱትም።",
    english: "People will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    attribution: "ማያ አንጀሉ (Maya Angelou)",
  ,
    categories: ["Relationships","Human Nature"],
    meaning: "How you treat people and the emotions you evoke in them leave the most lasting impression."
  },
  {
    amharic: [
      "ያለቀለትን ነገር ማድመቅ ቀላል ነው… አስቸጋሪውን ለውጦ ማሳየት ግን የሙያ ፍቅር፣ ጽናት እና ከፍተኛ ብቃት ይጠይቃል።",
      "",
      "አብዛኛው ሰው ያለቀለት፣ የተመረጠ፣ የተስተካከለ ነገርን መርጦ ቀላልና ጥርት ያለ ነገር ማድረግ ይመርጣል፡፡ የህይወት እርካታ ያለው ግን «አትችልም» የተባለውን አቅም እንዳለው ማሳየት፣ ወደኋላ የቀረውን ወደፊት ማምጣት፣ እድል የተነፈገውን ለዚህች ዓለም የሚጠቅም መሆኑን ማስመስከር፣ እና አስቸጋሪውን መንገድ መርጦ ስኬት ላይ በማድረስ ውስጥ ባለ ድካም ነው፡፡",
      "",
      "የተለመደውንና ቀላል የሆነውን ብቻ አንፈልግ፤ ይልቁንም ያለመቻልን ጨለማ በትጋት ብርሃን እንፈንጥቅበት! ደካማውን ጠንካራ ለማድረግ፣"
    ].join("\n"),
    english: [
      "It is easy to highlight something that is already finished... but transforming something difficult requires professional love, perseverance, and high competence.",
      "",
      "Most people prefer to choose something finished, selected, and organized, and do something simple and clear. But true life satisfaction lies in the effort of showing that what was said to be 'impossible' has potential, bringing forward what was left behind, proving that the deprived are useful to this world, and choosing the difficult path to achieve success.",
      "",
      "Let us not seek only what is common and easy; instead, let us shine the light of diligence upon the darkness of inability! To make the weak strong,"
    ].join("\n"),
  ,
    categories: ["Work","Courage","Perseverance"],
    meaning: "True fulfillment comes from taking on difficult challenges and improving things that seem impossible."
  },
  {
    amharic: [
      "የንጉሡ እና የሸክላ ሠሪው ታሪክ",
      "",
      "በአንድ ወቅት አንድ በጣም ስመ ጥር እና ኃያል ንጉሥ ነበር። ይህ ንጉሥ ግዛቱን ያስፋፋ፣ በጦርነት ያልተሸነፈና በሁሉም ዘንድ የሚፈራ ነበረ። ሆኖም ግን፣ በውስጡ ሁልጊዜ እረፍት ያጣ እና \"እውነተኛ ክብር ምንድን ነው?\" የሚል ጥያቄ የሚመላለስበት ሰው ነበር።",
      "",
      "አንድ ቀን ንጉሡ በታላቅ ግርማ ሞገስ የታጀበ ሰራዊቱን ይዞ በመንገድ ላይ ሲያልፍ፣ አንድ ሽማግሌ ሸክላ ሠሪ በመንገዱ ዳር ቁጭ ብሎ በጭቃ ተለውሶ ሲሠራ አየ። ንጉሡም ፈረሱን አስቆመና ሽማግሌውን እንዲህ ሲል ጠየቀው፦",
      "",
      "\"እኔ የዚህ ምድር ጌታ፣ በሺዎች የሚቆጠሩ ሰራዊት ያለኝ ንጉሥ ነኝ። አንተ ግን እዚህ አቧራ ውስጥ ተደፍተህ ትሠራለህ። ለ\""
    ].join("\n"),
    english: [
      "The Story of the King and the Potter",
      "",
      "Once upon a time, there was a very famous and powerful king. This king had expanded his empire, was undefeated in battle, and was feared by everyone. However, inside he was always restless, a person who constantly asked the question, 'What is true glory?'",
      "",
      "One day, as the king was passing on the road accompanied by his army in great majesty, he saw an old potter sitting by the side of the road, covered in mud, working. The king stopped his horse and asked the old man:",
      "",
      "'I am the lord of this land, a king with an army of thousands. But you work here bent over in the dust. Why...'"
    ].join("\n"),
  ,
    categories: ["Wisdom","Human Nature","Life"],
    meaning: "True glory is often found in humble, honest work rather than in titles or conquests."
  },
  {
    amharic: "ዛሬህን በጥራት ከኖርክ፣ ትላንትህ ትርጉም ያለው ትዝታ ይሆናል፤ ነገህ ደግሞ በራስ መተማመን የምትቀበለው ስጦታ ይሆናል። ትኩረትህን አሁን በምትሠራው ሥራና አብረውህ ባሉ ሰዎች ላይ አድርግ።",
    english: "If you live today with quality, your yesterday will be a meaningful memory; and your tomorrow will be a gift you receive with confidence. Focus on the work you are doing now and the people who are with you."
  ,
    categories: ["Life","Advice"],
    meaning: "Focusing on doing your best right now ensures a happy past and a confident future."
  },
  {
    amharic: "ሕይወት ማለት የምትፈልገውን ሁሉ ማግኘት ሳይሆን፣ ባገኘኸው ነገር ውስጥ ትርጉም ያለው ማንነት መገንባት ነው።",
    english: "Life is not about getting everything you want, but building a meaningful identity within what you have."
  ,
    categories: ["Life","Wisdom"],
    meaning: "True meaning comes from the person you become through your experiences, not the things you acquire."
  },
  {
    amharic: "ለካ የሰው ልጅ ሞራል ከሌለው መማር አይለውጠውም፣ እምነት አይገራውም፣ መርህ አይመራውም፣ ፍቅር አይገዛውም። ለማንኛውም የምንራብለት፣ የምንሰደድለት፣ የምንቆምለት፣ የምንኖርለት፣ የምንሞትለት ከስማችን እኩል የምንጠራበት፣ የማንደራደርበት የሞራልና የስነምግባር አቋም እንያዝ።",
    english: "It turns out that if a human being has no morals, learning will not change them, faith will not tame them, principles will not guide them, and love will not rule them. Let us hold a moral and ethical stance that we starve for, are exiled for, stand for, live for, and die for—a stance by which we are called as equally as our name, and on which we do not compromise."
  ,
    categories: ["Honesty","Responsibility","Human Nature"],
    meaning: "Education and skills are useless without a strong foundation of ethics and moral principles."
  },
  {
    amharic: "ዓለም መንገድ ባይኖራትም፣ ሰዎች ዕድል ባይሰጡህም፣ አንተ የራስህን አዲስ መንገድ በመፈለግ አዲሱን የተለወጠ አንተነትህን ከህልመኞች፣ ከባለራዕዮች እና ከስኬታማ ሰዎች ተርታ አግኘው። እመኑኝ፤ ሁሉም መንገድ ሲዘጋ እውነተኛ ጀግና አዲስ መንገድ ይፈጥራል።",
    english: "Even if the world has no path, and even if people do not give you a chance, you must find your own new path and discover your new, transformed self among dreamers, visionaries, and successful people. Believe me; when all paths are closed, a true hero creates a new path."
  ,
    categories: ["Courage","Perseverance","Success"],
    meaning: "When faced with closed doors, true innovators and heroes carve out their own unique paths."
  },
  {
    amharic: "አበው ሲናገሩ \"ፈጣሪ ለሚሮጥ ሰው ፈረስ ይሰጠዋል፤ ለሚተኛ ጋቢ ይደርብለታል\" ይላሉ። ታገሉና አሸንፉ።",
    english: "As the elders say, 'The Creator gives a horse to the one who runs, and covers with a blanket the one who sleeps.' Struggle and win."
  ,
    categories: ["Work","Success"],
    meaning: "Hard work and active effort attract divine help and favorable opportunities."
  },
  {
    amharic: "ማንም ሰው ራሱ ላይ መስራት ከፈለገ የዚህን ሰው ስልጠናዎችና የመጽሀፍ ዳሰሳዎች ይከታተል። ሰው በቦታው ሲገኝ እንዲህ ነፍስን የሚያክም፣ ውስጥን የሚፈውስ የዕውቀትና የጥበብ ምንጭ ይሆናል።",
    english: "If anyone wants to work on themselves, they should follow this person's trainings and book reviews. When a person is in their rightful place, they become a source of knowledge and wisdom that heals the soul and cures from within."
  ,
    categories: ["Education","Advice"],
    meaning: "Seeking guidance from knowledgeable mentors can provide profound personal healing and growth."
  },
  {
    amharic: "የሰው ልጅ እውነተኛ መልኩ ባልንጀራውን እንደራስ በመውደድ እና በሱ ላይ ሊሆን የማይፈልገውን በሌሎች ላይ ባለማድረግ ላይ የተመሰረተ ነው። ይህ ወርቃማው የህይወት ህግ ነው።",
    english: "The true nature of a human being is based on loving their neighbor as themselves and not doing to others what they would not want done to themselves. This is the golden rule of life."
  ,
    categories: ["Human Nature","Love","Community"],
    meaning: "The core of a good human life is treating others with the same love and respect we desire for ourselves."
  },
  {
    amharic: "ተወደደም፣ተጠላም የህይወት እርካታ የሚገኘው አምላክ ላይ ባለን የምስጋና መጠን ነው። ዘመኑ የእግዚአብሔር እንጂ የክፉዎች ስላይደለ፤ በበጎ ስራ እንዋጀው ዘንድ አዲስ ዓመት ተሰጠኝ። ተመስገን።",
    english: "Like it or not, true life satisfaction is found in the measure of our gratitude towards God. Because the times belong to God and not to the wicked, a new year was given to us to redeem with good deeds. Thank God."
  ,
    categories: ["Wisdom","Life"],
    meaning: "True fulfillment and happiness stem from an attitude of deep gratitude for what we are given."
  },
  {
    amharic: "ሁሉም ሰው ህይወትን የሚያየው ከራሱ አንግል ነው። መስማት የሚፈልገው የመሻቱን ማረጋገጫ ነው። አንተ ግን እውነትህን ለማሳመን አትታገል፤ ለጊዜ ተውለት።",
    english: "Everyone sees life from their own angle. What they want to hear is the validation of their own desires. But you, do not struggle to convince them of your truth; leave it to time."
  ,
    categories: ["Human Nature","Relationships"],
    meaning: "People often seek validation for their own views; sometimes it's best to let time reveal the truth."
  },
  {
    amharic: "ማንኛውም ሰው ያለፈው ሕይወቱ ምንም ይሁን ምን ሁሉንም ነገር እንደ አዲስ ለመጀመር ጊዜው አይረፍድም።",
    english: "For anyone, no matter what their past was like, it is never too late to start everything anew."
  ,
    categories: ["Life","Courage","Advice"],
    meaning: "No matter your history, you always have the power to begin again and change your future."
  },
  {
    amharic: "መኖር እና መሞት የሰው ልጅ አይቀሬ እጣፈንታ ቢሆንም አላማ ያላቸው ሰዎች መኖራቸውን የሚያረጋግጡት በእስትንፋሳቸው ሳይሆን ለማህበረሰቡ በሚያበረክቱት የመልካም ስራ ውጤት ነው።",
    english: "Although living and dying are the inevitable fate of human beings, people with purpose prove their existence not by their breath, but by the results of the good work they contribute to society.",
    attribution: "ከቡስካ በስተጀርባ (ፍቅረማርቆስ ደስታ)"
  ,
    categories: ["Life","Responsibility","Community"],
    meaning: "Our true existence is measured by the positive impact and legacy we leave behind in society."
  },
  {
    amharic: "ይህ ሞት ከመኖር ባሻገር ገዝፎ የቆመ የመልካም ስብዕና ሀውልት፣ በትህትና የተኖረ መንፈሳዊነት፣ የእምነት ድንበርን የተሻገረ አባትነት፣ የጥበብ፣የስክነትና የሽምግልና ምልክት እንጂ በመቃብር ተዘግቶ የሚያከትም መለየት አይደለም።",
    english: "This death is a monument of good character standing tall beyond life, a spirituality lived in humility, a fatherhood that crossed the boundaries of faith, a symbol of wisdom, sobriety, and eldership, rather than a separation that ends sealed in a tomb."
  ,
    categories: ["Wisdom","Respect"],
    meaning: "A life lived with great humility, wisdom, and love stands as a monument that death cannot erase."
  },
  {
    amharic: "መልካም መስራትን የሚያህል ጤንነት፣ መስጠትን ያህል እርካታ፣ መተውን የመሰለ እረፍት የለም።",
    english: "There is no health like doing good, no satisfaction like giving, and no rest like letting go."
  ,
    categories: ["Life","Wisdom"],
    meaning: "The greatest well-being and inner peace come from generosity, doing good, and learning to let go."
  },
  {
    amharic: "አርቆ እንደማየት፣ አይቶ እንደመራመድ፣ ለክቶ እንደመቁረጥ፣ መርጦ እንደመናገር፣ ታግሶ እንደመኖር መልካም ነገር የለም!",
    english: "There is nothing as good as seeing far, walking with vision, cutting after measuring, speaking after choosing one's words, and living with patience!"
  ,
    categories: ["Wisdom","Patience"],
    meaning: "Careful planning, foresight, and patience are the best tools for making good decisions."
  },
  {
    amharic: [
      "«ነበርኩ» ህመም አለው። «ነበርኩ» ግልግልም ነው።",
      "የዛሬን አያድርገውና አንባቢ ነበርኩ፣ የፀሎት ሰው ነበርኩ፣ ውጤታማ ነበርኩ... ማለት ዛሬ ነገር ዓለሙን ትቼ የመንፈስ እርካታ ያጣሁ ባዛኝ ነኝ የሚል ቁጭት ያለው ይመስለኛል።",
      "ሱሰኛ ነበርኩ፣ ሙሰኛ ነበርኩ፣ ጨለማ ውስጥ ነበርኩ... ማለት ውስጥ ከዚህ የተለየሁ ነፃነትና የመንፈስ እርካታ ያለው የድል አድራጊነት ስሜት እያጣጣምኩ ነው እንደማለት ነው።",
      "የ«ነበርኩ» ብርሃን በርቶ የጠራው ማንነታችሁ ይገለጥላችሁ።"
    ].join("\n\n"),
    english: [
      "'I used to be' holds pain. 'I used to be' also holds relief.",
      "Saying 'Unlike today, I used to be a reader, I used to be a person of prayer, I used to be effective...' carries the regret of one who has abandoned their path and lost their spiritual satisfaction.",
      "Saying 'I used to be an addict, I used to be corrupt, I used to be in darkness...' means one is now enjoying the freedom, spiritual satisfaction, and victorious feeling of being separated from that past.",
      "May the light of your 'I used to be' shine, and may your clear, true identity be revealed to you."
    ].join("\n\n")
  ,
    categories: ["Life","Human Nature"],
    meaning: "Our past can be a source of regret for lost virtues, or a source of relief for overcoming bad habits."
  },
  {
    amharic: "\"Some of you are Near to Church, but Far from God\". አንዳንዶቻችሁ ለቤተ ክርስትያኑ ቅርብ ለእግዚአብሔር ግን ሩቅ ናችሁ። የፈረሰው ቃልኪዳናችን፣ የተዛባው ማንነታችን፣ የተዛነፈው ስብዕናችን፣ ከቃላችን የተላለፈ ተግባራችን፣ ከባህላችን ያፈነገጠው ራስወዳድነታችን እንዳንግባባና እንዳንተማመን አድርጎናል ብዬ አስባለሁ። ወርቅ ቅብ ከመምሰል፤ ወርቅ ለመሆን መቅረብን እንጀምር።",
    english: "\"Some of you are Near to Church, but Far from God\". I believe our broken covenants, our distorted identities, our skewed personalities, our actions that contradict our words, and our selfishness that deviates from our culture have made us unable to communicate and trust one another. Rather than appearing gold-plated, let us start getting closer to being real gold."
  ,
    categories: ["Honesty","Responsibility"],
    meaning: "True faith is about internal transformation and honesty, not just outward religious appearances."
  },
  {
    amharic: "ብሩህ ዘመን እንዲሆንልን እመኛለሁ። ተዋጊያችን እርሱ እግዚአብሔር በነገሮች ሁሉ ቀድሞ ይታገልልን።",
    english: "I wish for us to have a bright era. May our fighter, God Himself, go before us and fight for us in all things."
  ,
    categories: ["Life","Wisdom"],
    meaning: "A hopeful wish that divine guidance will fight our battles and lead us into a brighter future."
  },
  {
    amharic: "ቀጣዩ የህይወት ምዕራፍ (The Next Chapter of Life)\n\nየዕውቀት የመጨረሻው ግብ መስጠት ነው ብዬ አምናለሁ፡፡ ቀጣዩ የህይወት ምዕራፍ ትኩረት ሰዎች እንቁ ማንነታቸውን አውጥተው ደስተኛ ስኬታማ ህይወት እንዲኖሩ ማገዝ ፣ማሰልጠን እና ማብቃት።",
  ,
    categories: ["Education","Leadership"],
    meaning: "The ultimate purpose of acquiring knowledge is to share it and empower others to succeed."
  },
  {
    amharic: "እውነተኛ የሕይወት ጥበብ (The True Wisdom of Life)\n\nበዚህ በፈጣን የቴክኖሎጂና የውድድር ዘመን ውስጥ፣ ብዙዎቻችን ሩጫ እንጂ ጉዞ፣ ጫጫታ እንጂ መረጃ፣ መኖር እንጂ ሕይወት እየጠፋብን እንገኛለን። እውነተኛ የሕይወት ጥበብ ደግሞ የሚገኘው ከሩጫው በስተጀርባ ባለው መረጋጋትና ነገሮችን ከጥልቀታቸው መረዳት ሲቻል ነው። የነጠረ የሕይወት ጥበብ ማለት ብዙ ተምሮ ብዙ ማወቅ ብቻ ሳይሆን፣ ጥቂት የታወቁ እውነቶችን በተግባር መኖር መቻል ነው።",
  ,
    categories: ["Wisdom","Life"],
    meaning: "True wisdom is found in understanding things deeply and applying a few core truths in practice."
  },
  {
    amharic: [
      "ስለ ሰብዓዊነት እና የሕይወት ክብር (On Humanity and the Dignity of Life)",
      "",
      "በዚህ ዘመን ሰው ወገኑን የሚገድልበት ምክንያት ምንም ይሁን ምን ተቀባይነት አይኖረውም፡፡ አንዴ ሁለቴ ግጭት ሊባል ይችል ይሆናል፤ በተደጋጋሚ ተመሳሳይ ቦታና በተመሳሳይ መልኩ ሲደረግ ዝም ማለት ህሊናን እረፍት ያሳጣል፡፡ የሰው ልጅን በህይወት የመኖር መብት ማክበር ያለመቻል፤ የእምነት ልዩነትን መቀበል ያለመቻል፣ የዜጎችን ደህንነት መጠበቅ ያለመቻል ያሳዝናል፡፡ የሰውን ክብር ከምድራዊ ማንነቱ ጋር ብቻ ስናያይዘው ያጠፋነው፣ ያሸነፍነው፣ የተበቀልነው፣ ሊመስለን ይችል ይሆናል ይህ ሞት ግን በመንፈሳዊ አይን ሲታይ ለእምነት ፅናት የተከፈለ መስዋዕትነት ነው፡፡ ይህ ሞት የክብር ሞት ነው፡፡ በሰማይ ታላቅ ደስታ የሚሆንበት ሞት ነው፡፡ በዚህ እንዲቆመም ምኞቴ ነው፡፡ ለነገው ትውልድ ንጹሕ ሰብዓዊነትን ለማውረስ፣ ዛሬ ያለውን ችግር በዘላቂነት ለመፍታት ሰውን ኹሉ እንደ ጠላት ከማየት የመንፈስ ገሀነም መውጣት ይጠበቅብናል፡፡",
      "",
      "የመማር ጥቅሙ፣ የመንፈሳዊ አባትነት ሀላፊነት፣ የሰብዐዊ ፍጡር ርህራሄ በሌላው ሰው ሕመም ውስጥ ታሞ ድምፅ መኆን መቻል ነው፡፡",
      "",
      "በመጨረሻም፣ በተደጋጋሚ ለተሰሙትና ለተከሰቱት የአርሲ አካባቢ የሰዎች ሕይወት መጥፋት አስቸኳይና ዘላቂ የሆነ መፍትሔ ይፈለግ ዘንድ ልባዊ መሻቴ ነው፡፡"
    ].join("\n"),
  ,
    categories: ["Community","Human Nature","Respect"],
    meaning: "We must respect the dignity of every human life, put an end to senseless violence, and inherit a legacy of pure humanity."
  },
  {
    amharic: "ስኬት እና ቁርጠኝነት (Success and Commitment)\n\nስኬት የሚጀምረው በውሳኔ ነው፤ ዳር የሚደርሰው ግን በቁርጠኝነት ነው። ምንም ዓይነት ስኬት ያለ መስዋዕትነት አይገኝም። ቁርጠኛ ሰው ለዓላማው ሲል ጊዜውን፣ ጉልበቱንና ጊዜያዊ ምቾቶቹን ለመተው ዝግጁ ነው። አንድ አትሌት ለድል የሚበቃው ጠዋት ብርድ እየመታው ለመለማመድ ባለው ቁርጠኝነት እንጂ ስላሸነፈ ብቻ አይደለም። እመኑኝ አንድን ነገር ለመጀመር መነሳሳት (Motivation) ሊኖረን ይችላል፤ ነገር ግን ያ መነሳሳት ሲቀዘቅዝ፣ ድካም ሲሰማንና መሰላቸት ሲመጣ እንድንቀጥል የሚያደርገን ቁርጠኝነት ብቻ ነው።",
  ,
    categories: ["Success","Perseverance"],
    meaning: "Motivation may start a journey, but only strong commitment and a willingness to sacrifice will bring true success."
  },
  {
    amharic: [
      "እውነተኛው ወዳጅ (The True Friend)",
      "",
      "የወደዳቸውን እስከመጨረሻ ወደዳቸው ተብሎ የተነገረልህ እውነተኛው ወዳጅ ፤ ቀርበህ የማትርቀን፣ ይዘህ የማትለቀን፣ እስከ ሞት የወደድከን፣ የምንፈራውን ሞት የሞትክልን፣ መተላለፋችንን የደመሰስክልን፣ በደምህ የዋጀኸን ዘላለማዊው ጌታ ኢየሱስ ክርስቶስ ፍቅርስ እንዳንተ ነው፡፡",
      "",
      "ጌታ ሆይ! ማነው እንዳንተ በዋጋ ከተደራደረበት ጋር እራት የሚበላ፣ አሳለፎ ክሚሰጠው ጋር ህብስት የሚቆርስ ፤ ሊክድ የተዘጋጀውን በዐይኑ የሚፈልግ፣ ለገረፉት፣ ለተፉበት፣ ለወጉት፣ ለሰቀሉት ምህረትን የሚጠይቅ? የኔ ጌታ ! በቀራንዮ አደባባይ ደምግባት አልባ ሆነህ፣ በመስቀል ተቸንክረህ፣ የእሾህ አክሊል ደፍተህ፣ ክንድህ ዝሎ፣ መቃብር ስትወርድ አዳም ነፃ ወጣ፣ ባንተ ስቃይ የሞት ሸለቆን ተሻገርን፣ በማይነጥፍ ወረት አልባ ፍቅር ስለወደድከን በሞትህ ተቤዥከን፤ እንዳንተ ያለ እውነተኛ ወዳጅ ከየት ይገኛል?",
      "",
      "እኔ ግን እልሀለሁ ፍቅርህ መንፈሴን ሞልቶታል፣ ስምህ ክምላሴ ተጣብቋል፣ መስቀልህ በዐይኔ ተስሏል፣ የከፈልክልኝ ዋጋ በውስጤ ታትሟል፡፡ ይህ ፍቅርህ በምንም የማይተካ፣ በምንም የማይለካ፣ ወድቄ የተነሳሁበት፣ ጠፍቼ የተገኘሁበት፣ ዳግም ልጅነት ያገኘሁበት ነውና እስከ መጨረሻው አፅናልኝ፡፡",
      "",
      "እነሆ የሚወድህ እንዲህ ተማፅኖሀል፤ ኤሎኼ ላማ ሰበቅታኒ! አቤቱ አትተወኝ!!!!!!!!"
    ].join("\n"),
  ,
    categories: ["Love","Friendship"],
    meaning: "The purest form of love and friendship is selfless sacrifice, exemplified by unconditional divine love."
  },
  {
    amharic: [
      "መኖር ደስ ይላል (Living is a Joy)",
      "",
      "መኖር ደስ ይላል:- እንባን እያበሱ፣ የወደቁትን እያነሱ፣ በፈረሰው በኩል እየቆሙ፣ የማመስገኛ ምክንያት እየሆኑ መኖር ደስ ይላል ።",
      "",
      "በቅን ልብ እየተዋደዱ፣ በንፁህ ህሊና እየተረዳዱ፣ ለሌሎች የሚተርፍ መዓዛ ያለው ህይወት መኖር ደስ ይላል ። በሰዎች ህይወት ውስጥ የለውጣቸው መንስዔ፣ የእድገታቸው መሰረት፣ የማበባቸው ምክንያት፣ የአሸናፊነታቸው ተጠቃሽ፣ በስኬታቸው ተወዳሽ ሆኖ በክብር መኖር ደስ ይላል።",
      "",
      "በታሪክ ውስጥ በደማቅ ተፅፎ፣ የእራስን አሻራ አሳርፎ፣ የሚያኮራን ተግባር ፈፅሞ በእረፍት እና በእርካታ ስሜት ተሞልቶ በኩራት መኖር ደስ ይላል።",
      "",
      "ይህን የመሰለው ህይወት ያለኝ ይበቃኛል ማለትን፣ የአገልጋይነት መንፈስን፣ ለህሊና መገዛትን፣ ለእውነት መታመንን፣ ከተገፉት ጎን መቆምን ይጠይቃል። እንዲህ በማድርግ መኖር እጅግ ደስ ይላል። ለሁሉም ግን መኖር ደስ ይላል።"
    ].join("\n"),
  ,
    categories: ["Life","Community"],
    meaning: "Life is most joyful when we serve others, lift up the fallen, and become a reason for their happiness."
  },
  {
    amharic: [
      "ሀዋሳን ስወዳት ከልቤ ነው (I Love Hawassa from My Heart)",
      "",
      "ሀዋሳን ስወዳት ከልቤ ነው። ትላንት፡- በህይወቴ ከባድ የምለውን ውሳኔ፣ የማይታለፍ የሚባል ምርጫን ትቼ ለመኖር የመረጥኳት ድንቅ ከተማ።",
      "",
      "ዛሬ፡- የተሸፈነ ቬሎዋ የተገለጠላት፣ በሳቅ የፈካ ውብ ፀዳል የተጎናፀፈች ሙሽራ መስላ ሳያት የሚነዝር የደስታ ስሜት ወረረኝ።",
      "",
      "ክቡር ከንቲባ እና የከተማችን አመራሮች በትውልድ የሚነገር፣ በታሪክ የሚዘከር፣ ከዘመን የታተመ ቋሚ አሻራ በማሳረፋችሁ ልትኮሩና ክብር ሊሰማችሁ ይገባል።",
      "",
      "እኛም እንደ ነዋሪነታችን በልማቷ ላይ በኃላፊነት በመሳተፍ ከተማችንን የምንደግፍ መሆን እንዳለብን ይሰማኛል። ሀዋሳ ዛሬ የምንኖርባት ቦታ ብቻ ሳትሆን የነገው ትውልድ ተስፋ፣ የብዙዎችም ናፍቆት ናት። ስለዚህ ይህንን ለውጥ በማፅናት፣በመጠበቅና የምትታወቅበትን ሰላሟን፣ የፍቅር መናገሻነቷን፣ እንግዳ ተቀባይነቷን በተባበረ ክንድ በማስቀጠል ልንተጋ ይገባል።",
      "",
      "ዘመኑ Smart City የመፍጠር አቅም ስለሚጠይቅና የነቃና የበቃ Smart citizen ማፍራት ስለሚኖርብን በdigital transformation እና በንባብ ባህል መዳበር ላይ ትኩረት ማድረግ ይኖርብናል ብዬ አምናለሁ። በምዕራፍ አንድ ስራ ህልም እውን ሲሆን፣ ምኞት ሲሳካ አይቼ እኛስ ኮራን በናንተ ብያለሁ። በቀጣዩ ስራችሁ የሰራዊት ጌታ እግዚአብሔር እንደ ነህምያ ይደግፋችሁ።",
      "",
      "ተፈጥሮ ውበትን ያደለሽ፣ የቅን ህዝቦች መኖሪያ፣ የማትሰለቺኝ የእረፍቴ ወደብ፣ ልለይሽ የማይቻለኝ የመማፀኛ ከተማዬ፣ በንፁህ ልቤ አቅሜ በፈቀደው ሁሉ ለከፍታሽ ልተጋ ቃል እገባለሁ።"
    ].join("\n"),
  ,
    categories: ["Community","Responsibility"],
    meaning: "Loving our city means actively participating in its development and ensuring it remains a place of peace and progress."
  },
  {
    amharic: [
      "ስምህ እንደሚፈስ ሽቱ ነው (Your Name is Like Perfume Poured Out)",
      "",
      "በእምነት ስም ብዙ መበሻሸቅ፣ ብዙ መዘላለፍ፣ ብዙ መከራከር የበዛበት ጊዜ ላይ እንዳለን ይሰማኛል። ሰዎች ሀይማኖት በቀየሩ ቁጥር በተለይ ከኦርቶዶክስ ሲወጡ ታላቅ መናወጥ ይሆናል። በወንጌል አማኙ ዘንድ ደግሞ ኦርቶዶክስ ቤት ኢየሱስ እንደማይታወቅና እንደማይሰበክ ይልቁንም ኢየሱስ የሚለው ስም ሲነሳ የምንናደድ የሚመስላቸው የእምነቱ ተከታዮች በስፋት ይታያሉ። ወንጌል ሲገባን፣ ኢየሱስን ስናውቀው የነገረ ክርስቶስን ምስጢር በምልዓት ስንረዳ ከብሽሽቅ ይልቅ ወንድማማችነት፣ ከትዕቢት ይልቅ ትህትናን ገንዘብ እናደርጋለን እንጂ ግዳይ እንደጣለ ጀግና አንፎክርም ነበር። ይህ ቢታረም መልካም ይሆናል።",
      "",
      "ለኛ ኦርቶዶክሳውያን ግን ኢየሱስ የሚለው ስም እንደሚፈስ ሽቱ የህይወታችን መዓዛ ነው። ስሙ የምንድንበት ሀይላችን ነው ፣ የምንመካበት ጋሻችን፣ የምንጠለልበት ጥጋችን፣ የነፍሳችን መድሀኒት የልባችንም ደስታ ነው ። ስሙ እስከሞት የምንታመንለት የፅድቅ አክሊላችን፣ በድል ጎዳና የምንረማመድበት አርማችን፣ አለምን ማሸነፊያ ትጥቃችን ነው ። ለአንደበታችን የሚጣፍጥ የህይወታችን ጥዑም ቃና፤ ወድቀን የተነሳንበት፣ ተዋርደን የከበርንበት፣ ተሰደን እንደባለማዕረግ የተቆጠርንበት ከተናቀው የከብት በረት ጀምሮ በተናቁ ወንበዴዎች መሃል በመሰቀል በዋጋ የተገዛንበት ስም ነው።",
      "",
      "ለዚህ ነው ኦርቶዶክስን የምንከተለው፣ ለዚህ ነው የምንፀናው፣ ለዚህ ስም ነው የምንነቀፈው፣ ለዚህ ስም ነው ዕለት ዕለት የምንገደለው፣ ይህንን ስም ነው የምንሰብከው፤ ይህንን ስም ነው የተቀበልነው። አዎ ኢየሱስ ጌታ ነው ። አዎ ኢየሱስ አዳኝ ነው። አዎ በአብ ቀኝ የተቀመጠው ፈራጅ ዳኛ፣ የይሁዳ አንበሳ፣ የድንግል ማርያም ልጅ ኢየሱስ ክርስቶስ የዓለም መድኃኒት ነው።"
    ].join("\n"),
  ,
    categories: ["Wisdom","Love"],
    meaning: "Faith should be rooted in deep love, humility, and brotherhood, rather than serving as a reason for conflict and boasting."
  },
  {
    amharic: [
      "የገንዘብ ስነ-ልቦና (The Psychology of Money)",
      "",
      "ብዙዎች ገንዘብ እንዴት እንደሚሠሩ ይማራሉ ግን እንዴት እንደሚይዙት እና እንዴት ማባዛት እንደሚችሉ እንደማያውቁ ይናገራሉ። የገንዘብ ሀብት ለማግኘት ገንዘብ እንዴት እንደሚሰራ የማወቅና መረዳት ችሎታ ይፈልጋል። ሲመጣ ደሞ የመጣውን ገንዘብን ማስተዳደርና መጠበቅ ዲሲፕሊን ይፈልጋል። የገንዘብ ነፃነትን ለመቀዳጀት ገንዘብን የማባዛት ጥበብ መጎናፀፍ ያሻል።",
      "",
      "ምንጭ፡- The psychology of money",
      "",
      "ምስክርነት ፡- ምን ማድረግ አለብህ?",
      "ትኩረትህን ቀይር፦ ጊዜህን በባዶ “ሞቲቬሽን” እና ተግባር በሌላቸው ቪዲዮዎች ላይ ከማባከን ይልቅ፣ ትምህርትን ከተግባርና ከውጤት ጋር ከሚያስተምሩ ሰዎች ጋር ተጣበቅ። የሚያዋጣው እሱ ብቻ ነው!"
    ].join("\n"),
  ,
    categories: ["Education","Responsibility"],
    meaning: "Achieving financial freedom requires not just the ability to make money, but the discipline to manage and multiply it wisely."
  },
  {
    amharic: [
      "Functional Illiteracy: ዝምተኛው ገዳይ (The Silent Killer)",
      "",
      "Functional illiteracy ዝምተኛው ገዳይ። እድገትን ያዘገየ፣ መፍትሄ ያልሰጠ፣ ለውጥን የሚፈራ፣ ፈጠራን የማይደፍር፣ በማወቅ ስም ጥበብ የጎደለው፣ ብቃት የሌለው፣ የተማረ የሚል ካባ የደረበ በተግባር የጎደለ የዘመናችን ሰው ፈተና እዚህ ውስጥ ታይቶኛል።",
      "",
      "Manual አንብቦ የማይረዳ፣ የመድሀኒት precautions አንብቦ የማይጠነቀቅ፣ online ማመልከት ያልቻለ፣ የባንክ ስሊፕ መሙላት ግራ የሚያጋባው፣ map reading ተጠቅሞ ከቦታ ቦታ የማይንቀሳቀስ፣ ቴሌ የሚልከውን የቢል ቴክስት የማይረዳ ፣ ወዘተ ቤት ይቁጠረው።"
    ].join("\n"),
  ,
    categories: ["Education","Human Nature"],
    meaning: "Possessing basic skills without the ability to practically apply them is a silent killer of progress and innovation."
  },
  {
    amharic: [
      "የአስተሳሰብ አብዮት (Mindset Revolution)",
      "",
      "\"ችግሩን በፈጠረው አስተሳሰብ ችግሩን መፍታት አይቻልም\" ለወጣቱ ምቹ ሁኔታ በመፍጠር ከተማረ አቅመ-ቢስነት (Learned Helplessness)  \"ምንም ባደርግ ለውጥ አይመጣም\" ከሚል እሳቤ ወደ ራስን የማብቃት ተወዳዳሪነት የሚመጣበትን የአስተሳሰብ አብዮት(Mindset Revolution) ማምጣት ያለብን ይመስለኛል።",
      "",
      "ስልጠና ፤ማማከርና ስራፈጠራ ላይ የምትሰሩ ባለድርሻ አካላት በመቀናጀት ወጣቱን ተስፋ ስጡት።",
      "",
      "ማንቃት፣ መደገፍ፣ ማስቻል!!!!!!!!"
    ].join("\n"),
  ,
    categories: ["Education","Success","Leadership"],
    meaning: "To solve deeply rooted problems, we must undergo a mindset revolution, shifting from learned helplessness to active self-empowerment."
  },
  {
    amharic: [
      "የገና በዓል መልእክት - ዝቅ ብሎ ወደ ክብር መውጣት (Christmas Message - Rising to Glory from the Lowest Place)",
      "",
      "ከብዙ ዘመናት በፊት አረጋዊው ቅዱስ ዮሴፍ ማርያም ትወልድበት ዘንድ ምቹ የሆነ ስፍራ ፍለጋ ሰዎችን አልጋ ይጠይቅ ጀመር፣ ይሁን እንጂ እንዳሰበው የተቀበለውና ይሁንታን የሰጠው አልነበረም፤ የጠየቃቸው ሁሉ በሮችን ዘጉበት። ከብዙ ፍለጋና ድካም በኋላ ግን ጌታችን አምላካችንና መድሀኒታችን ኢየሱስ ክርስቶስ በግርግም በከብቶች በረት ተወለደ።",
      "",
      "በማርያም ሆድ የነበረው ይወለድበት ዘንድ ምቹ ስፍራን የተነፈገው ህፃን የነገስታት ንጉስ፣ የጌቶች ጌታ የአለም ብርሀን መሆኑንም አላወቁም ነበር። ጌታችን መድሀኒታችን ኢየሱስ ክርስቶስ ወደዚህች ምድር ሲመጣ የአለም ፈጣሪ ሆኖ ሳለ አለም ምቹ ቦታ ነፍጋው ነበር።",
      "",
      "ዛሬም ሰዎች የብዙዎችን ህልም፣ የብዙዎችን ተስፋ የብዙዎችን እውነት አንድም ባለማወቃቸው ባለመረዳት ሲቀጥልም ማርያም በሆዷ የያዘችውን ህፃን ማንነት ስላላወቁ በጌታ እናት ላይ እንዳደረጉት ሁሉ በዚህ ዘመንም የብዙዎችን ህልምና ራእይ ባለመረዳት በሮች ተዘግተውባቸዋል። ሀገርን የሚያሻግር ራእይ ይዘው የመከራ ቋጥኝ እያንከባለሉ በመንገዳቸው እንቅፋት የሚያቆሙ ታይተዋል፣ ይሁን እንጂ ደጆች ተዘግተው ታላላቅ ህልሞች የማይሳኩ ቢመስልም ከአምላካችን ልደት መማር ያለብን ዝቅ ብሎ ወደ ክብር መውጣት እንደሚቻል ነው። ዛሬ የተጎሳቆልን የሚመስለን፣ በማጣታችንና ነገሮች ባለመሳካታቸው ተስፋ የቆረጥን፤ በሆነውና በሚሆነው የተሰላቸን ካለን ክርስቶስ በመወለዱ ለድሆች ተስፋ፣ ለተናቁት ክብር፣ ለተገፉት ምርኩዝ፣ ለታመሙና ለተጨነቁ እፎይታ፣ ሸክማቸው ለከበደ እረፍት፣ ላዘኑት መፅናናት እንደሆናቸው ሁሉ ለባለራእዮችም የኢየሱስ ክርስቶስ ሕይወቱና ቃሎቹ ታላቅ ጉልበትና ሀይል ይሆናቸዋል።",
      "",
      "ይህንን እውነት ሰንቀን በዐሉን ስናከብር አቅማችን በፈቀደው መጠን እርስ በርሳችን ስጦታን በመለዋወጥ፤ ለተቸገሩ ሰዎች በማካፈል፤ ወላጅ አልባ ሕጻናትን በመርዳት፤ የአረጋውያን መጦሪያ ስፍራዎችን በመጎብኘት፤ የታሰሩ ሰዎችን በመጠየቅ፤ በየሆስፒታሉ ያሉትን በሽተኞች በመጎብኘት ቢሆን በብቸኝነትና በሀዘን ልባቸው ለከበደ ሰዎች፣ ርህራሄንና መፅናናትን ያመጣል። በህመምና በስቃይ አካላቸውና አእምሮአቸው ለተጎዱ ሰዎች፣ ፍቅርንና ፈውስን ያመጣል። ለእኛም በገንዘብ የማይተመን እርካታን ያጎናፅፈናል። እንድንድንበት ዘንድ ኢየሱስ የሚለው ስም በመወለዱ ተሰጥቶናልና፤ የመዳን ቀንም ዛሬ ነውና ክርስቶስም በህይወቱ ያስተማረን የዋሆችን፣ አዛኞችን፣ ትሁቶችን፣ በጭንቀት ላይ ያሉትን እና የመንፈስ ድሆችን ያለልዩነት ማገልገልን በመሆኑ በዚህ የገና በአል ወቅትና ሁሌም እሱ እንደሚወደው ሰዎችን በመውደድ በቀላል የደግነት፣ የልግስና እና የርህራሄ ተግባሮች አማካኝነት በፍቅሩ ብርሀን ተሞልተን የልደቱን ክብር እናስታውስ።",
      "",
      "መልካም በአል"
    ].join("\n"),
  ,
    categories: ["Humility","Love","Community"],
    meaning: "True greatness often starts from the humblest beginnings, and we should honor this by showing compassion and kindness to the marginalized."
  },
  {
    amharic: [
      "የመንጋት ፀጋ ይጎብኛችሁ።",
      "",
      "ንጋት አዲስ ቀንን እና አዲስ እድልን ይወክላል። አዲስ መነሻና አዲስ ጅማሮ ነው። የመንጋት ተፈጥሯዊ ውበትና ዕረፍት – ከጨለማ ወደ ብርሃን በሂደት የሚደርስ መቀየርን ይዞ ይመጣል። በድል ብስራት የተጀመረው አዲስ ዘመን ፤ በመንጋት ፀጋ ይጎብኛችሁ።"
    ].join("\n"),
    english: [
      "May the grace of dawn visit you.",
      "",
      "Dawn represents a new day and a new opportunity. It is a new starting point and a new beginning. The natural beauty and rest of dawn – brings with it a gradual transition from darkness to light. May the new era that has begun with the good news of victory visit you with the grace of dawn."
    ].join("\n")
  ,
    categories: ["Life","Wisdom"],
    meaning: "Every new dawn is a beautiful opportunity for a fresh start and a transition from darkness into light."
  },
  {
    amharic: "ወጥነት ዓላማችንን ለማሳካት፣ ግባችንን ለመምታት፣ ህልማችንን እውን ለማድረግና ካሰብንበት ለመድረስ የሚከፈል ዋጋ፣ በመርህ የመጓዝና ዲሲፕሊን መር ህይወት ለመምራት የሚያስፈልገን ሀይል ነው ። ጀምረን የተውናቸው፣ ሞክረን ያቋረጥናቸው፣ መፅናት አቅቶን የሰረዝናቸው በርካታ ቢዝነሶች፣ ግንኙነቶችና ስምምነቶች እልፍ ናቸው። ባለመጨረሳችን ፣ ባለመቀጠላችን፣ ባለመፅናታችን ያጣነውን፣ የቀረብንን፣ ያመለጠንን እድል እየቆጠርን በቁጭት ከመብከንከን በቀጣይስ ላመንንበትና መድረሻውን ላወቅንበት ጉዳይ የሚያስፈልገንን የወጥነት ዲሲፕሊንና ሀይል እናዳብር።",
    english: "Consistency is the price we pay to achieve our purpose, hit our target, make our dream a reality, and arrive at our destination; it is the power we need to walk on principle and lead a discipline-led life. The businesses, relationships, and agreements we started and abandoned, tried and stopped, or cancelled because we lacked perseverance are countless. Instead of agonizing in regret counting the opportunities we missed, lacked, or let slip away because we did not finish, did not continue, and did not persevere, let us develop the discipline and power of consistency we need for the cause we believe in and whose destination we know."
  ,
    categories: ["Perseverance","Success","Responsibility"],
    meaning: "Consistency and discipline are the essential forces required to see our goals through to the very end."
  },
  {
    amharic: "ከጅማሬያችሁ በላይ ፍፃሜያችሁን፣ ከመነሻችሁም በላይ መውደቂያችሁን ያመቻችላችሁ ዘንድ ፈጣሪን ሰው ስጠኝ ብላችሁ ጠይቁት። በሰው ጉዳታችሁን ያክመዋል፤ በሰው ያሳርፋችኋል፤ በሰው ሰላምን ያድላችኋል፤ በመረጠላችሁ ሰው በኩል ዳግም አንፆ ቀና ያደርጋችኋል። ህመማችሁን የሚመለከት፣ ድካማችሁ የሚገባው፣ ትጋታችሁ ጥግ መድረሱን የሚያውቅ፣ ቁስላችሁ እንዲሽር የሚፈልግ፣ የዓመታት ጠባሳችሁን መሻር የሚሻ ሰው ይስጣችሁ።",
    english: "Ask the Creator to give you a person who will prepare your end better than your beginning, and your landing better than your starting point. Through a person, He heals your wounds; through a person, He gives you rest; through a person, He grants you peace; and through the person He chose for you, He rebuilds and lifts you up again. May He give you a person who sees your pain, understands your exhaustion, knows that your diligence has reached its limit, wants your wounds to heal, and desires to erase the scars of your years."
  ,
    categories: ["Relationships","Friendship","Love"],
    meaning: "A truly valuable partner or friend is one who heals your wounds, understands your struggles, and helps you finish strong."
  },
  {
    amharic: "ሁሉም ሰው ያስባል፤ ጊዜ ሰጥቶ፣ ቦታ መርጦ ስለማሰብ የሚያስብ ግን ጥቂት ነው።",
    english: "Everyone thinks; but few are those who take the time, choose a place, and intentionally think about thinking."
  ,
    categories: ["Wisdom","Education"],
    meaning: "Intentional, focused thinking is a rare and highly valuable skill."
  },
  {
    amharic: "የአብዛኞቻችን ችግር በተግሳፅ፣ በውይይት፣ በሰላ ሒስ ተመክረን ከመታረምና ከመበርታት ይልቅ፥በአድናቅት መዶሻ መፈራረስን መምረጣችን ነው።",
    english: "The problem with most of us is that, rather than being guided to correction and strength through discipline, dialogue, and sharp critique, we choose to be destroyed by the hammer of flattery."
  ,
    categories: ["Human Nature","Wisdom"],
    meaning: "Many people prefer the comfortable harm of flattery over the constructive benefit of honest criticism."
  },
  {
    amharic: "አንዳንድ ሰዎች በፈጣሪ ላይ ካላቸው እምነት ይልቅ፤ በሰይጣን ላይ ያላቸው ፍርሃት ይበረታል።",
    english: "For some people, their fear of Satan is stronger than their faith in the Creator."
  ,
    categories: ["Human Nature","Wisdom"],
    meaning: "Some people are driven more by their fears of evil than by their trust in what is good."
  },
  {
    amharic: "“መስቀለኛ መንገድ ላይ ደረስኩ፣ መሄድ የምችለው በአንዱ መንገድ ላይ ብቻ ነው፡፡ ቆም ብዬ አሰብኩና ብዙ ሰዎች ያልሄዱበትን መንገድ መረጥኩ፡፡ የታሪኬ ታላቅ ነገር የጀመረው ያን ጊዜ ነበር”",
    english: "“I arrived at a crossroads, and I could only travel on one path. I paused and thought, and I chose the path less traveled by many. That was when the great part of my story began.”",
    attribution: "ሮበርት ፍሮስት (Robert Frost)"
  ,
    categories: ["Courage","Life"],
    meaning: "Choosing to follow a unique, less popular path often leads to the most significant life adventures."
  },
  {
    amharic: "አንዳንድ ጊዜ በረከት ይዘው የሚመጡት ራሳቸው ችግሮች ናቸው፡፡ እውነተኛ የችግራችሁ መፍትሄ ደግሞ መፈለግን፣ መጠየቅን፣ እና ማንኳኳትን ይፈልጋል። መከራን የተሻገሩ፤ ችግርን ያሸነፉት ያለማቋረጥ ያንኳኩት ናቸው። ይህ ነው የመለወጫው መንገድ።",
    english: "Sometimes, problems themselves are the ones that bring blessings. And the true solution to your problem requires seeking, asking, and knocking. Those who have crossed hardships and defeated problems are those who knocked continuously. This is the path of transformation."
  ,
    categories: ["Perseverance","Success","Wisdom"],
    meaning: "Hardships often carry hidden blessings, and those who persistently seek solutions will eventually find them."
  },
  {
    amharic: [
      "\"እውነት የራስዋም የውሸትም ማስረጃ ነች\"",
      "",
      "በአሮጌ ቤት የሚኖረውን ሰው ተጠግቶ ቤትህ የማይረባ ነው ማለት አይገባም። ከበረቱ አጠገብ አዲስ ቤት መሥራት ነው። ይህ አዲሱ ቤት ስለራሱም አዲስነት ስለሌላውም አሮጌነት ብቻውን ይናገራል።",
      "",
      "የራስህን አዲስ ታሪክ ፃፍ። አሮጌው አልፏል።"
    ].join("\n"),
    english: [
      "\"Truth is the evidence of both itself and of falsehood.\"",
      "",
      "It is not right to approach someone living in an old house and tell them their house is worthless. The solution is to build a new house next to their barn. This new house will speak for itself about its own newness, and about the oldness of the other.",
      "",
      "Write your own new story. The old has passed."
    ].join("\n"),
    attribution: "እጓለ ገ/ዮሀንስ (የከፍተኛ ትምህርት ዘይቤ)"
  ,
    categories: ["Honesty","Life"],
    meaning: "The best way to expose a flaw is not to argue against it, but to build something new and undeniably better next to it."
  },
  {
    amharic: [
      "የሆነ ጊዜ ላይ ህይወት እነሱን ባለጊዜ፣ ሁሉን ቻይ አድርጋቸው እኛ ደግሞ ተቀባይ፣ ባለብዙ ጎዶሎ ሆነን ሳለን ሊረዱን ሲቻላቸው አይተው ያለፉንን፤ ለእኛ ጋራ የመግፋት፣ ቋጥኝ የመሸከም ያህል የከበደን ጉዳይ ለነሱ ጠጠር የመጣል ያህል ቀላል ሆኖ እያለ ከማገዝ እጃቸውን የሰበሰቡትን፤ ማገዙ እንኳ ቢቀር እንቅፋት ላለመሆን ያልቻሉትን እንበቀላቸው።",
      "",
      "የእኛ ተራ ሲደርስ ለሽራፊ ሴኮንድ ሰዎችን አናስታጉል፣ ደጅ አናስጠና። እነሱ ባጎደሉብን ልክ- ቢቻል ከዚያም በላይ- በምናስፈልግበት ሁሉ ሙላት ሆነን እንገኝ። ሊሆኑልን ያልቻሉትን ሆኖ ከመገኘት የበለጠ በቀል የለም። ተሽለን በመገኘት እንበቀላቸው።"
    ].join("\n"),
    english: [
      "Let us take revenge on those who, at a time when life made them capable and powerful while we were needy and lacking, saw us and passed by when they could have helped; those who withheld their hands from helping us when a matter that felt as heavy to us as pushing a mountain or carrying a boulder was as easy for them as throwing a pebble; those who, even if they couldn't help, couldn't at least refrain from being an obstacle.",
      "",
      "When our turn comes, let us not delay people or make them wait at our door for even a fraction of a second. To the extent that they fell short—and if possible, even more—let us be a complete presence wherever we are needed. There is no greater revenge than being what they couldn't be for us. Let us take revenge by being better."
    ].join("\n")
  ,
    categories: ["Relationships","Human Nature","Success"],
    meaning: "The greatest revenge against those who failed you is to become a better, more helpful person yourself."
  },
  {
    amharic: "ነጋችንን የሚገል ጉዳይ ዛሬውኑ ይሙት!",
    english: "Let whatever kills our tomorrow die today!"
  ,
    categories: ["Courage","Life"],
    meaning: "We must aggressively eliminate anything in our present that threatens our future success and well-being."
  },
  {
    amharic: "አንዳንድ ሰዎች እንደማስነጠስ ናቸው ከህይወትህ ሲወጡ ደስ ሊልህ ይገባል።",
    english: "Some people are like a sneeze; you should be glad when they leave your life."
  ,
    categories: ["Relationships","Human Nature"],
    meaning: "It is healthy and relieving to let go of toxic people from your life."
  },
  {
    amharic: "የመድመቃችንን መጠን የምንለካው በሌሎች የመደብዘዝ መጠን አይሁን።",
    english: "Let the measure of our brightness not be the extent to which others fade."
  ,
    categories: ["Relationships","Respect","Community"],
    meaning: "We should shine based on our own merits, not by dimming the light or success of those around us."
  },
  {
    amharic: [
      "የጅማሬህን መሰረት አዕምሮህ ላይ አድርግ፡፡",
      "",
      "ጀምረህ ካልጨረስክ፣ አስበህ ካልፈፀምክ፣ ተመኝተህ ካላገኘህ፣ ተራምደህ ካልደረስክ፣ ተፋቅረህ ካላገባህ፣ ስቀህ ካልተደሰትክ ልብ በል። በመጀመርና በመጨረስ መካከል ትልቅ ገደል አለ፡፡ መምሰልና መሆን አንድ አይደለም፡፡ ያሰብከውን የምትሆነው፤ የተመኘኸውን የምታገኘው መካከሉ ላይ ባለህ አሰላለፍ፣ አስተሳሰብ፣ ምግባርና ተግባር ነው፡፡ የአዕምሮህ መዋቅር የተበላሸ ከሆነ፣ ጥሩ ምልከታ ከሌለህ፣ አስተሳሰብህ የበራ ካልሆነ እይታህ ሜዳውን ገደል፤ ድልድዩን ጋሬጣ ሊያደርግብህ ይችላል፡፡",
      "",
      "ጅማሬህን ሊያስጨርስህ የሚችል አስተሳሰብ ገንባ፡፡ አመለካከትህ ሳያድግ ንግድህን ማሳደግ አትችልም፡፡ ሕሊናህ ከፍ ሳይል አስተሳሰብህ ሳይጠነክር ጠንካራ ስብዕና መገንባት አትችልም፡፡ ሕይወትህ ያማረ የሚሆነው በብቁ አዕምሮና በቀና አስተሳሰብ ስትመላለስ ነው፡፡ የአንተነትህ ዋልታ መሰረቱ ህሊናህ ነው፡፡ መንፈስህ ሳይበለፅግ በቁስ ብትበለፅግ ትርፉ ስም እንጂ የልብ ደስታና የመንፈስ እርካታ አያስገኝልህም።"
    ].join("\n"),
    english: [
      "Lay the foundation of your beginning in your mind.",
      "",
      "If you start but don't finish, if you plan but don't execute, if you wish but don't attain, if you walk but don't arrive, if you fall in love but don't marry, if you laugh but aren't happy, pay attention. There is a huge gap between starting and finishing. Seeming and being are not the same. You become what you envision and you get what you wish for based on your alignment, mindset, conduct, and actions in between. If your mental structure is corrupted, if you lack a good vision, if your thinking isn't enlightened, your perspective might turn a flat field into a cliff, and a bridge into an obstacle.",
      "",
      "Build a mindset that can help you finish what you start. You cannot grow your business without growing your attitude. You cannot build a strong personality without elevating your conscience and strengthening your mindset. Your life becomes beautiful when you walk with a capable mind and a positive attitude. The central pillar of your identity is your conscience. If you become materially rich without enriching your spirit, the profit is merely a name, but it will not bring you heartfelt joy and spiritual satisfaction."
    ].join("\n")
  ,
    categories: ["Success","Perseverance","Wisdom"],
    meaning: "Starting is not enough; you must build a strong mindset and resilient character to actually finish what you start."
  },
  {
    amharic: [
      "ሕይወት ፈቃድ ጠያቂዎችን አትሸልምም፤",
      "የምትሸልመው ተግባር ፈጻሚዎችን ነው።"
    ].join("\n"),
    english: [
      "Life doesn’t reward permission-seekers.",
      "It rewards action-takers."
    ].join("\n")
  ,
    categories: ["Courage","Work","Success"],
    meaning: "Bold action, rather than waiting for someone else's approval, is what leads to real success in life."
  },
  {
    amharic: "ሰው ሆነን ስንኖር ቤተሰቦቻችን የሚታዘዙለት፣ ወዳጆቻችን የሚያከብሩልን፣ ጎረቤቶቻችን የሚያውቁልን፣ የስራ ባልደረባዎቻችን የሚከተሉልን የህይወት መርህ፤ የቆምንለት ራዕይ፣ የምንሞትለት ዓላማ ፣ የምናራምደው አቋም፣ የምንጠራበት መልካም ስም፣ የምንዘከርበት በጎ አሻራ በህይወት ገፃችን፣ በኑሮ ሰሌዳ ላይ ልንፅፍ ይገባናል። ይህን በማድረጋችን ኖረን የምንከበርበት፣ አልፈን የምንታወስበት፣ የመልካም ስራችን ሀውልት በሰዎች ልብ ውስጥ ቆሞ፣ በዓይነ ህሊና ተስሎ ፣ ለጆሮ እንደሚስማማ ጥዑም ዜማ ተቀርፆ እንዲቆይና እንደ መልካም ሽቶ የሚጣራ ስብዕና እንዲኖረን እንትጋ።",
    english: "As we live as human beings, we must write on the pages of our lives and the board of our existence a life principle that our families obey, our friends respect, our neighbors recognize, and our colleagues follow; a vision we stand for, a purpose we would die for, a stance we promote, a good name by which we are called, and a good footprint by which we are remembered. By doing this, let us strive to have a personality that spreads like a good perfume, so that we are respected while alive, remembered when we pass, and the monument of our good deeds stands in people's hearts, painted in their mind's eye, and recorded as a sweet melody pleasing to the ear."
  ,
    categories: ["Responsibility","Respect","Community"],
    meaning: "We must strive to live by strong principles so that we leave a positive, lasting legacy that commands respect."
  },
  {
    amharic: "ስለችግር ስታስብ ፣ ውድቀትና ሽንፈትን ወደ ህይወትህ ትጋብዛለህ፤ ስለመፍትሄው ስትሰራ በረከትን ታጭዳለህ፣ በምስጋና ትሞላለህ። ባርኩ፣ መርቁ፣ አመስግኑ።",
    english: "When you think about the problem, you invite failure and defeat into your life; when you work on the solution, you reap blessings and are filled with gratitude. Bless, pray for others, and give thanks."
  ,
    categories: ["Wisdom","Success"],
    meaning: "Focusing on solutions brings gratitude and blessings, while dwelling on problems only attracts failure."
  },
  {
    amharic: "ሀሳብ ከሌላቸው፣ ከማያነቡ፣ ትህትና ከጎደላቸው፣ ትዕቢት ከሞላቸው፣ ክብር ከማይሰጡ፣ ደስታ ከራቃቸው፣ ተስፋ ከሌላቸው ሰዎች ተጠበቁ።",
    english: "Beware of people who have no ideas, who do not read, who lack humility, who are full of arrogance, who do not give respect, who are far from joy, and who have no hope."
  ,
    categories: ["Advice","Relationships"],
    meaning: "Protect yourself by keeping a distance from arrogant, uninspired, and hopeless individuals."
  },
  {
    amharic: [
      "ለማኅበረሰቡ አገልግሎትን በብቃትና በታማኝነት የሚሰጥ ጠቃሚ ሰው ማግኘት መታደልም፤ መባረክም ነው ። እንዲህ አይነት ሰዎችን ማገዝ፣ማመስገን፣ አለፍ ሲልም ተባብሮ መፍጠርም ይገባናል።",
      "ለማኅበረሰቡ ጠቃሚ የሆነ የልማት አስተዋጽኦን ለማበርከት የሚያገለግል ሰው የሚከተሉት የሥነ ምግባር መርሆዎችን የተላበሰ ባህሪያት አሉት፡፡",
      "1. ለሌሎች ከፍቅር የመነጨ በጎ ምግባር ወይንም ቸርነትን ማሳየት፡፡ ሌሎችን የመርዳት፣ የማፍቀርና የማስደሰት ፍላጎት ይኖረዋል።",
      "2. ርህራሄ፡- ሌሎችን ከስቃይና መከራ የመታደግ ፍላጎት፡ እንስሳትንም ሆነ ሰብአዊ ፍጥረታትን ሁሉ ከአስጨናቂ ስቃይና ችግር ነፃ የማውጣት ጽኑ ፍላጎት ወይንም ቁርጠኝነት በተግባር ያሳያል።",
      "3. በሌሎች ደስታ የሚረካና የሚያበረታታ ቅን ልቡና:- ሌሎች ተደስተው ሲመለከት እርሱም የሚደሰት፤ የሌሎች መልካም ምግባር ሲያከናውኑ ወይንም የዕድገት ጥረታቸው ሲሳካ ከልቡ የሚደሰትና እንደ አቅሙ የተቻለውን ዕርዳታ ለመስጠት የሚዘጋጅ ይሆናል ።",
      "4. ሁሉንም በእኩል ዓይን ማየትና መቀበል የሚችል:- ነገራትን በአርቆ አስተዋይ አእምሮ የሚገነዘብ፣ ከአድሎ የጠራ ንጹህ ህሊና! ለሌሎች ወጥና ፅኑ የፍቅር ባህርይ ያለው ነው:: በዚህ ሚዛን ብመዘን ብለን ራሳችንን ብናይ ምን ይመስላችኋል?"
    ].join("\n"),
    english: [
      "Finding a useful person who serves the community with competence and loyalty is a privilege and a blessing. We must help, thank, and even collaborate to produce such people.",
      "A person who serves to make a useful developmental contribution to the community has character traits endowed with the following ethical principles:",
      "1. Showing good deeds or kindness to others out of love: They have the desire to help, love, and make others happy.",
      "2. Compassion: The desire to save others from suffering and misery: They show in practice a firm desire or commitment to free both animals and human beings from distressing pain and problems.",
      "3. A sincere heart that is satisfied by and encourages the happiness of others: When they see others happy, they too become happy; when others perform good deeds or when their development efforts succeed, they rejoice from the heart and are ready to provide whatever help they can afford.",
      "4. Capable of seeing and accepting everyone equally: One who understands things with a far-sighted mind, a clean conscience free from discrimination! One who has a consistent and firm loving character towards others. If we were to measure ourselves on this scale, what do you think it would look like?"
    ].join("\n")
  ,
    categories: ["Community","Responsibility","Respect"],
    meaning: "A truly valuable person serves society with love, compassion, sincerity, and equality towards all."
  },
  {
    amharic: "የማምነውን የቀራንዮ እውነት ከልቤ የሚፍቀው ማን ነው?",
    english: "Who can erase the truth of Calvary that I believe in from my heart?"
  ,
    categories: ["Courage","Life"],
    meaning: "A deep, true faith is so strongly rooted in the heart that nothing can erase or diminish it."
  },
  {
    amharic: "በፕላስተር ከተለጠፉት፣ ከተቀደዱት፣ ካረጁትና ከተዳደፉት ብሮች መሀል የተሻለ አዲስ የሆነውን መርጬ አንድ አረጋዊ አባት የተዘረጉ እጆች ላይ አሳረፍኩ። ስመርጥ አይተውኝ ስለነበር ላንተም የተሻለውን ይስጥህ አሉኝ። በትንሽ ልገሳ የእድሜ ልክ ትምህርት አገኘሁበት። ውስጥ ድረስ የዘለቀ ምርቃት አተረፍኩበት። ካላችሁ ነገር ላይ የተሻለ ስጡ፣ የተሻለ ተቀበሉ።",
    english: "From among the torn, taped, old, and dirty bills, I chose the better, newer one and placed it in the outstretched hands of an elderly father. Because he saw me choosing, he said to me, 'May He give you the best as well.' Through a small donation, I gained a lifelong lesson. I earned a blessing that reached deep inside. Give the best of what you have, and receive the best."
  ,
    categories: ["Honesty","Love","Responsibility"],
    meaning: "Giving the best of what you have, even in small ways, attracts profound blessings and teaches lifelong lessons."
  },
  {
    amharic: "የታዋቂ ሰዎች ቤተ እምነት መቀያየር የወንጌል እውቀት መለኪያ አይደለም። ወንጌል በትህትናና በፍቅር የሚሰበክ የሚኖር እውነት እንጂ በእልህ፣ በፉክክርና በጉልበት የምንንጠራራበት የታይታ መድረክ አይመስለኝም። የኤማሁስ መንገደኞች ለሆናችሁ ትክክለኛው፣ እውነተኛውን ኢየሱስ ታዩት ዘንድ በልባችሁ ብርሀን ያብራላችሁ። ሁሉ በፍቅር ይሁን።",
    english: "The changing of denominations by famous people is not a measure of gospel knowledge. The gospel is a living truth preached with humility and love, not a stage for showing off where we strive out of spite, rivalry, and force. For those of you who are travelers to Emmaus, may He shine a light in your hearts so that you may see the right and true Jesus. Let everything be done in love."
  ,
    categories: ["Wisdom","Respect","Community"],
    meaning: "True faith is demonstrated through humility and love, not through pride, rivalry, or the actions of the famous."
  },
  {
    amharic: [
      "ሰው ምን ያህላል ቢባል ህልሙን ያህላል ነው ሚባለው ። ሕልም እንዲሳካ ደሞ ፅኑ ፍላጎት፣ እረፍት የሚያሳጣ መሻት፣ የመለወጥ ተስፋና ብርቱ ጥረት ይጠይቃል። ሲቀጥልም ቅን ልቦና እና ብሩህ አዕምሮ ይፈልጋል። አዕምሮን መገንባትና ማሳደግ ከኋላ ቀርነት የመላቀቂያ፣ ወዳሰብነው ከፍታ መድረሻ መንገድ ነው ። ወደድንም ጠላንም የሀገር እድገት የሚለካው በአደገ አዕምሮ ልክ ነው ። የሰውም ክብደት የሚለካው በጭንቅላቱ ነው ። ጭንቅላት የሚታነፀው በዕውቀት ነው። ዕውቀት ተፅዕኖ ማሳረፊያና ልዩነት የመፍጠሪያ ትልቅ ሀይል በመሆኑ በዕውቀት እንስራ፣ በዕውቀት እንምራ፣ በዕውቀት እናውራ። ለዕውቀት ተገቢውን ዋጋና ክብር እንስጥ። ያን ጊዜ መሪውን የሚያከብር፣ ሀገሩን የሚያፈቅር፣ አረጋውያንን የሚጦር ፣ የሚከባበር አገልጋይ ዜጋ ይኖረናል። ይህ ሲሆን የእረፍታችንም ዘመን ይመጣል። ዕውቀት ነፃ ታወጣለች።",
      "",
      "ኢዮብ ጽጌ"
    ].join("\n"),
    english: [
      "If one asks 'how big is a person?', the answer is 'as big as their dream.' For a dream to succeed, it requires a strong desire, an unyielding passion, a hope for change, and vigorous effort. Furthermore, it needs a sincere heart and a bright mind. Building and growing the mind is the path to break free from backwardness and reach the heights we envision. Like it or not, a country's development is measured by the size of its developed minds. A person's weight is measured by their brain. The brain is built with knowledge. Since knowledge is a great power for making an impact and creating a difference, let us work with knowledge, lead with knowledge, and speak with knowledge. Let us give knowledge its proper value and respect. Then we will have a serving citizen who respects the leader, loves their country, cares for the elderly, and respects others. When this happens, our era of rest will come. Knowledge sets you free.",
      "",
      "Eyob Tsige"
    ].join("\n"),
    categories: ["Education", "Wisdom", "Life"],
    meaning: "True greatness is measured by the magnitude of your dreams and the depth of your knowledge."
  },
  {
    amharic: `አንዳንድ ወዳጅነቶች ከተቸገረው ወገን ይልቅ የመፍትሄ ሰው የተባለውን ያሳምማሉ። አንዳንድ የድረሱልኝ ተማፅኖዎች ከተረጂው ይልቅ ተጠባቂውን ያሳምማሉ። አንዳንድ ማጣቶች ከተጎጂ ወዳጅ ችግር በላይ እኛን እረፍት ያሳጣሉ። አንዳንድ መጉደሎች ከወንድም ስቃይ በላይ የኛን ህሊና ያቆስላሉ። ብዙ ሰዎች የሚቀየሙን፣ የሚያዝኑብንና የሚወቅሱን እነሱ በሳሉት ለኛ ባላቸው ትልቅ ቦታና በኛ ላይ ባሳደሩት እምነት እንደምንደርስላቸው ርግጠኛ በመሆናቸው፣ እንዳለንና እንደሞላልን ስለሚያስቡ ነው። በጠበቁን ልክ ሳያገኙን፣ ሳንደርስላቸው ስንቀር ያዝኑብናል። ለሚወዱት ምንም ማድረግ አለመቻልን ያክል ህመም ይኖር ይሆን?\n\nኢዮብ ጽጌ`,
    categories: ["Life","Relationships","Wisdom"],
    meaning: "Sometimes, the inability to help a loved one in need hurts the one expected to help more than the one who is suffering. People often get disappointed in us because of the high expectations and trust they have placed in our capacity to assist them."
  },
  {
    amharic: `ከፍ አድርጎ ሰቶኝ ከፍ አድርጌ ያዝኩሽ . . .\nቅድስናሽ፣ ክብርሽና ምልጃሽ የሚያፅናናኝ የአምላኬ እናት ፍቅርሽ አይጉደልብኝ፣ በረከትሽ አይለየኝ። “ቅዱስ ኤፍሬም፤ ፍጹም ንጹህ በንጽህና የተወለድሽ (ያለ ኃጢአት) ጉድፍ የሌለብሽ ፤በሁሉም ጉስቁልና የሌለብሽ (no stain, nor any spot) እንደ ብሩህ መጎናጸፊያ እርሱን ለበስሽ፤ ያልጠወለገች አበባ፤ በእግዚአብሄር የተፈተለች ሀምራዊ፤ ከሁሉ ተለይታ ንጹህ የሆነች (እንከን አልባ) ሲል እንዳመሰገነሽ እኔም እንደ አባቶቼ አወድስሻለሁ። አንቺን ስወድሽ፣ ዘወትር ሳመሰግንሽ፣ የሚሰማኝ ሰላም፣ የማገኘው እረፍት ወደር የለውም። የቁስጥንጥንያው ፓትርያርክ ቅዱስ ፕሮክላስ (446 ዓ.ም) ሲጽፍ “ማርያም የአዲስ ትውልድ ዐይን ናት(Mary is the heavenly orb of a new creation)፤ የፍትህ ፀሀይ ሁሌም የሚወጣባት የኃጢአት ጨለማ ከነፍሷ የራቀላት (የጠፋላት) ብሏታል”፡፡ ይህ የገባኝ እውነት ያሳርፈኛል፣ ስምሽ ያፅናናኛል፣ የጉድለቴ መሙያ፣ የኑሮዬ ጣዕም ነሽና እወድሻለሁ። እንኳን አደረሰን።\n\nኢዮብ ጽጌ`,
    categories: ["Faith","Spirituality","Love"],
    meaning: "A heartfelt expression of love, devotion, and reverence for Saint Mary, highlighting the peace and comfort found in faith and the teachings of the early church fathers."
  },
  {
    amharic: `ንፁሕና ለእኔ የሌለበትን የአበርክቶን አቅም የተረዱ ብቻ የሕይወትን ጥልቅ ደስታ፣ የሕይወትን እውነተኛ እርካታ ያጣጥማሉ\n\nአንቶኒ ሮቢንስ`,
    english: `Only those who have learned the power of sincere and selfless contribution experience life's deepest joy: true fulfillment.`,
    categories: ["Life","Inspiration","Happiness"],
    attribution: "Anthony Robbins",
    meaning: "True happiness and fulfillment in life come from making pure, selfless contributions to others."
  },
  {
    amharic: `የአንድን ግለሰብ የፋይናንስ አጠቃቀም ችግር ከሙያ ጋር አያይዞ ማቅረቡ ተገቢ አይመስለኝም። እንዲህ አይነት ችግር በሁሉም ሙያ ዘርፍና በማናችንም ህይወት ሊከሰት ይችላል። መምህርነት የሰውን ልጅ ህይወት ጊዜ በማይሽረው ዕውቀት፣ ወቅት በማያደበዝዘው ክህሎት፣ ችግር በማያንበረክከው ብልሀት፣ ሰብዓዊነት በሚያላብስ የሞራል እሴት እያስዋበ ሀገር የሚገነባ፣ ትውልድ የሚያሻግር ከዕንቁ የከበረ ሙያ ነው። ወዶ መርጦና ፈቅዶ ለሚሰራበት በእያንዳንዱ ሰው አዕምሮና ህሊና ውስጥ ብርሀን እየለኮሰ በሚያፈራው ብቁ ዜጋ የመንፈስ እርካታ የሚጎናፀፍ፣ለሙያው ልዩ ፍቅርና ተገቢውን ክብር የሚሰጥ እንጂ የተነፈገውን የሙያውን ዋጋና ጥቅም እያብሰለሰለ የሚቆዝም አይደለም። "የኛ ሙሽራ ኩሪ ኩሪ፣ ወሰደሽ አስተማሪ" የተባለለት እንደነበረም አንዘንጋ።\nነፍሴ የወደደችውን ሙያ ከጥቅም ጋር አላወዳድረውም! ይህ መምህርም እውቀቱን እንዴት ወደ ገንዘብ መለወጥ እንዳለበት፣ የገንዘብ አጠቃቀሙን መፈተሽ እንደሚገባውና ሌሎች በዙሪያው የሚገኙ የተረጋጋ ህይወትን የሚመሩ ባልደረቦቹን ልምድ በመውሰድ ከመሸማቀቅ ነፃ ይውጣ። ዜናውን የሰራችሁ ሰዎች ግን አሉባልታና ወሬ ይዞ መምህራንን ክብር ለማሳጣት የሄዳችሁበት ርቀት አይመጥናችሁም። We teach to touch life forever!\n\nኢዮብ ጽጌ`,
    categories: ["Education","Wisdom","Respect"],
    meaning: "Teaching is an invaluable and noble profession that shapes generations. A teacher's personal financial struggles should not be used to degrade the profession. True educators find profound satisfaction in enlightening minds and should be respected, rather than undermined by gossip."
  },
  {
    amharic: `እንደ ፍቅር ያለ አስተማማኝ ጥላ የለም። በፍቅር መኖር እረፍት ይሰጣል። ማጣትን ያስረሳል። ፍቅር ያለው ባለው ነገር ይረካል ፣ባለው ነገር ሌሎችን ያገለግላል፡፡ኑሮዬ ይበቃኛልን ያውቃል። በፍቅር የሚኖር የትላንት ማንነቱን አይረሳም፣ ዋጋ የከፈሉለትን ባለውለታዎቹን ያከብራል እውቅናም ይሰጣል። በፍቅር የሚሰራ፣ በፍቅር የሚኖር የተባረከበትን በረከት ያያል። በፍቅር የሚኖር በፍቅር የሚሰራ፣ በፍቅር የሚመላለስ ለሌሎች የሚጠቅም፣ ሌሎችን የሚያነሳ ሌሎችን የሚያሻግር ስጦታዎች በእርሱ እንዳለ ያምናል፥ በሌሎች ላይ ዋጋን ለመጨመር ፣ ሌሎችን ለማነፅ ፣ ሌሎችን ለመገንባት ፣ ሌሎችን ለማፅናናት እና ለማፅናት ተግቶ ይሰራል፡፡  እንደፍቅር አስተማማኝ የድካም ማረፊያ የሚያስጠልል ጥላ የለም። በፍቅር እንኑር፣ በፍቅር እንስራ!!!!!!\n\nኢዮብ ጽጌ`,
    categories: ["Love","Wisdom","Life"],
    meaning: "There is no shelter as reliable as love. Living in love provides rest, brings contentment, and inspires selfless service to others. A person who lives and works in love is a blessing to others, constantly striving to uplift, build, and comfort those around them."
  },
  {
    amharic: `አንዳንዶች ራእይ "በፍሬ ውስጥ ዛፍን ማየት ነው” ይላሉ። ልክ ነው፤ ራእይ ያለው ሰው የዛሬውን ትንሽ ነገር አይቶ ተስፋ አይቈርጥም፤ በዛሬው ኢምንት ውስጥ የነገውን ትልቅ ያያል፤ በዛሬው ሰባራ ውስጥ የመጪውን ጊዜ ውበት ይመለከታል። በትንሽ ፍሬ ውስጥ የተሰወረውን ዛፍ በእምነት ያስተውላል!\n\nኢዮብ ጽጌ`,
    categories: ["Vision","Hope","Wisdom"],
    meaning: "Vision is often described as seeing a tree within a seed. A person with vision does not lose hope over today's small beginnings; instead, they see tomorrow's greatness in today's insignificance and perceive the hidden tree within a tiny seed by faith."
  },
  {
    amharic: `ባንቺ ልደት ደስታ ሆነ።\nማርያም የሚለው ስም ከኛ ሕይወት ጋር መቆራኘት ምክንያት ስላለው ነው፡፡ የጭንቅ አማላጅ ነችና ነፍሰ ጡር ልጅ ልትወልድ ስታምጥ “ማርያም! ማርያም!”፣ ስትወልድ “እንኳን ማርያም ማረችሽ፡፡” “ማርያም ጭንሽን ታሙቀው፡፡” “ማርያም በሽልም ታውጣሽ፡፡” ትባላለች፡፡ በአራስነት ወራቷም “የማርያም አራስ” ተብላ ድንግል ማርያም በአደራ ትሰጣለች፡፡ ሕጻናት ለብቻቸው ሲስቁ “ማርያም እያጫወተቻቸው ነው፡፡” ይባላል፡፡\nየመማፀኛ ከተማችን ናትና ሕጻናቱም አድገው ሲጫወቱ ማምለጫ ፍለጋ “የማርያም መንገድ ስጠኝ/ ስጪኝ፡፡” ይባባላሉ፡፡ አንድን ሰው አንዳች ነገር እንዲያደርግልን ሽተን ስንለምንም “እንደው ለእኔ እንደ ቆምህልኝ ማርያም ትቁምልህ” ብለን ስሟን ጠርተን እንማጸነዋለን፡፡ ሰማዩን ቀና ብለን ለኖኅ የተሰጠውን ውብ የቃል ኪዳን ምልክት ቀስተ ደመና ስናይም “የማርያም መቀነት”፣ ፈረስ የምትመስል በራሪ ፍጥረትንም “የማርያም ፈረስ” እንላለን፤ ወዘተ.፡፡\nስሟ ለአንደበታችን ማር ነው፣ ጠርተናት አናፍርም፣ አመስግነናት አንጠግብም። ፍቅሯ ልዩ ነው። ይህ ሁሉ የሆነው ግን የእምነታችንን መሰረት፣ እውነተኛ የጽድቅ መብልንና እውነተኛ የሕይወት መጠጥን የወለደችልን ኃጢኣታችን ከክርስቶስ እንዳያርቀን የምትተጋ፣ እውነተኛ የክርስቲያኖች ረዳት፣ ርኅርኅተ ኅሊና በመሆኗ ነው። አማላጃችን ናት።\nስለዚህ ማርያም ሆይ እንወድሻለን ከፍ ከፍም እናደርግሻለን። አንቺን እንዲህ የወደድንሽ ልጅሽንማ እንዴት አብዝተን እንወደው? የፍቅር እናት፣ የሰላም እናት፣ የብርሀን እናት ነሽና  ከመሪ እስከ ተመሪው፣ ከሊቅ እስከ ደቂቅ መለያየትን፣ ፀብንና ክርክርን እየዘራን የመንፈስ ፍሬ ማፍራት ተቸግረናልና ትሁት ልብን፣ አንድነትና ፍቅርን ያበዛልን ዘንድ ከልጅሽ ዘንድ አሳስቢ።\n\nግንቦት 1, 2016 ዓ.ም\nኢዮብ ጽጌ`,
    categories: ["Faith","Spirituality","Culture","Love"],
    meaning: "A deep cultural and spiritual reflection on how the name of Saint Mary is deeply intertwined with daily Ethiopian life, offering comfort in times of distress, joy in times of blessing, and constant intercession for peace and unity."
  },
  {
    amharic: `አንዳንዴ ህይወት ጨለምለም ሲልብህ፤ ውጥንቅጡ ሲበዛብህ፤ መፍትሄ ፈልገህ ስታጣ፤ የንጋት ኮከብ ሆነው ጭላንጭል ብርሀን ይዘው መጥተው፤ እምነትህንና ተስፋህን እንድትገልጠው ምክንያት የሆኑ ሰዎች ታያለህ። ያኔ ህይወት በእምነትና ተስፋ የምትረዝም እንቆቅልሽ እንደሆነች ያስተምሩሀል።\nአንዳንዴ ቸግሮህ ወይም ጨንቆህ ካቀረቀርክበት ሰው ፍለጋ ቀና ስትል፤ 'ሰው የሆነ ሰው' አጥተህ፤ በዙሪያህ የነበሩት “ሰው መሳይ አሻንጉሊቶች ነበሩ ማለት ነው” ብለህ በሰው ሁሉ ተስፋ ስትቆርጥ፤ ሰውን ሁሉ ስትረግም፣ ስትጠላና ስትሸሽ፤ ያልጠበቅከው ሰው ክንፍ የቀረውና ስጋ የለበሰ መልዐክ የሆነ ሰው፥ ድንገት በህይወትህ ተከስቶ፤ ከመከፋትህ፣ ከቁዘማህ፣ ከእምነተ-ቢስነትህ ፈልቅቆ ያወጣሀል። ያኔ ሰው ሰብሮ ሰው እንደሚጠግን ታምናለህ።\nበውሸትና በክፋታቸው አጥንት የሚሰብሩ፤ ህይወትን እንዲመር የሚያደርጉ ሰዎች ስታይ አለም የክፉዎች ነው ብለህ ለመወሰን ስታስብ የራሳቸው ህይወት ሳያሳሳቸው የሌሎች ሸክም በጫንቃቸው የተሸከሙ፤ የብዙዎች እንባ ያበሱ፤ ረሀብ ያስታገሱ የልብ ሀብታሞች ስታይ እይታህን ታስተካክላለህ።\nእምነታችንን ለቀጠሉ፣ ስብራታችንን ለጠገኑ፣ ተስፋችን በብርሀን ለለኮሱ፣ ነጋችንን ላሳመሩ፣ ከሁሉም ከሁሉም በላይ ደግሞ #በጎነት ተረት አለመሆኑን ላሳዪን፤ አልጫውን አለም ላጣፈጡ፤ መልካም ሰዎችና ፈርጦቻችን በጣም እናመሰግናለን።\n\nኢዮብ ጽጌ`,
    categories: ["Life","Hope","Kindness","Humanity"],
    meaning: "When life becomes incredibly dark, an unexpected kind soul often appears like a morning star to restore our hope. Just when we are about to give up on humanity due to the cruelty of some, the selfless actions and genuine goodness of others remind us that true kindness still exists. Humans can break us, but humans can also heal us."
  },
  {
    amharic: `ዘወትር እወድሻለሁ፣ አከብርሻለሁ፡፡\nነገሮች እንዳሰብኩት ሲከወኑ፣እንዳቀድኩት ሲሄዱ፣ የዘወትር ትጋቴ ውጤት ሲያስገኝ ከኔ ጋር ያለው የልጅሽ ክርስቶስ ሀይል አግዞኝ ነውና በፀሎቴ ከልጅሽ አሳስቢ የምልሽ፣ እለት እለት የማዋይሽ፣ በፍቅርሽ የኑሮ ጣዕምን የማገኝብሽ፣ ስምሽን ጠርቼ የምፅናናብሽ፣ በልቤ ያተምኩሽ፣ ከአንደበቴ የማለይሽ፣ የአምላኬን ፍቅር፣ ምህረትና ይቅርታውን የማገኝብሽ አማላጄ ሆይ ዘወትር እወድሻለሁ፣ አከብርሻለሁ፡፡ አንቺን እናቴ ብዬ ስማፀንሽ፣ማርያም ብዬ ስጠራሽ ድል ይቀርበኛል፣ መከራ ይርቅልኛል፣ ሸክሜ ይቀለኛል፣ አጣሁ ብዬ የማላዝነው አገኘሁ ብዬም የማልቦርቀው፣ ከፍ አልኩ ብዬ የማልታበየው ዝቅ አልኩ ብዬም የማላማርረው አንቺን እናቴ ብዬ በህይወቴ ስላስገባሁሽ ነው፡፡ እንደ ሁልጊዜውም በጊዜውም ያለጊዜውም እንደፀና ከተወደደ ልጅሽ ዘንድ አሳስቢ\n\nኢዮብ ጽጌ`,
    categories: ["Faith","Spirituality","Love"],
    meaning: "A heartfelt prayer of devotion and gratitude to Saint Mary. It expresses how calling upon her name brings peace, lightness to burdens, and a balanced perspective on life's successes and failures."
  },
  {
    amharic: `በህይወት ዘመንህ ድጋፍ የሆንክላቸው፣ እንባቸውን ያበስክላቸው፣ ሸክማቸውን ያቀለልክላቸው፣ ህመማቸውን የታመምክላቸው፣ ጥፋታቸውን የታገስክላቸው፣ በደልና ነውራቸውን የሸፈንክላቸው፣ መተላለፋቸውን የተውክላቸው፣ እንደ ዓይንህ ብሌን የጠበካቸው፣ እንደወንድም የተመካህባቸው፣ እንደእህት የታዘዝክላቸው፣ ደስታቸውን የምትመኝላቸው፣ ለእድገታቸው የጣርክላቸው ሰዎች ለውድቀታቸው ተጠያቂ፣ ለመንገዳቸው እንቅፋት አድርገው ሲቆጥሩህ እንደማየት መተላለፍ ልብን የሚሰብር ምን ነገር ይኖራል!! ይህም ያልፋል!!!!\nከዓለማየሁ ገላጋይ ልዋስና እኔ ግን "መጠጊያዬ እምነት ነው መተማመኛዬ ፍቅር ነው ዋስትናዬ ደግነት ነው ከዚች ውልፍት ያልኩ ቀን እንደ እርጥብ ጭቃ እንደዚሁ እንድፈርስ አውቃለሁ"\n\nኢዮብ ጽጌ`,
    categories: ["Life","Betrayal","Wisdom"],
    meaning: "Nothing breaks the heart more than being blamed and seen as an obstacle by the very people you supported, protected, and treated as family. Yet, this too shall pass. As Alemayehu Gelagay says, 'My refuge is faith, my confidence is love, my guarantee is kindness; the day I stray from these, I know I will crumble like wet mud.'"
  },
  {
    amharic: `በሰው ደስታ ደስ የሚላቸው ድንቅ ሰዎች አሉ:: ሳትፅፍ ያነቡሀል፣ ሳትናገር ይረዱሀል፣ ውለታን ሳይሹ መልካም ይውሉልሀል በእነዚህ ሰዎች ውስጥ መኖር ህይወትህን ውብ ያደርገዋል።\n\nኢዮብ ጽጌ`,
    categories: ["Life","Kindness","Wisdom"],
    meaning: "There are wonderful people who rejoice in the happiness of others. They read you before you write, understand you before you speak, and do good without expecting anything in return. Living among such people makes life beautiful."
  },
  {
    amharic: `ሁን ተነቃቅተናል\nበብርሀን ተያይተናል የሚል ድንቅ መልዕክት ከዘሪቱ ከበደ ውሸታም የሚለው ሙዚቃ አስታወስኩና ውስጤን ቢረብሸኝ እየሆነ ያለው መሻሻል የማይታይበት ከአንዱ ስህተት ትምህርት ተወስዶ የማይታረምበት እየገደሉ የማይመጥኑና ከእውነት የራቁ የመግለጫ ጋጋታ ብቻ ስለማይበጀን . . .  እስቲ ልጠይቅ. . .  ግን ለምን?   የማይደፈሩ የእምነት ቅጥሮችን ክብር ስለምን ተዳፈራችሁ? ከሚያኗኑር እውነት ይልቅ የሚያቀባብር ውሸት መረጣችሁ? መገዳደል መፍትሄ ላይሆን ትዕግስትና ሆደሰፊነት ራቃችሁ? ስለምን የሰጣችሁንን ተስፋ አርቃችሁ ሰቀላችሁት?\nህልሜን ባካፍልሽ ብከፍትልሽ ውስጤን\nጥበብ አለሽ ብዬ ብሰጥሽ ጆሮዬን\nጥበብሽ ክፉ ነው መርዘኛ ነው ገዳይ\nየስግብግብነት ጥሎ ማለፍ ጉዳይ\nእኔ ብቻ ልቅደም እሻለው መቅናት\nበምኞት መኖርን መቃዠት መጎምጀት\nውሸታም\nአንቺ ውሸታም\nቅዠታም\nአታላይ ነሽ በጣም\nአስመሳይ ነሽ በጣም\nአሁን ተነቃቅተናል\nበብርሀን ተያይተናል!!!!!!!\n\nኢዮብ ጽጌ (Lyrics by Zeritu Kebede)`,
    categories: ["Truth","Society","Reflection","Music"],
    meaning: "A powerful reflection inspired by Zeritu Kebede's song 'Wushetam' (Liar). It expresses deep frustration with a society that repeats its mistakes, chooses comforting lies over life-giving truth, and resorts to violence rather than patience. The lyrics declare an awakening ('Now we are awake, we see each other in the light'), rejecting deceit and greed."
  },
  {
    amharic: `በፍቅር መንገድ እንጓዝ።\nፍቅር ከሁሉም የሚበልጥ መንገድ ነው፡፡ ፍቅር ከስጦታዎች ሁሉ ይበልጣል፡፡ ፍቅር ከሃብት እና ንብረት ሁሉ ይበልጣል፡፡ ፍቅር በመላእክት ልሳን ከመናገር በላይ የከበረ ነው። ፍቅር ከዕውቀትና ከልግሥና ሁሉ ይበልጣል።በፍቅር መንገድ በነፃነት ለሌሎች መልካምን ለማሰብ እንችላለን፡፡ በፍቅር መንገድ ለሌሎች መልካምን መናገር ማንም አይከልክለንም፡፡ በፍቅር አውራ ጎዳና ለሌሎች መልካምን ለማድረግ የሚከለክለን ህግ የለም፡፡ ስለሰው ለምን መልካም አሰብክ ብሎ የሚቀጣ ህግ የለም፡፡ ስለሰው ለምንም መልካም ተናገርክ ብሎ የሚቆጣ አምላክ የለም፡፡ ለሰው ለምን መልካም አደረግክ ብሎ የሚከስ ሰው የለም፡፡ ከሌላው ሰው መልስን ሳይጠብቅ መልካምን የሚያስብ የሚናገርና የሚያደርግ ሰው ከህይወት አላማ የሚያግደው ምንም ነገር የለም፡፡\nፍቅር ከህግም በላይ ነው።ፍቅር ራሱ የህግ ፍፃሜ ነው፡፡ የትኛውም ህግ የሚለካው በፍቅር ህግ ነው፡፡ ከሁሉ የሚበልጠውን የፍቅር መንገድን ከያዛችሁ ከአላማችሁና ከግባችሁ የሚያዘገያችሁና የሚያስቆማችሁ ማንም ነገር አይኖርም፡፡ የፍቅር ህይወት ከፍ ያለ ህይወት ነው፡፡ ንስርን የመሬት ሁኔታ እንደማይዘውና ንፋሱ በበረታ ቁጥር ከፍ እንዲል እንደሚያደርገው ሁሉ በፍቅር የሚኖር ሰው ከነገሮች ሁሉ በላይ ከፍ ያለ ህይወት ነው የሚኖረው፡፡ እንዲህም ከሆነ፥ እምነት ተስፋ ፍቅር እነዚህ ሦስቱ ጸንተው ይኖራሉ፤ ከእነዚህም የሚበልጠው ፍቅር ነው። 1ኛ ቆሮንቶስ 13፡13\nየፍቅር፣ የመተሳሰብ፣ የረድኤትና የበረከት ፆም ይሁንልን።\n\nኢዮብ ጽጌ`,
    categories: ["Love","Faith","Wisdom"],
    meaning: "A profound message on the supremacy of love over all other gifts, wealth, laws, and achievements. Living a life rooted in unconditional love lifts a person above life's obstacles, much like an eagle soaring higher against strong winds. Faith, hope, and love remain, but the greatest of these is love (1 Corinthians 13:13)."
  },
  {
    amharic: `የግል መግለጫ!!!!!\nበሴራና በብልጠት ያይደለ በስራና በብስልት ትመሩን ዘንድ በአክብሮት እጠይቃለሁ!!!!!\nየህግ የበላይነትን ከማክበርና ከማስከበር ይልቅ ስልጣንን እንደ ግል ርስታችሁ በመጠቀም ሀይማኖታዊ የታሪክ እጥፋት ለመፍጠር በብልጠትና በሴራ ከመዳከር ወደንና ፈቅድን ያስረከብናችሁን ሀገር በስራና በብስለት ትመሩ ዘንድ በአክብሮት እጠይቃለሁ። በዘመኔ ፖለቲካዊ አቋም ኖሮኝ አያውቅም፣ ከመፅሀፍት ካነበብኩት፣ በዘመኔ ከኖርኩት፣ በሀገርም በውጬም ከተማርኩት፣ ከልምድ ባካበትኩት ትዝብቴ የሀገራችን ፖለቲካ የደም ታሪክ ነው። ማነው የሚያስቆመው? መቼ ነው ከበቀልና ከጥላቻ ነፃ የምንሆነው? እንዴትስ ነው ቁስሉ የሚሽረው? ማንስ ነው የሚያክመው? እስቲ በተሰጣችሁ እድል ወርቃማ ታሪክ ፃፉ፣ ለበዳይ ፍቅርን ሰጥታችሁ በምህረትና በይቅርታ በእንባም ጭምር አስታርቁ፣ የተበደለውን በልማት ካሱት፣ እንደ ኤሳውና ያዕቆብ በማህፀን መገፋፋቱ ያቁም። በሴራና በብልጠት ያይደለ በስራና በብስልት ምሩን እኛም ጥሩ ተከታይ እንሁናችሁ። በወቅታዊ ጉዳይ ላይ የበሰለ እርምት እንደምትወስዱ ተስፋ አደርጋለሁ። ፈጣሪ በህዝቦቿ ልብ ውስጥ ያለችውን የሁላችን የጋራ ሀገር እናት ኢትዮጵያን ይጠብቅልን ይባርክልን።\n\nየካቲት 1, 2015\nኢዮብ ጽጌ ተረፈ`,
    categories: ["Society","Leadership","Reflection","Patriotism"],
    meaning: "A personal appeal to leaders, urging them to govern with maturity, hard work, and justice rather than through conspiracy, manipulation, or revenge. It calls for healing the nation's historical wounds with forgiveness, unity, and development, ending the cycles of conflict."
  },
  {
    amharic: `አንባቢ በመሆኔ አልመፃደቅም። ስላነበብኩኝም አልፀድቅም። ያነበብኩትን መልካም ህይወት እኖረው ዘንድ ፤ ያነበብኩትን መልካም መንገድ እጓዝበት ዘንድ ፤ ያነበብኩትን መልካም ባህሪንም አንፀባርቀው ዘንድፈጣሪን እማፀነዋለሁኝ። የሚያፀድቀው ያነበብከው መልካም ነገር ሳይሆን ፣ አንብበህ የኖርከው መልካምነት ነው። ያነበብነው መልካምነት በህይወታችን ውስጥ ሲያብብ ነው ንባብ የሚያድነው።ጥሌ ስለጎበኘኸን እጅግ ተደስተናል፡፡ ያንተም ህልም እውን ይሆን ዘንድ የምንችለውን እናግዛለን፡፡ በርታ!!!!\n\nኢዮብ ጽጌ`,
    categories: ["Reading","Wisdom","Life"],
    meaning: "Reading alone does not make one righteous; it is the application of the good things we read into our daily lives that brings true transformation. The value of reading blossoms when the goodness we read about becomes the goodness we live."
  },
  {
    amharic: `መልካም አድርግና እርሳው...\nስላደርግኸው ስለዚህ ነገር ማንኛውንም ዓይነት ውዳሴም ሆነ ሙገሳ አትሻ። መልካም ያደረግህለት ሰው አንተ እንዳደረግህለት ለአንተ መልካም የሆነውን አጸፋ እንዲመልስልህ ወይም አንተ አንደተንከባከብከው እርሱም እንዲንከባከብህ አትጠብቅ።\nመልካም ስታደርግ በምላሹ መልካም ዋጋ አገኛለሁ ብለህ በመጠበቅ ላለመሆኑ እርግጠኛ ሁን! መልካም የምታደርገው መልካም ማድርግን ስለምትወድ ወይም መልካም ከማድረግ መከልከል ስለማትችል ለመሆኑ እርግጠኛ ሁን። መልካም መሆን በውስጥህ ያለ ጠባይ ይሁን። መልካም ጠባይ እንደ መተንፈስ ምንም ዓይነት ጥረት የማይጠይቅ ግብታዊ ነገር ይሁን።\nእንዲህ ያለውን ነገር የምትረሳው ከሆነ እግዚአብሔር በዚህ ምድርም ሆነ በሚመጣው ዓለም ያስታውስሃል። መልካም ማድረግህን የምታስታውሰውና በውስጥህ ይዘኸው የምትቆይ ከሆነ ግን ታጣዋለህ።\n\nከብጹእ ወቅዱስ አቡነ ሽኖዳ`,
    categories: ["Kindness","Faith","Wisdom","Selflessness"],
    attribution: "H.H. Pope Shenouda III",
    meaning: "Do good and forget it. Do not expect praise or reciprocity. Goodness should be as natural and effortless as breathing. If you forget your good deeds, God will remember them in this world and the next, but if you hold onto the memory of your own goodness, you lose its reward."
  },
  {
    amharic: `"አንተ ልትበላው ያልፈለግኸው እንጀራ የተራቡት ሰዎች እንጀራ ነው። በቁም ሳጥንህ ውስጥ ሰቅለህ የተውከው ልብስ ዕርቃኑን የሆነው ሰው ልብስ ነው። የማታደርጋቸው ጫማዎችህ ባዶ እግሩን የሚሔድ ሰው ጫማዎች ናቸው። የቆለፍክበት ገንዘብ የደሃው ገንዘብ ነው። የማትፈጽማቸው የቸርነት ሥራዎች ሁሉ ኢፍትሐዊ ድርጊቶችህ ናቸው"\n\n(ቅዱስ ባስልዮስ)`,
    categories: ["Charity","Faith","Justice"],
    attribution: "Saint Basil",
    meaning: "The bread you don't eat belongs to the hungry, the clothes hanging unused in your closet belong to the naked, the shoes you don't wear belong to the barefoot, and the money you hoard belongs to the poor. Every act of charity you fail to perform is an injustice."
  },
  {
    amharic: `"ደግ ልብ ከውብ ፊት ይበልጣል!"\nለሰዎች የምንውለው ውለታ በምን በኩል ተመልሶ ወደ ራሳችን እንደሚመጣ አናውቅምና ለፍጥረታት ሁሉ ፍፁም ደግ ልብ ይኑረን። ደግነት ከባለፀጋነት ይበልጣል። የዛሬ ደግነታችን ነገ ላይ የከበረ ዋጋን ይቸረናል። የመልካምነት ፍሬ አይጠወልግም። ደግነታችን ቀን ቆጥሮ ይከፍለናል! የደግነት ፍሬ አይመክንም! ለደግነት የሚያመነታ ልብ የጨካኝ ነፍስ ባለቤት ነው። ደግነት አይሰሰትም። ደግነት የንፍገት ባላንጣ ነው። ደግነት ሁሌ ለሁሉ የሚሰጥ የበጎነት መገለጫ ነው።\n\nኢዮብ ጽጌ`,
    categories: ["Kindness","Wisdom","Life"],
    meaning: "\"A kind heart is better than a beautiful face!\" We never know how our acts of kindness will return to us, so we should maintain a truly kind heart toward all creation. Kindness is greater than wealth. Today's kindness will yield a precious reward tomorrow; the fruit of goodness never withers."
  },
  {
    amharic: `“ሁላችንም የዚህችን አለም ድንቁርና እና ድህነት ችጋር እና በሽታ እንዲወገዱ እንፈልጋለን ሁላችንም የሰው ዘር የኒዩክሌር ጦርነት እንዳይደርስበት እንፈልጋለን፡፡ ዛሬ አለምን የገጠማት ችግር ከዛሬ በፊት ከደረሰባት ችግር እጅግ የከበደ ነው የሰው ልጅ ካለበት ችግር ለመውጣት የታሪክን ገፅ ያገላብጣል ግን መፍትሄውን አላገኘም፡፡\nወደ ራሳችን መመልከት እና ራሳችንን መመርመር አለብን ከአሁን ቀደም ያልነበረውን መሆን አለብን ከአሁን ቀደም ከነበረው ይልቅ ደፋር ፣ብርቱ፣ መንፈሰ ጠንካራ፣ ልበ ሰፊ፣ አርቆ አስተዋይ ሆነን መገኘት አለብን፡፡ ጥቃትን ጥቅምን የተወ ለአንድ መንግስት ሳይሆን ታማኝነቱ ለመላው የሰው ልጅ ያደረገ አዲስ ዘር መሆን አለብን፡፡”\nይህ ነው ታላቁ ፈተና ከጥፋት እንድንድን ከተፈለገ የእግዚአብሄርን ህግ ተከትለን አብረን ተባብረን የተቻለንን እና ተቻችለን መኖር አለብን ለመኖር ከፈለግን በጊዜያችን ከገጠመን ከባድ ችግር ለመዳን ቁልፉን የት ነው የምናገኘው ከሁሉ አስቀድሞ የሰውን ልጅ ከእንስሳ አስበልጦ የማሰብ ሀይል ወደ ሰጠው ፈጣሪያችን መዞር እና መመልከት አለብን በአምሳሉ የፈጠረው እርሱን እንዲያጠፋ እደማይተወው ማመን አለብን ከዛም ወደ ራሳችን መመልከት እና ራሳችንን መመርመር አለብን::`,
    english: `The problems we face today are equally unheard of. They have no counterpart in human experience. Men search the pages of history for solutions, precedents, but in the end there are none. This, so, is the final challenge. Where should we seek our survival, the answers to the questions we've never had before?\nWe must look first to Almighty God, who has raised man above the animals and endowed with intelligence and reason. We must put our faith in him, so that He will not abandon us or allow us to destroy the human race that He created in His image. And we must look within ourselves, in the depth of our souls.\nWe must become something we have never been and for which our education and experience and environment have poorly prepared us. We must be bigger than we've ever been: bravest, bigger in spirit and clearer in perspective. We must be members of a new race, overcoming small prejudices, because of our ultimate loyalty, no to stocks, but to our fellow men within the human community”.`,
    categories: ["History","Leadership","Wisdom","Humanity"],
    attribution: "H.I.M Haile Selassie I (1963 UN Speech)",
    meaning: "A historic address calling for global unity, reliance on God, and a profound inner transformation. To survive unprecedented global challenges, humanity must become braver, broader in spirit, and loyal not merely to individual nations, but to the entire human race."
  },
  {
    amharic: `‹‹በማንኛውም ነገር መልካም መሆንን ተመኝ፤ የልብህን መሻት የሚያውቀው አምላክ ምላሹን ይሰጥሃል››\n\nከብፁዕ አቡነ ናትናኤል አስተምህሮ ያገኘሁት ሀሳብ ነው፡፡`,
    categories: ["Wisdom","Faith","Kindness"],
    attribution: "Abune Natnael",
    meaning: "Wish to be good in everything; the God who knows the desires of your heart will give you the answer."
  },
  {
    amharic: `ነፍሳችን ለወደደችህ በልደትህ መድሀኒት ለሆንከን!\nየተወደድክ ጌታችን መድሀኒታችን ኢየሱስ ክርስቶስ ሆይ በይቅርታህና በምህረትህ ብዛት የዛሬውን ቀን ስላሳየኸን እናመሰግንሀለን፡፡ ጌታችንና መድሀኒታችን ሆይ የመዳናችን ስጦታ ነህና ሁላችን ካለንበት ህመም ከስቃያችን ከደዌ ከእስራታችን ፍታን፤ ሸለቋችንን ሙላልን፤ ጓዳችንን ፈውስልን፣ እንደ ዮርዳኖስ የሚያገሳውን አላሳልፍ ያለንን የመከራና የጭንቁን ቀን የተገዳደረንን የመጨረሻውን ትግል በስምህ ሀይል በደምህ ጉልበት ድል አድርገህ የጠላትን ሴራ እንድታፈራርሰው እንማፀንሀለን፡፡ በመውጣት በመግባታችን፣ በስራ በኑሮአችን አንተን እንድናንፀባርቅ አንተን ለዓለም እንድናሳይ የክብርህ መገለጫዎች እንድታረገን እንለምንሀለን፡፡ በፍቅር ትከሻ ያሳረፍከን፣ በልብህ ርስት የሰጠኸን፣ በሚያፅናና ቃል የተናገርከን፣የህይወትን ውሀ ያጠጣኸን መልካሙ ምንጭ፣እንደወጣን እንደተበተንን እንዳንቀር የተበተንነውን የሰበሰብከን መልካሙ እረኛችን ኢየሱስ ሆይ ለመንገዳችን መብራት ለቤታችን ራስ ሆነህ አኑረኸናልና እናመሰግናለን፡፡\nበእውነት እንወድህ ዘንድ አንተን መውደድን፤ በእውነት እናምንህ ዘንድ አንተን ማመንን ላንተም እንገዛ ዘንድ ፍቅርህን በልባችን አኑር፡፡ ቃልህ የሚያበረታን ጌታ፤ ስለተፈፀመ ተስፋችን፤ ስለሰመረ ፀሎታችን፣ በፊትህ ስላረገ መሰዋዕታችን ፤ ስለተቀበልከው ፀሎታችን እናመሰግንሀለን፡፡ ብቻችንን እንወጣ ዘንድ ያልተውከን በመውጣታችንም የተከተልከን፣ ትግላችንን የታገልክልን፣ ሞታችንን የሞትክልን፣ አንተ ነህና እንካን ተሰጠኸን፡፡ አምላክ ስትሆን እኛን ለማዳን እንካንም ሰው ሆነህ ሰው አረከን፡፡\nየተወደድክ አምላካችን ሆይ አንተ ትረዳናለህ ብለን ተስፋ አድርገን የተከተልንህን እየረዳህ፣ ስንደክም እያበረታህ ስንወድቅ እያቆምከን ይኸው ዛሬም ድረስ እንደቸርነትህ እጃችንን በአፋችን እያስጫንክ አፋችንን በሳቅ እየሞላህ እንባችንን እያበስክ ታኖረናለህ፡፡የፊትህን ብርሀን የምንፈልግ፣ ከእጆችህ በረከትን ለመጥገብ በክንድህም ረድኤት ለመታገዝ አንተን ተስፋ የምናደርግና ምህረትህን የምንናፍቅ ነንና ባሪያዎችህን፣ኢትዮጵያውያንን አስበን፡፡ ጌታ ሆይ ያልጠፋነው አቅም ስላለን፣ ጉልበት ስላለን፣ ስልጣን ስላለን አይደለም፣ ያልተሰበርነው አጥር ስለሰራን፣ ጠባቂ ስላቆምን አይደለም፣ ቅጥር ድንበር ስላበጀንም አይደለም፣ አንተ ጠባቂያችን፣ አንተ ትጉህ የማታንቀላፋ እረኛ ስለሆንከን ነው፡፡ አቤቱ አሁን ይቅር እንድትለን የጉብኝትም ዘመን እንዲሆንልን በየስፍራው ስለሚወድቁ ወገኖቻችን፣ ስለሚፈሰው የንፁሀን ደም፣ ስለሚጨነቁ ድሆች፣ ፍርድ ስላጡ መበለቶች ሁሉ ፍርድህ ከሰማይ እንዲሆን እንጠይቅሀለን፡፡ ልባችንን ባንተ ፍቅር፤ በመንፈስህ ሀይል እንድትገዛ፤ እነዚያን የሞት የመጠፋፋት የመለያየት ጊዜያት በቸርነትህ አድሰህ የካሳ ዘመን ለባሪያዎችህ እዘዝልን፡፡ ቅዱስ አባታችን ሆይ ጨለማ የማያሸንፍህ እውነተኛ የህይወት ብርሀን ነህና የጋረደንን የጥል ግድግዳ አፍርስልን፤ የመፅናናት አምላክ ሆይ በተከፋንበት፣ባዘንበት፤በተጎዳንበት ጉዳይ ሁሉ ጣልቃ ገብተህ የተሻለውን የተወደደውን ቀን አምጣልን፡፡\nነፍሳችን የወደደችህ ክርስቶስ ሆይ ዛሬ በመጠቅለያ ተጠቅልለህ በእናትህ በቅድስት ድንግል ማርያም እጅ ታቅፈህ ወደዚች ምድር መጥተሀል፤ አንተን በታላቅ ደስታ ተቀብለንሀልና በዚህች በተወደደች ቀን ልመናችንን ስማን፤ የዘላለም አምላክ ሆይ አንተ የንጉሶች ንጉስ የጌቶችም ጌታ የዓለም ሁሉ መድሀኒት ነህና ባስጨነቀን ነገር ሁሉ ላይ ሾመንሀል፤ አንደበታችንን ለምስጋና ክፈት፣ እግሮቻችን ለፀሎት አበርታ፣ እጆችችንን ለጭብጨባ አዘጋጅ፣ የሀዘናችን እንጉርጉሮ ያብቃ፣ እንዳንታመም አድርገህ ፈውሰን፣ እንዳንወድቅ አድርገህ አቁመን፣ አማኑኤል ሆይ በይቅርታ ደግፈህ በደምህ አንፅተህ በቅድስና እንኖር ዘንድ በአማኑኤል ስምህ፣በፈሰሰው ደምህ፣ በተወጋው ጎንህ፣ በተቸነከረው እጅና እግርህ፣ በተገረፈው አካልህ ደምግባት ባጣው መልክህ በእንተ ማርያም ስለእናትህ ብለህ የሰጠኸንን ዘመን ባርክልን፡\n\nኢዮብ ጽጌ`,
    categories: ["Faith","Prayer","Hope","Patriotism"],
    meaning: "A deeply moving and extensive prayer directed to Jesus Christ. It expresses profound gratitude for His birth, salvation, and constant care as the Good Shepherd. The prayer asks for healing and liberation from pain, and powerfully intercedes for Ethiopia, begging God to judge justly, end the suffering and bloodshed of the innocent, tear down walls of division, and bring an era of restoration, light, and comfort."
  },
  {
    amharic: `ስርዓት ይለወጣል: መሪ ይቀየራል: ግንባር ንቅናቄ ፓርቲ ይመሰረታል: ርዕዮተ ዓለም ይተዋወቃል: በዚህ ሂደት ውስጥ ሀገርንና ህዝቦቿን ታፍረውና ተከብረው ይቆዩ ዘንድ በፅናት ዘመናትን የሚሻገር የሀገር አለኝታ ወታደር ነው::\nለዚህች ድንቅና ውብ ሀገር ለሚከፍለው ዋጋ ለሚውልላት ምትክ አልባ ውለታ ትላንትም ለነበሩት ዛሬም ላሉት ነገም ለሚኖሩት ሁሉ ከሀገሬ ወታደር ጎን በተግባር እቆማለሁ:: በተሰማሩበት ሞያ : በተሰጣቸው ሀላፊነት: በዜግነታቸው ለህዝባቸው የአቅማቸውን ለሚያደርጉ ቅን አገልጋዮች ክብር እሰጣለሁ:: ከምንም በፊት ግን ንቃተህሊናው የዳበረ ማህበረሰብ ለመፍጠር ማንበብ ይቅደም::\n\nኢዮብ ጽጌ`,
    categories: ["Patriotism","Society","Reading","Leadership"],
    meaning: "Systems change, leaders come and go, and ideologies shift, but the soldier remains the enduring shield of the nation. I stand with the soldiers who pay an irreplaceable price for this beautiful country. I respect all sincere civil servants. However, above all, building a conscious society requires reading to come first."
  },
  {
    amharic: `አሮጌው አልፋል፡፡ 2014ዓ.ም በአዲስ ተስፋ ተሞልተን በብቃትና በአቅም የምንገለጥበት፤ በአሸናፊ ሀሳብ የምንገዛበት ወደህልማችንና ወደአሰብነው ከፍታ የምንደርስበት በተግባር የመከናወን ዓመት ይሁንልን፡፡ ሰማይ መልቲሚዲያ የአዲስ አመት የበዓል ፕሮግራሙን በደቡብ ቴሌቪዥን ዛሬ ከ7፡00 – 8፡30 እንዲከታተሉ በአክብሮት ጋብዞዎታል፡፡ በጋራ ወደ አሰብነው ከፍታ ጉዞዋችንን በአጋርነት እንቀጥላለን፡፡\n\nኢዮብ ጽጌ`,
    categories: ["Life","Hope","Work","Announcements"],
    meaning: "A New Year message (2014 E.C.) declaring that the old has passed. Wishing a year filled with new hope, capability, winning ideas, and practical achievements to reach new heights. Accompanied by an invitation to watch Semay Multimedia's holiday program on South TV."
  },
  {
    amharic: `ከመልካምነት የምናተርፈው ሌሎችን የሚታደግ ህይወት ኖረን በደማቅ ቀለም የሚፃፍ ህያውነትን ነው::\n\nኢዮብ ጽጌ`,
    categories: ["Kindness","Life","Wisdom"],
    meaning: "What we gain from goodness is a living legacy written in bright colors, achieved by living a life that saves and uplifts others."
  },
  {
    amharic: `"ምቀኝነት ከአቅም ማነስ የሚመነጭ የአእምሮ ድህነት ነዉ።"\n\nኢዮብ ጽጌ`,
    categories: ["Wisdom","Life","Character"],
    meaning: "Envy is a mental poverty that stems from a lack of personal capacity."
  },
  {
    amharic: `አርበኝነት ራሱ በእምነት ሀይል የተከናወነ የድል አድራጊነትና የአሸናፊነት ስነልቦና ነው፡፡\nበሁኔታዎች ጽኑ እምነት ሲኖርህ ለመስዋትነት ዝግጁ ትሆናለህ፡፡ አርበኞች ለሀገራቸው እኔ ልሙት ብለው በወኔ ተስፋን ሰንቀው ፤ በእምነት ሀይል ተሞልተው አካላቸውን ቆርሰው፣ አጥንታቸውን ከስክሰው፣ ደማቸውን አፍሰው ይህችን ሀገር አቆይተውልናል፡፡ ዛሬም የኛ ትውልድ ብዙ የሚረብሹ፣ የሚከፋፍሉ፣ የሚያለያዩ፣ አንድነታችንን እና ህብረታችንን የሚፈታተኑ አስጨናቂ ሁኔታዎች ቢገጥሙንም ሀገራችን ለሁላችን የምትበቃና የምትመች እንደምትሆን በእምነት ሀይል ተሞልተን የበኩላችንን ድርሻ በመወጣት ከሚያስጨንቀን ነገር በላይ እንሁን!!!\n\nኢዮብ ጽጌ`,
    categories: ["Patriotism","Hope","Unity","Sacrifice"],
    meaning: "Patriotism is a winning psychology driven by the power of faith. Our forefathers sacrificed their flesh, bones, and blood to preserve this nation. Today, despite divisive and troubling times, our generation must also be filled with faith, play our part, and rise above our challenges, knowing this country is enough for all of us."
  },
  {
    amharic: `"ፍርሀትህን ስታሸንፍ ሽሽትህን ስታቆም ነው መለወጥ የምትጀምረው ማንነትህንም የሚሸፍንልህ ጠንካራ አጥሮች ተነስተው ተቀርቅረህ ከተወተፍክበት የልጅነት ምኞትህና የእሹሩሩ በሉኝ ጎሬህ ስትወጣ ነው እድገትም ለውጥም ያለው\nየሌለህን ለመስጠትና ባልደረስህበት ደረጃ ሌሎችን ለማድረስ መፍጨርጨርህን አቁመህ የአስተሳሰብና የልቦና ለውጡ ላንተው ይሁንልህ ወዳጄ"\n\n( የተቆለፈበት ቁልፍ )`,
    categories: ["Growth","Change","Wisdom"],
    attribution: "Yetekolefebet Kulf (የተቆለፈበት ቁልፍ)",
    meaning: "True change begins when you conquer your fears and stop running away. Growth happens when you break out of your comfort zone and childhood illusions. Stop trying to give what you don't have or taking others to a level you haven't reached; instead, focus on transforming your own mindset and heart."
  },
  {
    amharic: `ማርቲን ሉተር ኪንግ“I have been to a mountaintop” ከተሰኘው ንግግሩ ላይ እንኳንም አላስነጠስኩ ብሎ ነበር።\nአንድ ቀን አንዲት ሴት ወደ ማርቲን ሉተር ተጠግታ “ማርቲን ሉተር ኪንግ አንተ ነህ?” ብላ ጠየቀችው! “አዎ ነኝ!” እንዳላት ደረቱ ላይ ጩቤ ሰክታበት ሮጠች! ሆስፒታል ሲደርስ በተደረገለት ምርመራ የ “X ray” ምስሉ የሚያሳየው ደረቱ ላይ የተሰካው ጩቤ ልቡ ላይ ሊደርስ ትንሽ እንደቀረው ነው! ትንሽ ቢጠጋ ኖሮ እስትንፋሱ ትቋረጥ ነበር!\n“….በንጋታው “New York Times” ጋዜጣ በፊት ገፁ ይዞት የወጣው ዘገባ ላይ “ማርቲን ሉተር ኪንግ በዛች ቅፅፈት አስነጥሶ ቢሆን ኖር ይሞት ነበር! ጩቤው ልቡን ለማግኘት ቅንጣት ታክል ነበር የቀረው!” የሚል ነበር።\n“…ቀዶ ጥገና ተደርጎልት ጩቤው ከደረቱ ከወጣ በኃላ ከተለያዩ ዓለማት በብዙ ሺህ የሚቆጠሩ የማፅናኛ እና የእንኳን አተረፈህ ደብዳቤዎች ተላኩለት! ከነዛ ሁሉ ደብዳቤዎች ግን የማይረሳው አንዱን ብቻ ነው!\nእንዲህም ይላል “… ዶክተር ማርቲን ሉተር ኪንግ! እኔ ገና የ 9 አመት ልጅ ነኝ! የቆዳ ቀለሜ ደግሞ ነጭ ነው! አንድ ነገር ልልህ እፈልጋለሁ! ስላላስነጠስክ ደስ ብሎኛል!…” የሚል ነበር!\nሉተርም በንግግሩ እንዲህ አለ “…እኔም የምላችሁ ይሄንን ነው! ባለማስነጠሴ ደስተኛ ነኝ! ምክንያቱም ባስነጥስ ኖሮ በ 1960 ጥቁሮች በተከለከሉባቸው ሬስቶራንቶች ገብተን ቡና በማዘዝ እኩል ከነጮች መስተናገድ እንድንችል ዘመቻ አናደርግም ነበር!\nበ 1961 “Freedom Riders” የተሰኘውን ቡድን አቋቁመን ነጮች እና ጥቁሮችን የሚለየውን አግላይ የትራንስፖርት መዋቅር ለመቃወም የተከለከልንባቸው ባሶች ውስጥ በመግባት አግላይነትን አንፋለምም ነበር!\nእውነትም ባስነጥስ ኖሮ ይህንን ማየት አልችልም ነበር! አስነጥሼ ቢሆን ኖሮ በ 1963 “ህልም አለኝ” የሚለውን ታሪካዊ ንግግር ማድረግ ባልቻልኩ ነበር! እውነትም ያን ቀን አስነጥሼ ቢሆን ኖሮ እነዛን ለጥቁሮች ነፃነት የታገልናቸውና ፍሬ ያፈሩ መራራ ትግሎችን ማየት አልችልም ነበር! ስላላስነጠስኩኝ እውነትም ደስ ይለኛል!….\nዛሬም ትችትና ሹፈቱን ትተን ወገኖቻችንን በማንቃት በመረዳዳት ራሳችንን በመጠበቅ የመጣብንን መከራ አልፈን እንኳንም አልጨበጥኩ፣ እንኳንም የተባልኩትን አደረኩ፣ እንኳንም ታጠብኩ፣ እንኳንም ተጠርጣሪዎችን ወደ ህክምና ወሰድኩ እንዲተርፉም የበኩሌን ድርሻ ተወጣሁ ለማለት ያብቃን።\nህዝብ በተሰበሰበበት ያለጥንቃቄ ባላማስነጠስ፣ ባለመጨባበጥ፣ ባለመቀራረብ፣ ካላስፈላጊ እንቅስቃሴ በመታቀብ ደካማዎችን በመርዳት እና ትክክለኛ መረጃ በመከታተል ማህበራዊ ሀላፊነታችንን እንወጣ!`,
    categories: ["Responsibility","History","Wisdom","Health"],
    meaning: "Reflecting on Martin Luther King Jr.'s famous 'If I had sneezed' speech—where he recalled surviving a near-fatal stabbing to go on to lead the Civil Rights Movement—this message draws a parallel to the importance of public health responsibility. Just as one sneeze could have changed history, our small actions today (like not shaking hands, maintaining distance, and following health guidelines) can save lives and help us overcome current crises."
  },
  {
    amharic: `"እንኳንስ ሚልዮኖች ይቅርና አዳምና ሄዋንም በገነት ውስጥ አልተስማሙም ነበር።...ልባሞች ሁኑ፤ ከጥላቻ ነጻ ውጡ፤ ከተራ አመለካከትና ከጎጠኝነት ነጻ ውጡ፤ የሌላዉን ችግር ብቻ ሳይሆን መጀመርያ የራሳችሁን ችግር አራግፋችሁ ታጠቡ፤ የባሰውን እንዳይመጣ ጸልዩ፤ የተሻለውን ስጠን እንጂ እገሌ ይውደም እገሌ ይሁንልን አይባልም።"\n\nመጋቤ ሐዲስ እሸቱ አለማየሁ`,
    categories: ["Wisdom","Unity","Peace","Self-Reflection"],
    attribution: "Megabe Haddis Eshetu Alemayehu",
    meaning: "Even Adam and Eve couldn't agree in Paradise, let alone millions of people today. Be wise, free yourself from hatred and tribalism. Before pointing out others' faults, wash away your own. Pray for better times instead of wishing destruction upon others."
  }
];
