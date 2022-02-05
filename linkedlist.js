// Node 辅助类
class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

const LinkedList = (() => {
  // 封装私有属性
  const store = new WeakMap();

  class LinkedList {
    constructor() {
      store.set(this, { _count: 0 });
      this.head = null;
    }

    // 长度 只读
    get size() {
      return store.get(this)._count;
    }

    // 是否为空 只读
    get isEmpty() {
      return this.size === 0;
    }

    // 在链表末尾添加一个元素
    append(element) {
      const newNode = new Node(element);

      if (this.isEmpty) {
        this.head = newNode;
      } else {
        this.getNodeAt(this.size - 1).next = newNode;
      }

      store.get(this)._count += 1;

      return this;
    }

    // 在位置 index 处添加一个元素
    insert(element, index) {
      const newNode = new Node(element);

      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
      }

      if (index >= 1 && index <= this.size) {
        newNode.next = this.getNodeAt(index);
        this.getNodeAt(index - 1).next = newNode;
      }

      store.get(this)._count += 1;

      return this;
    }

    // 获取 index 位置处的节点
    getNodeAt(index) {
      if (index >= 0 && index < this.size) {
        let curNode = this.head;
        let i = 0;

        while (i < index) {
          curNode = curNode.next;
          i += 1;
        }

        return curNode;
      }

      return null;
    }

    // 移除位置 index 处的元素
    removeAt(index) {
      if (index === 0) {
        const originHeadElement = this.head?.element;
        this.head = this.getNodeAt(1);
        return originHeadElement;
      }

      if (index >= 1 && index < this.size) {
        const elementToRemove = this.getNodeAt(index).element;
        this.getNodeAt(index - 1).next = this.getNodeAt(index + 1);
        return elementToRemove;
      }

      return null;
    }

    // 移除元素
    remove(element) {
      return this.removeAt(this.indexOf(element));
    }

    // 返回指定元素的位置
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

  return LinkedList;
})();

const linkedList = new LinkedList();
linkedList.append('apple').append('orange').append('pear');
console.log(...linkedList);
// -> 'apple' 'orange' 'pear'

linkedList.insert('watermelon', 3);
console.log(...linkedList);
// -> 'apple' 'orange' 'pear' 'watermelon'

console.log(linkedList.indexOf('watermelon'));
// -> 3

console.log(linkedList.getNodeAt(3).element);
// -> 'watermelon'

linkedList.removeAt(3);
console.log(...linkedList);
// -> 'apple' 'orange' 'pear'

linkedList.remove('apple');
console.log(...linkedList);
// -> 'orange' 'pear'