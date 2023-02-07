// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have attributes x and y.

// Write a function calculating distance between Point a and Point b.

// Tests compare expected result and actual answer with tolerance of 1e-6.

function distanceBetweenPoints(a, b) {
  const xDist = Math.abs(a.x - b.x)
  const yDist = Math.abs(a.y - b.y)
  const result = Math.sqrt(xDist ** 2 + yDist ** 2)
  return result
}
