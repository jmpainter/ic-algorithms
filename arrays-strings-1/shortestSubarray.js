function shortestSubarray(arr) {
  let ptr1 = 0;
  let ptr2 = arr.length - 1;
  while (arr[ptr1 + 1] > arr[ptr1]) {
    ptr1++;
  }
  while (arr[ptr2 - 1] < arr[ptr2]) {
    ptr2--;
  }
  const sub = arr.slice(ptr1, ptr2 + 1).sort((a, b) => a - b);
  const max = sub[sub.length - 1];
  const min = sub[0];
  while (arr[ptr1 - 1] > min) {
    ptr1--;
  }
  while (arr[ptr2 + 1] < max) {
    ptr2++;
  }
  return arr.slice(ptr1, ptr2 + 1);
}

console.log(shortestSubarray([1, 2, 4, 5, 3, 5, 6, 7, 9]));
console.log(shortestSubarray([1, 3, 5, 2, 6, 4, 7, 8, 9]));
console.log(shortestSubarray([]));
console.log(shortestSubarray([4, 1]));
