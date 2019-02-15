function closestElement(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let result = -1;
  while (start <= end) {
    const mid = start + Math.floor(end - start / 2);
    if (result === -1 || Math.abs(num - arr[mid]) < result) {
      result = arr[mid];
    }
    if (num < arr[mid]) {
      end = mid - 1;
    } else if (num > arr[mid]) {
      start = mid + 1;
    } else {
      return result;
    }
  }
  return result;
}

console.log(closestElement([1, 2, 4, 5, 7, 8, 9], 6));
console.log(closestElement([1, 2, 4, 5], 6));
console.log(closestElement([1, 3, 6, 7], 6));
