// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
    let letters = {}
    let alt = word.toLowerCase()
    for(i=0; i<alt.length; i++){
      if(letters[alt[i]]){
        letters[alt[i]] += 1
      } else {
        letters[alt[i]] = 1
      }
    }
    let result = ''
  for (i=0; i<alt.length; i++){
    if (letters[alt[i]] === 1){
      result += '('
    } else if (letters[alt[i]]> 1){
      result += ')'
    }
    }
  return result
  }




