// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
    let letters = s.split('')
    let alt1 = []
    let alt2 = []
    letters.forEach((letter, i) =>{
      if (i % 2 === 0){
        alt1.push(letter.toUpperCase())
      } else if (i % 2 !== 0){
        alt1.push(letter.toLowerCase())
      }
    })
    letters.forEach((letter, i) =>{
      if (i % 2 === 0){
        alt2.push(letter.toLowerCase())
      } else if (i % 2 !== 0){
        alt2.push(letter.toUpperCase())
      }
    })
    return [alt1.join(''), alt2.join('')]
  };