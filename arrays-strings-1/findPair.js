function findPair(arr, x) {
  const map = {};
  for (let num of arr) {
    const diff = x - num;
    if (map[diff] === true) {
      return [num, diff];
    }
    if (!map[num]) {
      map[num] = true;
    }
  }
  return false;
}

console.log(findPair([6, 7, 5, 2, 1, 7], 14));
