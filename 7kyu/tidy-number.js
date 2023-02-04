// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not .

function tidyNumber(n) {
  let numsArr = n.toString().split("")
  for (let i = 0; i < numsArr.length - 1; i++) {
    if (Number(numsArr[i]) > Number(numsArr[i + 1])) {
      return false
    }
  }
  return true
}
