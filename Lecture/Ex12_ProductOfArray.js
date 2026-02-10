// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(A) {
  if (A.length === 0) return 1;
  return A[0] * productOfArray(A.slice(1));
}