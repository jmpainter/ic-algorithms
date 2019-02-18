function printCombos(arr, buffer, startIndex, bufferIndex) {
  // console.log(`printCombos(arr, [${buffer}], ${startIndex}, ${bufferIndex})`);
  debugger;
  if (bufferIndex === buffer.length) {
    console.log(buffer);
    return;
  }
  if (startIndex === arr.length) {
    return;
  }

  for (let i = startIndex; i < arr.length; i++) {
    buffer[bufferIndex] = arr[i];
    printCombos(arr, buffer, i + 1, bufferIndex + 1);
  }
}

printCombos([1, 2, 3, 4, 5, 6, 7], new Array(3), 0, 0);
