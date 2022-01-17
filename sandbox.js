class Queue {
  constructor() {
    this.size = 0;
  }

  enqueue(ele) {
    this[this.size] = ele;
    this.size++;
    return this;
  }

  dequeue() {
    const eleDequeued = this[0];
    for (let i = 0; i < this.size - 1; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.size-1];
    this.size--;
    return eleDequeued;
  }

  peek() {
    return this[0];
  }

  isEmpty() {
    return this.size === 0;
  }

  clear() {
    for (let i = 0; i < this.size; i++) {
      delete this[i];
    }

    this.size = 0;
    return this;
  }
}

const queue = new Queue();

queue.enqueue('vip').enqueue('member').enqueue('visitor');
console.log(queue);
// -> Queue { '0': 'vip', '1': 'member', '2': 'visitor', size: 3 }

console.log(queue.peek());
// -> 'vip'

console.log(queue.dequeue());
// -> 'vip'

console.log(queue);
// -> Queue { '1': 'member', '2': 'visitor', size: 2 }

console.log(queue.clear());
// -> Queue { size: 0 }
