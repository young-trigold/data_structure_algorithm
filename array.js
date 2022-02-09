Array.prototype.shuffle = function shuffle() {
  const len = this.length;

  for (let i = len - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [this[i], this[j]] = [this[j], this[i]];
  }

  return this;
};

// 使用 Array.generate() 方法
const nums = Array.generate(10, (i) => i);
console.log(...nums);
// 0 1 2 3 4 5 6 7 8 9

const shuffledNums = nums.shuffle();
console.log(...shuffledNums);
// 0 6 7 8 9 5 4 1 3 2