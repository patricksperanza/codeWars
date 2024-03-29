// An element is leader if it is greater than The Sum all the elements to its right side.

// Task
// Given an array/list [] of integers , Find all the LEADERS in the array.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers Will be mixture of positives , negatives and zeros

// Repetition of numbers in the array/list could occur.

// Returned Array/list should store the leading numbers in the same order in the original array/list .

function arrayLeaders(numbers) {
  const leaders = []
  numbers.forEach((num, i) => {
    const sum = numbers.slice(i + 1).reduce((a, c) => a + c, 0)
    if (num > sum) leaders.push(num)
  })
  return leaders
}
