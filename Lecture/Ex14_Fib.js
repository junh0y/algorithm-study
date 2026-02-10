
function fib(n){
  if (n <= 2) return 1;
  
  let order = 3;
  let value1 = 1;
  let value2 = 1;
  let result = value1 + value2;

  function helper(order) {
    if (order === n) return result;
    value1 = value2;
    value2 = result;
    result = value1 + value2;
    helper(order + 1);
  }

  helper(order);

  return result;
}

function fib(n) {
  if (n <= 2) return 1;
  return fib(n-1) + fib(n-2);
}

fib(4) // 3
fib(10) // 55
fib(28) // 317811
fib(35) // 9227465
