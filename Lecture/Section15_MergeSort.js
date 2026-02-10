/**
  Merge Sort

  · It's a combination of two things - merging and sorting!
  · Exploits the fact the arrays of 0 or 1 element are always sorted
  · Works by decomposing an array into smaller arrays of 0 or 1 elements,
    then building up a newly sorted array

  Merging Arrays
  · In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
  · Given two arrays which are sorted, this helper function should create a new array which is also sorted,
    and consists of all of the elements in the two input arrays
  · This function should run in O(n+m) time and O(n+m) space
    and should not modify the parameters passed to it.

  Merging Arrays Pseudocode
  · Create an empty array, take a look at the smallest values in each input array
  · While there are still values we haven't looked at...
    - If the value in the first array is smaller than the value in the second array,
      push the value in the first array into our results and move on to the next value in the first array
    - If the value in the first array is larger than the value in the second array,
      push the value in the second array into our results and move on to the next value in the second array
    - Once we exhaust on array, push in all remaining values from the other array

  Merge Sort Pseudocode
  · Break up the array into halves until you have arrays that are empty or have one element
  · Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
  · Once the array has been merged back together, return the merged (and sorted!) array

  Big O of Merge Sort
  Time Complexity (Best)    - O(n log n)
  Time Complexity (Average) - O(n log n)
  Time Complexity (Worst)   - O(n log n)
  Space Complexity          - O(n)
 */

function merge(A1, A2) {
  let results = [];

  let i = 0;
  let j = 0;

  while (i < A1.length && j < A2.length) {
    if (A2[j] > A1[i]) {
      results.push(A1[i]);
      i++;
    } else if (A2[j] < A1[i]) {
      results.push(A2[j]);
      j++;
    } else {
      results.push(A1[i]);
      i++;
      j++;
    }
  }

  while (i < A1.length) {
    results.push(A1[i]);
    i++;
  }

  while (j < A2.length) {
    results.push(A2[j]);
    j++;
  }

  return results;
}

// console.log(merge([1], [1, 3]));
// console.log(merge([1, 10, 50], [2, 14, 50, 99, 100]));

function mergeSort(A) {
  if (A.length <= 1) return A;
  
  let mid = Math.floor(A.length / 2);
  let left = mergeSort(A.slice(0, mid));
  let right = mergeSort(A.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));