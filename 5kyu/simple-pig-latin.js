// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  const punctuation = [".", "!", "?"]
  const words = str.split(" ").map((word) => {
    return punctuation.includes(word) ? word : word.slice(1) + word[0] + "ay"
  })
  return words.join(" ")
}
