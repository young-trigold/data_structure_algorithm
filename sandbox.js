class ListNode {
  /**
   * 链表构造函数
   * @param {any} val 元素
   * @param {?ListNode} next 指向下一节点的指针
   */
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }

  get length() {
    let curNode = this.next;
    let len = 0;

    while (curNode) {
      len++;
      curNode = curNode.next;
    }

    return len;
  }

  get isEmpty() {
    return this.length === 0;
  }

  get first() {
    return this.next;
  }

  get last() {
    let curNode = this;

    while (curNode.next) {
      curNode = curNode.next;
    }

    return curNode;
  }

  /**
   * 判断一个值是否为链表
   * @param {any} any 值
   * @returns {boolean}
   */
  static isListNode(any) {
    return any instanceof ListNode;
  }

  /**
   * 从可迭代对象构造链表
   * @param {object} iterable 可迭代对象
   * @return {ListNode}
   */
  static from(iterable) {
    const newListNode = new ListNode();
    [...iterable].forEach((val) => newListNode.push(val));
    return newListNode;
  }

  /**
   * 正向向寻找元素，返回索引
   * @param {any} val 目标元素
   * @returns {number}
   */
  indexOf(val) {
    let i = 0;
    let curNode = this.next;

    while (curNode.next) {
      if (curNode.val === val) return i;

      i++;
      curNode = curNode.next;
    }

    return -1;
  }

  /**
   * 反向寻找元素，返回索引
   * @param {any} val 目标元素
   * @returns {number}
   */
  lastIndexOf(val) {
    let first = true;
    let result = -1;
    let i = 0;

    (function traverse(node) {
      if (!node) return -1;

      i++;
      traverse(node.next);
      i--;

      if (node.val === val && first) {
        result = i;
        first = false;
      }
    })(this.next);

    return result;
  }

  /**
   * 在链表头添加元素
   * @param {any} val 元素
   * @returns {ListNode}
   */
  unshift(val) {
    const newNode = new ListNode(val);
    newNode.next = this.next;
    this.next = newNode;
    return this;
  }

  /**
   * 删除链表头
   * @returns {ListNode}
   */
  shift() {
    if (this.isEmpty) return this;
    this.next = this.next.next;
    return this;
  }

  /**
   * 在链表末尾添加元素
   * @param {any} val 元素
   * @returns {ListNode}
   */
  push(val) {
    let curNode = this;

    while (curNode.next) {
      curNode = curNode.next;
    }

    curNode.next = new ListNode(val);
    return this;
  }

  /**
   * 删除链表末尾
   * @returns {ListNode}
   */
  pop() {
    if (this.isEmpty) return this;

    let curNode = this;

    while (curNode.next.next) {
      curNode = curNode.next;
    }

    curNode.next = null;

    return this;
  }

  /**
   * 链表操作方法
   * @param {number} index 目标索引
   * @param {number} removeCount 删除元素个数
   * @param  {...any} items 需要添加的元素
   */
  splice(index, removeCount, ...items) {
    if (!(index > 0 && index < this.length)) throw new RangeError('Index not in range');

    let i = 0;
    let curNode = this.next;

    while (i < index) {
      curNode = curNode.next;
      i++;
    }

    console.log(curNode);

    return this;
  }

  /**
   * 链表默认迭代器
   * @returns {IterableIterator}
   */
  [Symbol.iterator]() {
    let curNode = this.next;

    return {
      next: () => {
        const result = { value: curNode?.val, done: curNode === null };
        curNode = curNode?.next;
        return result;
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  }

  /**
   * 正向遍历链表
   * @param {function} callback 回调
   * @returns {void}
   */
  traverse(callback) {
    if (typeof callback !== 'function') throw new TypeError('callback is not a function');

    (function _traverse(node) {
      if (!node) return;
      callback(node.val);
      _traverse(node.next);
    })(this.next);
  }

  /**
   * 反向遍历链表
   * @param {function} callback 回调
   * @returns {void}
   */
  traverseReversed(callback) {
    if (typeof callback !== 'function') throw new TypeError('callback is not a function');

    (function _traverse(node) {
      if (!node) return;
      _traverse(node.next);
      callback(node.val);
    })(this.next);
  }
}

const l1 = ListNode.from([1, 1, 2, 3]);
console.log(...l1);

l1.splice(3);

const l2 = ListNode.from([1, 3, 4]);
console.log(...l2);
