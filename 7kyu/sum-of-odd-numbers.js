// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
	if (n === 1){
    return 1
  } else {
    let firstNum = n * (n-1) + 1
    let row = []
    for (let i = 0; i < n; i++){
      row.push(firstNum)
      firstNum += 2
    }
    return row.reduce((a, c) => a + c)
  }
}