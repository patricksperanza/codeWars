// Find the area of a rectangle when provided with one diagonal and one side of the rectangle. If the input diagonal is less than or equal to the length of the side, return "Not a rectangle". If the resultant area has decimals round it to two places.

function area(d, l) {
  if (d <= l) return "Not a rectangle"
  let w = Math.sqrt(d ** 2 - l ** 2)
  let area = w * l
  if (area % 1 !== 0) return Number(area.toFixed(2))
  return area
}
