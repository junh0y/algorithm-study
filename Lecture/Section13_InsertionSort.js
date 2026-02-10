/**
  Insertion Sort

  Builds up the sort by gradually creating a larger left half which is always sorted

  Pseudocode
  1. Start by picking the second element in the array
  2. Now compare the second element with the one before it and swap if necessary.
  3. Continue to the next element and if it is in the incorrect order
    , iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
  4. Repeat until the array is sorted.
*/

function insertionSort(A) {
  for (let i = 1 ; 1 < A.length ; i++) {
    let currentValue = A[i];
    for (var j = i - 1 ; j >= 0 && A[j] > currentValue ; j--) {
      A[j + 1] = A[j]
    }
    A[j + 1] = currentValue;
    console.log(A);
  }

  return A;
}

console.log(insertionSort([2, 1, 9, 76, 4]));