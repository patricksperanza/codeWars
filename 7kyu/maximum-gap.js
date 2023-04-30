// Task
// Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

function maxGap(numbers) {
  let maxDiff = 0
  numbers.sort((a, b) => a - b)
  for (let i = 1; i < numbers.length; i++) {
    maxDiff = Math.max(numbers[i] - numbers[i - 1], maxDiff)
  }
  return maxDiff
}
