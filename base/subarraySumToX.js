function subarraySumToX(array, x) {
  let start = 0;
  let end = 0;
  let sum = array[0];

  while (start < array.length) {
    if (sum < x) {
      if (end < array.length - 1) {
        end++;
        sum += array[end];
      } else {
        break;
      }
    } else if (sum > x) {
      sum -= array[start];
      start++;
    } else {
      return [start, end];
    }
  }
  return [-1, -1];
}

console.log(subarraySumToX([2, 1, 4, 5, 3, 5, 1, 2, 4], 13));
console.log(subarraySumToX([2, 1, 4], 13));
