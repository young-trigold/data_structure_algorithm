class Node {
  constructor(element) {
    this.element = element;
    this.pre = null;
    this.next = null;
  }
}

const DoublyLinkedList = (() => {
  const store = new WeakMap();

  class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      store.set(this, { _count: 0 });
    }

    get size() {
      return store.get(this)._count;
    }

    get isEmpty() {
      return this.size === 0;
    }

    append(element) {
      const newNode = new Node(element);

      if (this.isEmpty) {
        this.head = newNode;
      } else {
        let curNode = this.head;

        while (curNode.next) {
          curNode = curNode.next;
        }

        curNode.next = newNode;
      }
    }

    insert(element, index) {}

    remove(element) {}

    removeAt(index) {}

    indexOf(element) {}

    getNodeAt(index) {
      
    }

    [Symbol.iterator]() {}
  }

  return DoublyLinkedList;
})();
