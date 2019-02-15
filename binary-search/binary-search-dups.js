function binarySearchDups(arr, num) {
  let start = 0;
  let end = arr.length;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);
    if (
      num < arr[mid] ||
      (num === arr[mid] && mid > 0 && arr[mid - 1] === num)
    ) {
      end = mid - 1;
    } else if (num > arr[mid]) {
      start = mid + 1;
    } else if (num === arr[mid]) {
      return mid;
    } else if (start === end) {
      return -1;
    }
  }
}

console.log(binarySearchDups([1, 2, 3, 3, 4, 5, 6], 3));
console.log(binarySearchDups([2, 6, 9, 44, 44, 44, 88], 44));
console.log(binarySearchDups([2], 100));
console.log(binarySearchDups([1, 3], 3));
console.log(binarySearchDups([3], 3));
console.log(binarySearchDups([], 3));
