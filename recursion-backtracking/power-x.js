function powerX(x, n) {
  if (n === 1) {
    return x;
  }
  return x * powerX(x, n - 1);
}

console.log(powerX(2, 4));
