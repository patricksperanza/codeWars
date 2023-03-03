// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

function score(dice) {
  const map = {}
  for (let i = 0; i < dice.length; i++) {
    if (map[dice[i]]) {
      map[dice[i]]++
    } else {
      map[dice[i]] = 1
    }
  }

  let score = 0
  const tripleScoring = { 1: 1000, 6: 600, 5: 500, 4: 400, 3: 300, 2: 200 }

  for (let die in map) {
    if (map[die] >= 3) {
      score += tripleScoring[die]
      map[die] -= 3
      if (map[die] > 0) {
        if (die === "1") {
          score += map[die] * 100
        } else if (die === "5") {
          score += map[die] * 50
        }
      }
    } else if (die === "1") {
      score += map[die] * 100
    } else if (die === "5") {
      score += map[die] * 50
    }
  }
  return score
}
