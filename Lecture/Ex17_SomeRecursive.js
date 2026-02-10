// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

function someRecursive(A, F){
  if (A.length === 0) return false;
  if (F(A[0])) {
    return true;
  } else {
    return someRecursive(A.slice(1), F);
  }
}

console.log(someRecursive([1,2,3,4], isOdd)); // true
console.log(someRecursive([4,6,8,9], isOdd)); // true
console.log(someRecursive([4,6,8], isOdd)); // false
console.log(someRecursive([4,6,8], val => val > 10)); // false