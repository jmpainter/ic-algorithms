function binarySearch(array, num) {
  debugger;
  let start = 0;
  let end = array.length;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (num < array[mid]) {
      end = mid - 1;
    } else if (num > array[mid]) {
      start = mid + 1;
    } else if (num === array[mid]) {
      return mid;
    } else if (start === end) {
      return -1;
    }
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));
console.log(binarySearch([2, 6, 9, 44, 88], 44));
console.log(binarySearch([2], 100));
console.log(binarySearch([1, 3], 3));
console.log(binarySearch([3], 3));
console.log(binarySearch([], 3));
