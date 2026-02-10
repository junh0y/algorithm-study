function capitalizeWords(A) {
  if (A.length === 1) {
    return [A[0].toUpperCase()];
  }
  
  let result = capitalizeWords(A.slice(0, -1));
  
  let string = A.slice(A.length - 1)[0].toUpperCase();
  
  result.push(string);
  
  return result;
}

console.log(capitalizeWords(['Car', 'banana']))