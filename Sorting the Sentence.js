/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    const words = s.split(" ");
    const sortedWords = [];
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const index = parseInt(word[word.length - 1]); 
      sortedWords[index - 1] = word.slice(0, word.length - 1); 
    }
  
    return sortedWords.join(" ");
  }
  
  // example
  const s1 = "is2 sentence4 This1 a3";
  console.log(sortSentence(s1)); 
  
  const s2 = "Myself2 Me1 I4 and3";
  console.log(sortSentence(s2)); 
  