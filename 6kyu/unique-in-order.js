// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

const uniqueInOrder = function (str) {
  let result = []
  for (let i = 0; i < str.length; i++) {
    if (i === 0 && str[i] !== str[i + 1]) {
      result.push(str[i])
    } else if (str[i] !== result[result.length - 1] && str[i] !== str[i + 1]) {
      result.push(str[i])
    }
  }
  return result
}
