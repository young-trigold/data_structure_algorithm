class Stack {
  constructor() {
    this.size = 0;
  }

  push(ele) {
    this[this.size] = ele;
    this.size++;
    return this;
  }

  pop() {
    const elePoped = this[this.size - 1];
    delete this[this.size - 1];
    this.size--;
    return elePoped;
  }

  peek() {
    return this[this.size - 1];
  }

  clear() {
    for (let i = 0; i < this.size; i++) {
      delete this[i];
    }

    this.size = 0;

    return this;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const stack = new Stack();
stack.push('apple').push('orange').push('pear');
console.log(stack);
// -> Stack { '0': 'apple', '1': 'orange', '2': 'pear', size: 3 }

console.log(stack.peek());
// -> 'pear'

console.log(stack.pop());
// -> 'pear'

console.log(stack);
// -> Stack { '0': 'apple', '1': 'orange', size: 2 }

console.log(stack.isEmpty());
// -> false