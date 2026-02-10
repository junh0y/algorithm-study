function flatten(A) {
  let newArray = [];

  for (let i = 0 ; i < A.length ; i++) {
    if (Array.isArray(A[i])) {
      newArray = newArray.concat(flatten(A[i]))
      console.log(newArray);
    } else {
      newArray.push(A[i]);
      console.log(newArray);
    }
  }
  
  return newArray;
}

console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3