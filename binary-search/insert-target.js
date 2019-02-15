function insertTarget(arr, num) {
  let start = 0;
  let end = arr.length;
  let mid = 0;
  debugger;
  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);
    if (num === arr[mid]) {
      return mid;
    } else if (num < arr[mid]) {
      end = mid - 1;
    } else if (num > arr[mid]) {
      start = mid + 1;
    } else if (start === end) {
      return mid;
    }
  }
  return mid;
}

console.log(insertTarget([1, 2, 4, 5, 6, 8], 3));
console.log(insertTarget([1, 2, 4, 5, 6, 8], 0));
console.log(insertTarget([1, 2, 4, 5, 6, 8], 4));
