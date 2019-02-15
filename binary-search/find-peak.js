function findPeak(arr) {
  debugger;
  let start = 0;
  let end = arr.length;
  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (arr[mid - 1] < arr[mid] && arr[mid + 1] < arr[mid]) {
      return mid;
    } else if (arr[mid + 1] > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

console.log(findPeak([1, 3, 4, 5, 2]));
console.log(findPeak([1, 2, 1]));
console.log(findPeak([1, 3, 4, 5]));
console.log(findPeak([]));
