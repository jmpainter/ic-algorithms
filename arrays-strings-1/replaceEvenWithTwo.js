function replaceEvenWithTwo(arr) {
  let end = arr.length - 1;
  let i = arr.indexOf(-1) - 1;
  console.log(i);
  while (i >= 0) {
    arr[end] = arr[i];
    end--;
    if (arr[i] % 2 === 0) {
      arr[end] = arr[i];
      end--;
    }
    i--;
  }
  return arr;
}

console.log(replaceEvenWithTwo([2, 4, 0, 3, -1, -1, -1]));
console.log(replaceEvenWithTwo([1, 3, 5]));
console.log(replaceEvenWithTwo([2, 2, -1, -1]));
console.log(replaceEvenWithTwo([]));
console.log(replaceEvenWithTwo([1]));
console.log(replaceEvenWithTwo([2, -1]));
