// The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

// Example:

// Split the below string into other strings of size #3

// 'supercalifragilisticexpialidocious'

// Will return a new string
// 'sup erc ali fra gil ist ice xpi ali doc iou s'

var splitInParts = function (s, size) {
  let start = 0
  let end = size
  let res = ""
  while (start < s.length) {
    res += s.slice(start, end) + " "
    start += size
    end += size
  }
  return res.trim()
}
