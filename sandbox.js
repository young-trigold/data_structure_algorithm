const str = 'abcabcbb';
console.log(...str);

function lengthOfLongestSubstring(s) {
  const len = s.length;

  if (len < 2) return len;

  const charCachePerStep = new Set();
  let startIndex = 0;
  let endIndex = -1;
  let maxLengthOfSubstring = 1;

  while (startIndex < len) {
    while (!charCachePerStep.has(s[endIndex + 1]) && endIndex + 1 < len) {
      charCachePerStep.add(s[endIndex + 1]);
      endIndex += 1;
    }

    console.log(startIndex, endIndex);

    maxLengthOfSubstring = Math.max(
      maxLengthOfSubstring,
      endIndex - startIndex + 1,
    );

    startIndex += 1;
    charCachePerStep.delete(s[startIndex - 1]);
  }

  return maxLengthOfSubstring;
}

console.log(lengthOfLongestSubstring(str));
