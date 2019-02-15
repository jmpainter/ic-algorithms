function subarraySumToX(arr, x) {
  //curSum to keep track of cumulative x till that point
  let curSum = 0;
  let start = 0;
  let end = -1;
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    curSum = curSum + arr[i];
    //check whether curSum - x = 0, if 0 it means
    //the subarray is starting from index 0- so stop
    if (curSum - x === 0) {
      start = 0;
      end = i;
      break;
    }
    //if map already has the value, means we already
    // have subarray with the x - so stop
    if (map[curSum - x]) {
      start = map[curSum - x] + 1;
      end = i;
      break;
    }
    //if value is not present then add to hashmap
    map[curSum] = i;
  }
  // if end is -1 : means we have reached end without the x
  if (end == -1) {
    return [-1, -1];
  } else {
    return [start, end];
  }
}

console.log(subarraySumToX([-1, -1, 2, 1, -8, 2, 3, -1, 3], 5));
