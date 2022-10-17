// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata


function shortcut (string) {
    let result = []
    let vowels = ['a', 'e', 'i', 'o', 'u']
    string.split('').forEach(letter => {
      if (!vowels.includes(letter)){
          result.push(letter)
          }
    })
    return result.join('')
  }