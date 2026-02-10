/**
  Selection Sort

  Similar to bubble sort,
  but instead of first placing large value into sorted position,
  it places small values into sorted position

  Pseudocode

  1. Store the first elements as the smallest value you've seen so far.
  2. Compare this item to the next item in the array until you find a smaller number.
  3. If a smaller number is found,
    designate that smaller number to be the new "minimum" and continue until the end of the array. 
  4. If the "minimum" is not the value (index) you initially began with,
    swap the two values.
  5. Repeat this with the next element until the array is sorted.
*/



function selectionSort1(A) {
  for (let i = 0 ; i < A.length ; i++) {
    let lowest = i;
    for (let j = i + 1; j < A.length ; j++) {
      if (A[j] < A[lowest]) {
        lowest = j;
      }
      if (i !== lowest) {
        let temp = A[i];
        A[i] = A[lowest];
        A[lowest] = temp;
      }
    }
  }

  return A;
}

function selectionSort2(A) {
  const swap = (A, idx1, idx2) => ([A[idx1], A[idx2]] = [A[idx2], A[idx1]]);

  for (let i = 0; i < A.length ; i++) {
    let lowest = i;
    for (let j = i + 1 ; j < A.length ; j++) {
      if (A[lowest] > A[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(A, i, lowest);
  }

  return A;
}

console.log(selectionSort1([34, 22, 10, 19, 17]));
console.log(selectionSort2([34, 22, 10, 19, 17]));