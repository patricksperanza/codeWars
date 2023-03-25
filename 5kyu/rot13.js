// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  let letters = message.split("")
  return letters
    .map((letter) => {
      let num = letter.charCodeAt()
      if ((num >= 97 && num <= 109) || (num >= 65 && num <= 77)) {
        return String.fromCharCode(num + 13)
      } else if ((num > 109 && num <= 122) || (num > 77 && num <= 90)) {
        return String.fromCharCode(num - 13)
      } else {
        return letter
      }
    })
    .join("")
}
