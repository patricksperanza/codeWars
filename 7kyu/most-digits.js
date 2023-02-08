// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array) {
  const numOfDigits = array.map((num) => num.toString().length)
  const max = Math.max(...numOfDigits)
  return array[numOfDigits.indexOf(max)]
}
