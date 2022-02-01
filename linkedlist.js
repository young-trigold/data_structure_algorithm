class Node {
  constructor(ele) {
    this.element = ele;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(ele) {
    const newNode = new Node(ele);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }

    this.length++;
    return this;
  }

  insert(i, ele) {
    const newNode = new Node(ele);
    
  }

  removeAt(i) {}

  findIndex(ele) {}

  remove(ele) {}

  isEmpty() {
    return this.length === 0;
  }

  indexes() {
    let i = 0;

    return {
      next: () => {
        return {value: i, done: i++ === this.length};
      },

      [Symbol.iterator]() {
        return this;
      },
    };
  }

  elements() {
    return this[Symbol.iterator]();
  }

  [Symbol.iterator]() {
    let i = 0;
    let currentNode = this.head;

    return {
      next: () => {
        try {
          return {
            value: currentNode?.element,
            done: this.length === i,
          };
        } finally {
          currentNode = currentNode?.next;
          i++;
        }
      },

      [Symbol.iterator]() {
        return this;
      },
    };
  }

  entries() {
    let i = 0;
    let currentNode = this.head;

    return {
      next: () => {
        try {
          return {
            value: [i, currentNode?.element],
            done: this.length === i,
          };
        } finally {
          i++;
          currentNode = currentNode?.next;
        }
      },

      [Symbol.iterator]() {
        return this;
      },
    };
  }
}

const linkedList = new LinkedList();
linkedList.append('apple').append('orange').append('pear');

console.log(linkedList.length);
linkedList.insert(2, 'strawberry');

console.log(...linkedList.elements());