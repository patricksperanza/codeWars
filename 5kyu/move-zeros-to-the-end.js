// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
  let newArr = [];
  let zeros = [];
  arr.forEach((el) => {
    if (el === 0) {
      zeros.push(el);
    } else {
      newArr.push(el);
    }
  });
  zeros.forEach((n) => newArr.push(n));
  return newArr;
}
