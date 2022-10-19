// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str){
    let words = str.split(' ')
    return words[1] + ' ' + words[0]
  }