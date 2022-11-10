// Description:

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let letters = s.split("");
  let newS = [];
  letters.forEach((letter) => {
    vowels.includes(letter) ? newS.push("!") : newS.push(letter);
  });
  return newS.join("");
}
