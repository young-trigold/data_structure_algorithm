Array.generate = function (len, pattern) {
  const arr = [];

  for (let i = 0; i < len; i++) {
    arr[i] = pattern(i);
  }

  return arr;
};

// 使用 Array.generate() 生成随机数
const nums = Array.generate(10, (i) => ~~(10*Math.random()));
console.log(...nums);

const byQuantity = (a, b) => a - b;

console.log(...nums.sort(byQuantity));