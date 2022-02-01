const a = [];

a.join = (function () {
  let callCount = 0;

  const join = function () {
    callCount++;
    if (callCount === 1) return '1';
    if (callCount === 2) return '2';
    if (callCount === 3) return '3';
  };

  return join;
})();



const foo = (a == 1) && (a == 2) && (a == 3);

console.log(foo);
