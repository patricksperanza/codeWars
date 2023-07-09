function solution(digits) {
  let max = 0
  for (let i = 0; i < digits.length; i++) {
    let currentNum = Number(digits.slice(i, i + 5))
    max = Math.max(max, currentNum)
  }
  return max
}
