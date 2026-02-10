function binarySearch(A, n){
  let start = 0;
  let end = A.length - 1;
  let middle = Math.floor((start + end) / 2);
  
  while (A[middle] !== n && start <= end) {
    if (A[middle] > n) end = middle - 1;
    else  start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }

  return A[middle] === n ? middle : -1;
}

console.log(binarySearch([1,2,3,4,5],2)); // 1
console.log(binarySearch([1,2,3,4,5],3)); // 2
console.log(binarySearch([1,2,3,4,5],5)); // 4
console.log(binarySearch([1,2,3,4,5],6)); // -1

function naiveSearch(text, pattern) {
  let count = 0;

  for (let i = 0 ; i < text.length ; i++) {
    for (let j = 0 ; j < pattern.length ; j++) {
      if (pattern[j] !== text[i + j]) break;
      if (j === pattern.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch('lorie loled', 'lo'));