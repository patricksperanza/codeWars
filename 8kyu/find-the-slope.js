// Given an array of 4 integers
// [a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

// For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

function slope(points) {
  if (points[2] - points[0] === 0) {
    return "undefined"
  }
  return String((points[3] - points[1]) / (points[2] - points[0]))
}
