function findTwoThatSum(arr, x) {
  let ptr1 = 0;
  let ptr2 = arr.length - 1;
  while (ptr1 < ptr2) {
    let sum = arr[ptr1] + arr[ptr2];
    if (sum === x) {
      return [arr[ptr1], arr[ptr2]];
    } else if (sum < x) {
      ptr1++;
    } else {
      ptr2--;
    }
  }
  return null;
}

console.log(findTwoThatSum([1, 2, 3, 4, 5], 5));
console.log(findTwoThatSum([1, 2, 3, 4, 5], 10));
console.log(findTwoThatSum([10], 10));
console.log(findTwoThatSum([], 10));
console.log(findTwoThatSum([], 11));
