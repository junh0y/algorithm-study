function maxSubarraySum(A, n) {
    if (A.length < n) return null;

    let maxSum = 0;
    let tempSum = 0;

    // 첫 번째 합계 (0 - n)
    for (let i = 0 ; i < n ; i++) {
        maxSum += A[i];
    }

    // Sliding Window
    tempSum = maxSum;

    for (let i = n ; i < A.length ; i++) {
        tempSum = tempSum - A[i - n] + A[i];
        maxSum = Math.max(tempSum, maxSum);

        console.log(tempSum, maxSum);
    }

    return maxSum;
}

maxSubarraySum([5, 8, 9, 10, 1, 3, 11, 10, 7, 9], 3);