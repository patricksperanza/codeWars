// Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

// Task
// Given a number, Find if it is Disarium or not .

function disariumNumber(n) {
  const digits = n
    .toString()
    .split("")
    .map((num, i) => Number(num) ** (i + 1))
  return digits.reduce((a, c) => a + c, 0) === n ? "Disarium !!" : "Not !!"
}
