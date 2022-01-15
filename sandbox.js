Array.generate = function (len, pattern) {
  const arr = [];

  for (let i = 0; i < len; i++) {
    arr[i] = pattern(i);
  }

  return arr;
};

Array.prototype.shuffle = function () {
  const len = this.length;

  for (let i = len - 1; i > 0; i--) {
    const j = ~~(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]];
  }

  return this;
};

const nums = Array.generate(10, (i) => i);
console.log(...nums);
// 

const shuffledNums = nums.shuffle();
console.log(...shuffledNums);