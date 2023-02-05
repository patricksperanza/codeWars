// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.

function divCon(x) {
  let sumString = 0
  let sumNums = 0
  x.forEach((num) =>
    typeof num === "string" ? (sumString += Number(num)) : (sumNums += num)
  )
  return sumNums - sumString
}
