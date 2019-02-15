function subarraySumToZero(array) {
  const sums = [];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    sums.push(sum);
  }
  console.log(sums);
  for (let i = 0; i < sums.length; i++) {
    for (let j = i + 1; j < sums.length; j++) {
      if (sums[i] === sums[j]) {
        return [i + 1, j];
      }
    }
  }
  return [-1, -1];
}

console.log(subarraySumToZero([-1, -1, 2, 1, -4, 2, 3, -1, 2]));
