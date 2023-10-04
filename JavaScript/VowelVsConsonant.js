// Block14: Question #2 "Vowel Vs Consonant"

// [Write an algorithm that accepts a string of lowercase letters. 
// Print the word followed by how many consonants and vowels it has.

// "a", "e", "i", "o", and "u" are considered vowels. 

// Every other letter is considered a consonant.

// Hint: Define two variables that keep track of the number of consonants and vowels.]


function countVowelsAndConsonants(word) {
    const vowels = "aeiou";
    let vowelCount = 0;
    let consonantCount = 0;
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        vowelCount++;
      } else {
        consonantCount++;
      }
    }
    console.log(`${word} has ${consonantCount} consonants and ${vowelCount} vowels`);
  }


  // Test the function with various input "word":

  countVowelsAndConsonants("hello"); 
  // "hello has 3 consonants and 2 vowels"

countVowelsAndConsonants("ukelele"); 
// "ukelele has 3 consonants and 4 vowels"

countVowelsAndConsonants("awesome"); 
// "awesome has 3 consonants and 4 vowels"

countVowelsAndConsonants("onomonopia"); 
// "onomonopia has 4 consonants and 6 vowels"

countVowelsAndConsonants("textbook"); 
// "textbook has 5 consonants and 3 vowels"
