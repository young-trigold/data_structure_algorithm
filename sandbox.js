const arr = [[1], [2, 3], [4]];

// 打平 
const flattedArr = arr.reduce((preEle, curEle) => preEle.concat(curEle));
console.log(flattedArr);
// -> [ 1, 2, 3, 4 ]