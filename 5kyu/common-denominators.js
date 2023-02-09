// Common denominators

// You will have a list of rationals in the form

// { {numer_1, denom_1} , ... {numer_n, denom_n} }
// or
// [ [numer_1, denom_1] , ... [numer_n, denom_n] ]
// or
// [ (numer_1, denom_1) , ... (numer_n, denom_n) ]
// where all numbers are positive ints. You have to produce a result in the form:

// (N_1, D) ... (N_n, D)
// or
// [ [N_1, D] ... [N_n, D] ]
// or
// [ (N_1', D) , ... (N_n, D) ]
// or
// {{N_1, D} ... {N_n, D}}
// or
// "(N_1, D) ... (N_n, D)"
// depending on the language (See Example tests) in which D is as small as possible and

// N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
// Example:
// convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
// Note:
// Due to the fact that the first translations were written long ago - more than 6 years - these first translations have only irreducible fractions.

// Newer translations have some reducible fractions. To be on the safe side it is better to do a bit more work by simplifying fractions even if they don't have to be.

function convertFrac(list) {
  //   get denominators from list
  let denoms = list.map((fraction) => fraction[1])

  // initialize least commond denominator variable and counter
  let lcd
  let i = 1

  // find the lcd
  while (lcd === undefined) {
    let divisible = true
    denoms.forEach((num) => {
      if (i % num !== 0) divisible = false
    })
    if (divisible === true) lcd = i
    i++
  }

  //   get the numerators from the list
  let numerators = list.map((fraction) => {
    let multiplier = lcd / fraction[1]
    return fraction[0] * multiplier
  })

  // create and return the result
  let result = ""
  for (let i = 0; i < numerators.length; i++) {
    result += `(${numerators[i]},${lcd})`
  }
  return result
}
