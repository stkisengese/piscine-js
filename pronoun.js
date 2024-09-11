function pronoun(str) {
  const pronouns = ["i", "you", "he", "she", "it", "they", "we"];
  const words = str.toLowerCase().split(/[\s,]+/);

  const result = {};

  // Iterate through words
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (pronouns.includes(word)) {
      if (!result[word]) {
        // Initialize if first occurrence
        result[word] = { word: [], count: 0 };
      }

      result[word].count++;

      // Add next word if it exists and isn't another pronoun
      if (i + 1 < words.length && !pronouns.includes(words[i + 1])) {
        if (!result[word].word.includes(words[i + 1])) {
          result[word].word.push(words[i + 1]);
        }
      }
    }
  }

  return result;
}

const ex1 =
  "Using Array Destructuring, you you can iterate through objects easily.";
console.log(pronoun(ex1));
// Output: { you: { word: [ 'can' ], count: 2 } }

const ex2 = "If he you want to buy something you have to pay.";
console.log(pronoun(ex2));
// Output: { he: { word: [], count: 1 }, you: { word: [ 'want', 'have' ], count: 2 } }
const ex3 = "I buy,\ni to,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go";
console.log(pronoun(ex3));
// Output: { i: { word: ['buy', 'to'], count: 2 }, you: { word: ['buy', 'go'], count: 2 }, it: { word: ['have', 'buys', 'is'], count: 3 } }

console.log(pronoun(`it i it she is gone`));
