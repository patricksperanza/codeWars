// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function validParentheses(s) {
  let count = 0
  let arr = []
  for (let char of s) {
    if (char === "(") {
      arr.push(char)
      count++
    } else {
      arr.pop()
      count--
    }
  }
  return count === 0 && arr.length === 0
}
