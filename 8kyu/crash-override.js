function aliasGen(first, last) {
  const firstLet = first[0].toUpperCase()
  const lastLet = last[0].toUpperCase()

  if (firstName[firstLet] === undefined || surname[lastLet] === undefined)
    return "Your name must start with a letter from A - Z."

  return `${firstName[firstLet]} ${surname[lastLet]}`
}
