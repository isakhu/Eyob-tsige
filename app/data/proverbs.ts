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
  },
  {
    amharic:
      "የምንሰጠው ምክር፣ የምንሰጠው ፍቅር፣ የምንሰጠው ጊዜ፣ የምንሰጠው ሀሳብ፣ የምንሰጠው አንዳች ነገር አያሳጣን።",
    english:
      "The advice we give, the love we give, the time we give, the ideas we give — nothing we give will ever leave us poorer.",
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
  },
  {
    amharic:
      "ሕይወት ልክ እንደ ወይን ናት፤ በቆየችና በተፈተነች ቁጥር እየነጠረች ትሄዳለች።\n\nወይን በጨለማና በታሸገ በርሜል ውስጥ ለረጅም ጊዜ እንደሚያሳልፍ ሁሉ፣ ህይወትም በተለያዩ ፈተናዎችና የትግል ወቅት ውስጥ አልፋ ነው እውነተኛ ጣዕሟንና ክብሯን የምታገኘው። ይህ የበሰለና የነጠረ ማንነትን ይዞ ለመውጣት የሚደረግ ድንቅ ጉዞ ነው።",
    english:
      "Life is just like wine; the longer it ages and the more it is tested, the more refined it becomes.\n\nJust as wine spends a long time in a dark, sealed barrel, life too finds its true flavour and dignity only after passing through trials and seasons of struggle. It is a remarkable journey toward emerging with a mature and refined character.",
  },
  {
    amharic:
      "ኖረው ከማይደርሱ፣ በቁም ከተረሱ ይልቅ ሞተው የሚናፈቁ ወዳጆች ያፅናናሉ። የአንዳንዶች ፍቅር ትንሳኤ ያለው ፍቅር ነው። ከሟቹ ጋር አብሮ የማይቀበር ፍቅር።",
    english:
      "Friends who are missed after they are gone comfort us more than those who are alive yet never reach us, forgotten while still living. Some people's love is a love with a resurrection — a love that is not buried with the departed.",
  },
  {
    amharic:
      "ከአንድ ውሸት በኋላ የሚመጡ እውነቶች ሁሉ ያጠራጥሩኛል። ስህተትን ለማረም፣ ሰዎችን ለማሳመን፣ ተቀባይነትን ለማግኘት ብለህ መታመንህን አትጣ።",
    english:
      "After one lie, all subsequent truths become questionable to me. Do not lose your trustworthiness just to correct a mistake, convince people, or gain acceptance.",
  },
  {
    amharic: "ሰው ሆዱን አስፍቶ ሲወድቅ እንጂ ሲቆም አላየንም።",
    english: "We have only seen a person fall when expanding their stomach (in greed), never stand tall.",
    attribution: "የገበታ ገፅ",
  },
  {
    amharic: "ከአንድ ከፍታ ወደ ሌላ የላቀ ደረጃ ለመድረስ አንዳንዴ ታች ወርዶ ድጋሚ መውጣትን ሊጠይቅ ይችላል። ወደ ታች የምንወርደው ስለተሸነፍን ሳይሆን፣ ወደ ላይ በበለጠ ኃይል ለመንደርደር ትልቅ ጉልበት ለማግኘት ነው!\n\nኃይላችንን ሰብስበን ወደ አዲሱ ከፍታችን እንወጣለን። እንበርታ! 💪✨",
    english: "To reach a higher level from one peak, it sometimes requires going down and climbing again. We go down not because we are defeated, but to gather great strength to propel ourselves upwards with more power!\n\nWe will gather our strength and rise to our new heights. Let us be strong! 💪✨",
  },
  {
    amharic: "ሰዎች የተናገርከውን ሊረሱ ይችላሉ፤ ያደረግከውንም ሊረሱ ይችላሉ። ነገር ግን እንዲሰማቸው ያደረግከውን ስሜት መቼም አይረሱትም።",
    english: "People will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    attribution: "ማያ አንጀሉ (Maya Angelou)",
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
  },
  {
    amharic: "ዛሬህን በጥራት ከኖርክ፣ ትላንትህ ትርጉም ያለው ትዝታ ይሆናል፤ ነገህ ደግሞ በራስ መተማመን የምትቀበለው ስጦታ ይሆናል። ትኩረትህን አሁን በምትሠራው ሥራና አብረውህ ባሉ ሰዎች ላይ አድርግ።",
    english: "If you live today with quality, your yesterday will be a meaningful memory; and your tomorrow will be a gift you receive with confidence. Focus on the work you are doing now and the people who are with you."
  },
  {
    amharic: "ሕይወት ማለት የምትፈልገውን ሁሉ ማግኘት ሳይሆን፣ ባገኘኸው ነገር ውስጥ ትርጉም ያለው ማንነት መገንባት ነው።",
    english: "Life is not about getting everything you want, but building a meaningful identity within what you have."
  },
  {
    amharic: "ለካ የሰው ልጅ ሞራል ከሌለው መማር አይለውጠውም፣ እምነት አይገራውም፣ መርህ አይመራውም፣ ፍቅር አይገዛውም። ለማንኛውም የምንራብለት፣ የምንሰደድለት፣ የምንቆምለት፣ የምንኖርለት፣ የምንሞትለት ከስማችን እኩል የምንጠራበት፣ የማንደራደርበት የሞራልና የስነምግባር አቋም እንያዝ።",
    english: "It turns out that if a human being has no morals, learning will not change them, faith will not tame them, principles will not guide them, and love will not rule them. Let us hold a moral and ethical stance that we starve for, are exiled for, stand for, live for, and die for—a stance by which we are called as equally as our name, and on which we do not compromise."
  },
  {
    amharic: "ዓለም መንገድ ባይኖራትም፣ ሰዎች ዕድል ባይሰጡህም፣ አንተ የራስህን አዲስ መንገድ በመፈለግ አዲሱን የተለወጠ አንተነትህን ከህልመኞች፣ ከባለራዕዮች እና ከስኬታማ ሰዎች ተርታ አግኘው። እመኑኝ፤ ሁሉም መንገድ ሲዘጋ እውነተኛ ጀግና አዲስ መንገድ ይፈጥራል።",
    english: "Even if the world has no path, and even if people do not give you a chance, you must find your own new path and discover your new, transformed self among dreamers, visionaries, and successful people. Believe me; when all paths are closed, a true hero creates a new path."
  },
  {
    amharic: "አበው ሲናገሩ \"ፈጣሪ ለሚሮጥ ሰው ፈረስ ይሰጠዋል፤ ለሚተኛ ጋቢ ይደርብለታል\" ይላሉ። ታገሉና አሸንፉ።",
    english: "As the elders say, 'The Creator gives a horse to the one who runs, and covers with a blanket the one who sleeps.' Struggle and win."
  },
  {
    amharic: "ማንም ሰው ራሱ ላይ መስራት ከፈለገ የዚህን ሰው ስልጠናዎችና የመጽሀፍ ዳሰሳዎች ይከታተል። ሰው በቦታው ሲገኝ እንዲህ ነፍስን የሚያክም፣ ውስጥን የሚፈውስ የዕውቀትና የጥበብ ምንጭ ይሆናል።",
    english: "If anyone wants to work on themselves, they should follow this person's trainings and book reviews. When a person is in their rightful place, they become a source of knowledge and wisdom that heals the soul and cures from within."
  },
  {
    amharic: "የሰው ልጅ እውነተኛ መልኩ ባልንጀራውን እንደራስ በመውደድ እና በሱ ላይ ሊሆን የማይፈልገውን በሌሎች ላይ ባለማድረግ ላይ የተመሰረተ ነው። ይህ ወርቃማው የህይወት ህግ ነው።",
    english: "The true nature of a human being is based on loving their neighbor as themselves and not doing to others what they would not want done to themselves. This is the golden rule of life."
  },
  {
    amharic: "ተወደደም፣ተጠላም የህይወት እርካታ የሚገኘው አምላክ ላይ ባለን የምስጋና መጠን ነው። ዘመኑ የእግዚአብሔር እንጂ የክፉዎች ስላይደለ፤ በበጎ ስራ እንዋጀው ዘንድ አዲስ ዓመት ተሰጠኝ። ተመስገን።",
    english: "Like it or not, true life satisfaction is found in the measure of our gratitude towards God. Because the times belong to God and not to the wicked, a new year was given to us to redeem with good deeds. Thank God."
  },
  {
    amharic: "ሁሉም ሰው ህይወትን የሚያየው ከራሱ አንግል ነው። መስማት የሚፈልገው የመሻቱን ማረጋገጫ ነው። አንተ ግን እውነትህን ለማሳመን አትታገል፤ ለጊዜ ተውለት።",
    english: "Everyone sees life from their own angle. What they want to hear is the validation of their own desires. But you, do not struggle to convince them of your truth; leave it to time."
  },
  {
    amharic: "ማንኛውም ሰው ያለፈው ሕይወቱ ምንም ይሁን ምን ሁሉንም ነገር እንደ አዲስ ለመጀመር ጊዜው አይረፍድም።",
    english: "For anyone, no matter what their past was like, it is never too late to start everything anew."
  },
  {
    amharic: "መኖር እና መሞት የሰው ልጅ አይቀሬ እጣፈንታ ቢሆንም አላማ ያላቸው ሰዎች መኖራቸውን የሚያረጋግጡት በእስትንፋሳቸው ሳይሆን ለማህበረሰቡ በሚያበረክቱት የመልካም ስራ ውጤት ነው።",
    english: "Although living and dying are the inevitable fate of human beings, people with purpose prove their existence not by their breath, but by the results of the good work they contribute to society.",
    attribution: "ከቡስካ በስተጀርባ (ፍቅረማርቆስ ደስታ)"
  },
  {
    amharic: "ይህ ሞት ከመኖር ባሻገር ገዝፎ የቆመ የመልካም ስብዕና ሀውልት፣ በትህትና የተኖረ መንፈሳዊነት፣ የእምነት ድንበርን የተሻገረ አባትነት፣ የጥበብ፣የስክነትና የሽምግልና ምልክት እንጂ በመቃብር ተዘግቶ የሚያከትም መለየት አይደለም።",
    english: "This death is a monument of good character standing tall beyond life, a spirituality lived in humility, a fatherhood that crossed the boundaries of faith, a symbol of wisdom, sobriety, and eldership, rather than a separation that ends sealed in a tomb."
  },
  {
    amharic: "መልካም መስራትን የሚያህል ጤንነት፣ መስጠትን ያህል እርካታ፣ መተውን የመሰለ እረፍት የለም።",
    english: "There is no health like doing good, no satisfaction like giving, and no rest like letting go."
  },
  {
    amharic: "አርቆ እንደማየት፣ አይቶ እንደመራመድ፣ ለክቶ እንደመቁረጥ፣ መርጦ እንደመናገር፣ ታግሶ እንደመኖር መልካም ነገር የለም!",
    english: "There is nothing as good as seeing far, walking with vision, cutting after measuring, speaking after choosing one's words, and living with patience!"
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
  },
  {
    amharic: "\"Some of you are Near to Church, but Far from God\". አንዳንዶቻችሁ ለቤተ ክርስትያኑ ቅርብ ለእግዚአብሔር ግን ሩቅ ናችሁ። የፈረሰው ቃልኪዳናችን፣ የተዛባው ማንነታችን፣ የተዛነፈው ስብዕናችን፣ ከቃላችን የተላለፈ ተግባራችን፣ ከባህላችን ያፈነገጠው ራስወዳድነታችን እንዳንግባባና እንዳንተማመን አድርጎናል ብዬ አስባለሁ። ወርቅ ቅብ ከመምሰል፤ ወርቅ ለመሆን መቅረብን እንጀምር።",
    english: "\"Some of you are Near to Church, but Far from God\". I believe our broken covenants, our distorted identities, our skewed personalities, our actions that contradict our words, and our selfishness that deviates from our culture have made us unable to communicate and trust one another. Rather than appearing gold-plated, let us start getting closer to being real gold."
  },
  {
    amharic: "ብሩህ ዘመን እንዲሆንልን እመኛለሁ። ተዋጊያችን እርሱ እግዚአብሔር በነገሮች ሁሉ ቀድሞ ይታገልልን።",
    english: "I wish for us to have a bright era. May our fighter, God Himself, go before us and fight for us in all things."
  }
];
