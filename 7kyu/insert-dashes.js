// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
  let digits = String(num).split("")
  for (let i = 0; i < digits.length - 1; i++) {
    let n1 = Number(digits[i])
    let n2 = Number(digits[i + 1])

    if (n1 % 2 !== 0 && n2 % 2 !== 0) {
      console.log(n1, n2)
      digits.splice(i + 1, 0, "-")
      i++
    }
  }
  return digits.join("")
}
