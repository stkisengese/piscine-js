function pronoun(str) {
  const pronouns = ["i", "you", "he", "she", "it", "they", "we"];
  const result = {};

  const words = str.split(/\s+/);

  // Count the occurrences of each pronoun and their adjacent words
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase();
    if (pronouns.includes(word)) {
      if (!result[word]) {
        result[word] = { word: [], count: 0 };
      }
      result[word].count++;
      if (i + 1 < words.length) {
        result[word].word.push(words[i + 1]);
      }
    }
  }
    // Remove duplicates from the word arrays
    for (const pronoun in result) {
        result[pronoun].word = [...new Set(result[pronoun].word)];
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
