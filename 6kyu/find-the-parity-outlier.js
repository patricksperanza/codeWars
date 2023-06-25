// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers) {
  let evens = 0

  for (i = 0; i < 3; i++) {
    if (integers[i] % 2 === 0) {
      evens++
    }
  }

  return evens >= 2
    ? integers.find((n) => n % 2 !== 0)
    : integers.find((n) => n % 2 === 0)
}
