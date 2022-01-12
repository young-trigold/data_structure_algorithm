Array.generateRandom = function (start, end, n) {
  const integers = [];

  for (let i = 0; i < n; i++) {
    const random = ~~(Math.random() * (end - start + 1)) + start;
    integers.push(random);
  }
  return integers;
};

const integers = Array.generateRandom(0, 5, 10);
console.log('输入: ' + integers);

function getKFrequent(integers, k) {
  function getIntegersSortedByCount(integers) {
    const valueCountPairs = new Map();
    const lengthOfIntegers = integers.length;

    for (let i = 0; i < lengthOfIntegers; i++) {
      if (valueCountPairs.has(integers[i])) {
        valueCountPairs.set(integers[i], valueCountPairs.get(integers[i]) + 1);
      } else {
        valueCountPairs.set(integers[i], 0);
      }
    }
    return [...valueCountPairs.entries()]
      .sort((a, b) => b[1] - a[1])
      .map((pair) => pair[0]);
  }

  const integersSortedByCount = getIntegersSortedByCount(integers);
  console.log('排序后值数组: ' + integersSortedByCount);
  return integersSortedByCount.slice(0, k);
}

console.log('输出: ' + getKFrequent(integers, 2));
