function dutchFlag(arr, index) {
  let low = -1;
  let mid = -1;
  let high = arr.length;
  const num = arr[index];
  while (mid + 1 < high) {
    if (arr[mid + 1] === num) {
      mid++;
    } else if (arr[mid + 1] < num) {
      let temp = arr[low + 1];
      arr[low + 1] = arr[mid + 1];
      arr[mid + 1] = temp;
      low++;
      mid++;
    } else if (arr[mid + 1] > num) {
      let temp = arr[high - 1];
      arr[high - 1] = arr[mid + 1];
      arr[mid + 1] = temp;
      high--;
    }
  }
  return arr;
}

console.log(dutchFlag([3, 5, 2, 6, 8, 4, 4, 6, 4, 4, 3], 5));
