function subsets(arr, buffer, bufferIndex, startIndex) {
  console.log(buffer.slice(0, bufferIndex));
  if (bufferIndex === buffer.length) {
    return;
  }
  if (startIndex === arr.length) {
    return;
  }
  for (let i = startIndex; i < arr.length; i++) {
    buffer[bufferIndex] = arr[i];
    subsets(arr, buffer, bufferIndex + 1, startIndex + 1);
  }
}

subsets([1, 2, 3, 4, 5, 6, 7], new Array(3), 0, 0);
