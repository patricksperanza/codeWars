// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

function solve(s) {
  const vowels = "aeiou"
  let substr = ""
  let longest = 0

  for (let char of s) {
    if (vowels.includes(char)) {
      substr += char
    } else {
      if (substr.length > longest) {
        longest = substr.length
      }
      substr = ""
    }
  }

  return longest
}
