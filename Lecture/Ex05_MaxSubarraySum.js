function maxSubarraySum(A, n){
  if (A.length < n) return null;
  
  let maxSum = 0;
  let tempSum = 0;
  
  // 첫 번째 합계
  for (let i = 0 ; i < n ; i++) {
    maxSum += A[i];
  }
  tempSum = maxSum;
  
  for (let i = n ; i <= A.length - 1 ; i++) {
    tempSum = tempSum - A[i - n] + A[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  
  return maxSum;
}

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
maxSubarraySum([2,3], 3) // null