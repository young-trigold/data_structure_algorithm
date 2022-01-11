Array.prototype.insert = function insert(index, ...items) {
  this.splice(index, 0, ...items);
  return this;
};

Array.prototype.update = function update(index, ...items) {
  this.splice(index, 1, ...items);
  return this;
};

Array.prototype.remove = function remove_(index, removeCount) {
  this.splice(index, removeCount);
  return this;
};

const fruits = ['orange', 'watermelon', 'strawberry'];
fruits
  .insert(fruits.length, 'apple')
  .update(fruits.length - 1, 'pear')
  .remove(fruits.length - 1, 1);

console.log(fruits);
// -> [ 'orange', 'watermelon', 'strawberry' ]