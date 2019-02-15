function findSquareRoot(num) {
  if (num === 0 || num === 1) {
    return num;
  }
  for (let i = 2; ; i++) {
    const result = i * i;
    if (result >= num) {
      return i;
    }
  }
}

console.log(findSquareRoot(100));
console.log(findSquareRoot(4));
console.log(findSquareRoot(1000000));
