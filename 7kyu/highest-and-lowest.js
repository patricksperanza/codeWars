// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
  let arr = numbers.split(" ").map((num) => Number(num))
  return Math.max(...arr) + " " + Math.min(...arr)
}

function highAndLowOpt2(numbers) {
  let arr = numbers.split(" ")
  let numArray = arr.map((num) => Number(num)).sort((a, b) => a - b)
  if (numArray.length > 1) {
    let highest = numArray.pop()
    let lowest = numArray.shift()
    return `${highest} ${lowest}`
  } else {
    return `${numArray[0]} ${numArray[0]}`
  }
}
