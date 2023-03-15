// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function (size) {
  const result = []
  for (let i = 1; i <= size; i++) {
    result[i - 1] = []
    for (let j = 1; j <= size; j++) {
      result[i - 1].push(i * j)
    }
  }
  return result
}
