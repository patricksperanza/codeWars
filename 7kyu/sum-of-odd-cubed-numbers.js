// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
  let sum = 0

  arr
    .map((num) => num ** 3)
    .forEach((num) => {
      if (num % 2 !== 0) {
        sum += num
      }
    })

  arr.forEach((el) => {
    if (typeof el !== "number") {
      sum = undefined
    }
  })
  return sum
}
