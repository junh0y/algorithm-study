/**
  Radix Sort
  
  · Radix Sort is a special sorting algorithm that works on lists of numbers
  · It never makes comparsions between elements!
  · It exploits the fact that information about the size of a number is encoded in the number of digits.
  · More digits means a bigger number!
*/
 
/**
  Radix Sort Helpers
  
  · In order to implement radix sort, it's helpful to build a few helper functions first
    - getDigit(number, place) - returns the digit in num at the given place value
    - digitCount(number) - returns the number of digits in number
    - mostDigits(numbers) - Given an array of numbers, returns the number of digits in the largest numbers in the list
*/

function getDigit(n, i) {
  return Math.floor(Math.abs(n) / Math.pow(10, i) % 10);
}

function digitCount(n) {
  if (n === 0) return 1;
  return Math.floor(Math.log10(Math.abs(n))) + 1;
}

function mostDigits(A) {
  let maxDigits = 0;
  for (let i = 0 ; i < A.length ; i++) {
    maxDigits = Math.max(maxDigits, digitCount(A[i]));
  }
  return maxDigits;
}

// console.log(getDigit(-7323, 2));
// console.log(digitCount(42321232));
// console.log(mostDigits([1, 10, 100, 1000, 10000, 0]));

/**
  Radix Sort Pseudocode
  · Define a function that accept list of numbers
  · Figure out how many digits the largest number has
  · Loop from k = 0 up to this largest njumber of digits
  · For each iteration of the loop:
    - Create buckets for each digit (0 to 9)
    - Place each number in the corresponding bucket based on its kth digit
  · Replace our existing array with values in our buckets, starting with 0 and going up to 9
  · Return list at the end
*/

function radixSort(n) {
  let maxDigitCount = mostDigits(n);

  for (let k = 0 ; k < maxDigitCount ; k++) {
    let digitBuckets = Array.from({length: 10}, () => []);
    for (let i = 0 ; i < n.length ; i++) {
      let digit = getDigit(n[i], k);
      digitBuckets[digit].push(n[i]);
    }
    n = [].concat(...digitBuckets);
  }

  return n;
}

console.log(radixSort([23, 345, 5467, 12, 2345, 9852]));

/**
  Radix Sort Big O

  Time Complexity (Best)    - O(nk)
  Time Complexity (Average) - O(nk)
  Time Complexity (Worst)   - O(nk)
  Space Complexity          - O(n + k)
*/