function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 2) + fibonacci(n - 1);
}

console.log(fibonacci(3));
console.log(fibonacci(6));
console.log(fibonacci(12));
