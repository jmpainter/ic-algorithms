function maxSubArraySum(array) {
  debugger;
  let maxEndingHere = 0;
  let maxSoFar = 0;
  let s = 0;
  let start = 0;
  let end = 0;

  for (let i = 0; i < array.length; i++) {
    maxEndingHere += array[i];

    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
      start = s;
      end = i;
    }

    if (maxEndingHere < 0) {
      maxEndingHere = 0;
      s = i + 1;
    }
  }
  console.log('Maximum contiguous sum is ' + maxSoFar);
  console.log('Starting index ' + start);
  console.log('Ending index ' + end);
}

maxSubArraySum([1, 2, 3, -11, 1, 2]);
maxSubArraySum([-1, -2, -3, -11, 1, 2]);
maxSubArraySum([-1, -2, -3, -4, -5]);
maxSubArraySum([]);
