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

    // 节点数量 只读
    get size() {
      return store.get(this)._count;
    }

    // 是否为空 只读
    get isEmpty() {
      return this.size === 0;
    }

    // 在末尾添加 element
    append(element) {
      const newNode = new Node(element);

      if (this.isEmpty) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        const curNode = this.tail;
        newNode.pre = curNode;
        curNode.next = newNode;

        this.tail = newNode;
      }

      store.get(this)._count += 1;

      return this;
    }

    // 在位置 index 处插入 element
    insert(element, index) {
      const newNode = new Node(element);

      if (index === 0) {
        if (this.isEmpty) {
          this.head = newNode;
          this.tail = newNode;
        } else {
          const curNode = this.head;
          newNode.next = curNode;
          curNode.pre = newNode;

          this.head = newNode;
        }
      } else if (index === this.size - 1) {
        const curNode = this.tail;
        curNode.next = newNode;
        newNode.pre = curNode;

        this.tail = newNode;
      } else {
        const curNode = this.getNodeAt(index);
        newNode.pre = curNode.pre;
        newNode.next = curNode;
        curNode.pre.next = newNode;
        curNode.pre = newNode;
      }

      store.get(this)._count += 1;
    }

    remove(element) {
      return this.removeAt(this.indexOf(element));
    }

    // 移除 index 位置处的节点
    removeAt(index) {
      const elementToRemove = this.getNodeAt(index).element;

      if (index === 0) {
        if (this.size === 1) {
          this.head = null;
          this.tail = null;
        } else {
          this.head.next.pre = null;
          this.head = this.head.next;
        }
      } else if (index === this.size - 1) {
        this.tail.pre.next = null;
      } else {
        const curNode = this.getNodeAt(index);
        curNode.next.pre = curNode.pre;
        curNode.pre.next = curNode.next;
      }

      store.get(this)._count -= 1;

      return elementToRemove;
    }

    // 返回 element 的位置
    indexOf(element) {
      let curNode = this.head;
      let i = 0;

      while (curNode) {
        if (curNode.element === element) {
          return i;
        }

        curNode = curNode.next;
        i += 1;
      }

      return -1;
    }

    // 获取位置 index 处的节点
    getNodeAt(index) {
      if (index >= 0 && index < this.size) {
        let curNode = null;
        let i = -1;

        if (index < Math.floor(this.size / 2)) {
          curNode = this.head;
          i = 0;

          while (i < index) {
            curNode = curNode.next;
            i += 1;
          }
        } else {
          curNode = this.tail;
          i = this.size - 1;

          while (i > index) {
            curNode = curNode.pre;
            i -= 1;
          }
        }

        return curNode;
      }

      return null;
    }

    // 默认迭代器用于展示所有元素
    [Symbol.iterator]() {
      let curNode = this.head;

      return {
        next: () => {
          const result = { value: curNode?.element, done: curNode === null };
          curNode = curNode?.next;
          return result;
        },
        [Symbol.iterator]() {
          return this;
        },
      };
    }
  }

  return DoublyLinkedList;
})();

const Queue = (() => {
  const store = new WeakMap();

  class Queue {
    constructor() {
      store.set(this, { _items: new DoublyLinkedList() });
    }

    get size() {
      return store.get(this)._items.size;
    }

    get isEmpty() {
      return store.get(this)._items.isEmpty;
    }

    enqueue(ele) {
      store.get(this)._items.append(ele);
      return this.size;
    }

    dequeue() {
      const eleToDequeue = store.get(this)._items.getNodeAt(0).element;
      store.get(this)._items.removeAt(0);
      return eleToDequeue;
    }

    peek() {
      return store.get(this)._items.getNodeAt(0)?.element;
    }
  }

  return Queue;
})();

const queue = new Queue();
queue.enqueue(1);
console.log(queue.size, queue.isEmpty, queue.peek());
// -> 1 false 1

queue.dequeue();
console.log(queue.size, queue.isEmpty);
// -> 0 true
