/**
 * Proverbs & Wisdom — content for the swipeable proverb carousel.
 *
 * Edit this array to add, remove, or reorder cards.
 *
 * Fields:
 *  - proverb      (required) The proverb text, in its original language.
 *  - translation  (optional) English translation.
 *  - explanation  (optional) Short context or meaning.
 *  - attribution  (optional) Who the words are credited to.
 *                 Defaults to "Eyob Tsige Terefe" when omitted, so only omit
 *                 it for proverbs that are genuinely Eyob's own words.
 *  - lang         (optional) Language code of the proverb, e.g. "am" for Amharic.
 *  - placeholder  (optional) Shows a "Placeholder" badge on the card.
 *                 Remove once real content is in place.
 *
 * ⚠️ PLACEHOLDER CONTENT
 * The entries below are temporary examples only. They are well-known
 * traditional Ethiopian proverbs (credited as such, NOT to Eyob) plus one
 * empty template slot. Replace them with the proverbs provided by
 * Eyob Tsige Terefe.
 */

export type Proverb = {
  amharic: string;
  english?: string;
  meaningAmharic?: string;
  meaningEnglish?: string;
  attribution?: string;
  placeholder?: boolean;
};

export const DEFAULT_ATTRIBUTION = "Eyob Tsige Terefe";

export const proverbs: Proverb[] = [
  {
    amharic: "ድር ቢያብር አንበሳ ያስር።",
    english: "When spider webs unite, they can tie up a lion.",
    meaningAmharic: "ትንሽ ነገሮች ከተባበሩ ትልቅ ነገር ማድረግ ይችላሉ።",
    meaningEnglish: "A widely known traditional saying about unity: small efforts, joined together, can overcome great challenges.",
    attribution: "Traditional Ethiopian proverb",
    placeholder: true,
  },
  {
    amharic: "ቀስ በቀስ እንቁላል በእግሩ ይሄዳል።",
    english: "Little by little, the egg will walk on its own legs.",
    meaningAmharic: "በትዕግስት እና በቀጣይነት ትልቅ ውጤት ላይ መድረስ ይቻላል።",
    meaningEnglish: "A traditional proverb about patience and steady growth. In time, the egg becomes a chick that walks.",
    attribution: "Traditional Ethiopian proverb",
    placeholder: true,
  },
  {
    amharic: "የአማርኛ ምሳሌ እዚህ።",
    meaningAmharic: "የምሳሌው ትርጉም እዚህ።",
    english: "Placeholder for English translation.",
    meaningEnglish: "Template slot: replace this card with an actual proverb or saying provided by Eyob Tsige Terefe.",
    placeholder: true,
  },
];
