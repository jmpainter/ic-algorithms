function reverseWords(sentence) {
  debugger;
  let endWord = sentence.length + 1;
  let startWord = sentence.length - 1;
  let newStr = '';
  while (startWord >= 0) {
    if (startWord === ' ' || sentence.charAt(startWord - 1) === ' ') {
      newStr = newStr.concat(sentence.substring(startWord, endWord - 1));
      newStr = newStr.concat(' ');
      endWord = startWord;
    }
    startWord--;
  }
  return newStr;
}

console.log(reverseWords('I stayed at the house'));
