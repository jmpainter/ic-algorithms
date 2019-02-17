function fibMemo(n, map) {
  debugger;
  if (n === 1 || n === 2) {
    return 1;
  }
  if (map[n]) {
    return map[n];
  }
  const result = fibMemo(n - 2, map) + fibMemo(n - 1, map);
  map[n] = result;
  return result;
}
console.log(fibMemo(5, {}));
