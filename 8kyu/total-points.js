function points(games) {
    let points = 0
    games.forEach(game => {
      let score = game.split(":")
      if (score[0] > score[1]){
        points += 3 
      } else if (score[0] === score[1]){
        points += 1
      }
    }) 
    return points
  }