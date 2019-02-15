function findMinimum(arr) {
  debugger;
  let start = 0;
  let end = arr.length;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (arr[mid] < arr[mid + 1] && (mid === 0 || arr[mid] < arr[mid - 1])) {
      return mid;
    } else if (arr[mid] > arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

console.log(findMinimum([7, 8, 1, 2, 4, 6]));
