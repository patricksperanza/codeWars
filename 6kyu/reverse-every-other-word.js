// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

function reverse(str) {
  let words = str.split(" ")
  let reversedWords = words.map((word, index) => {
    if (index % 2 !== 0) {
      return word.split("").reverse().join("")
    } else {
      return word
    }
  })
  return reversedWords.join(" ").trim()
}
