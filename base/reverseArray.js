function reverseArray(arr) {
  let ptr1 = 0;
  let ptr2 = arr.length - 1;
  while (ptr1 < ptr2) {
    let temp = arr[ptr1];
    arr[ptr1] = arr[ptr2];
    arr[ptr2] = arr[ptr1];
    ptr1++;
    ptr2--;
  }
  return arr;
}

console.log(reverseArray([3, 5, 2, 5, 2, 3, 9]));
console.log(reverseArray([]));
console.log(reverseArray([1]));
