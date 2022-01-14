Array.generate = function (len, pattern) {
  const arr = [];

  for (let i = 0; i < len; i++) {
    arr[i] = pattern(i);
  }

  return arr;
};

// 生成 10 个随机数
const randoms = Array.generate(10, (i) => ~~(10*Math.random()));
console.log(...randoms);
