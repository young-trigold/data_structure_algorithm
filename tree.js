class Node {
  constructor(ele) {
    this.element = ele;
    this.left = null;
    this.right = null;
  }

  onLeftOf(node) {
    return this.element - node.element < 0;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 末尾添加一个元素
  append(ele) {
    const newNode = new Node(ele);

    if (this.root) {
      const newNode = new Node(ele);

      (function appendAt(curNode) {
        if (newNode.onLeftOf(curNode)) {
          if (curNode.left === null) curNode.left = newNode;
          else appendAt(curNode.left);
        } else if (curNode.right === null) curNode.right = newNode;
        else appendAt(curNode.right);
      }(this.root));
    } else {
      this.root = newNode;
    }

    return this;
  }

  // 中序遍历
  inOrderTraverse(callback) {
    (function traverseAt(curNode) {
      if (curNode) {
        traverseAt(curNode.left);
        callback(curNode.element);
        traverseAt(curNode.right);
      }
    }(this.root));
  }

  // 先序遍历
  preOrderTraverse(callback) {
    (function traverseAt(curNode) {
      if (curNode) {
        callback(curNode.element);
        traverseAt(curNode.left);
        traverseAt(curNode.right);
      }
    }(this.root));
  }

  // 后序遍历
  postOrderTraverse(callback) {
    (function traverseAt(curNode) {
      if (curNode) {
        traverseAt(curNode.left);
        traverseAt(curNode.right);
        callback(curNode.element);
      }
    }(this.root));
  }

  // 极小值
  min() {
    let curNode = this.root;

    while (curNode.left) {
      curNode = curNode.left;
    }

    return curNode.element;
  }

  // 极大值
  max() {
    let curNode = this.root;

    while (curNode.right) {
      curNode = curNode.right;
    }

    return curNode.element;
  }

  // 包含特定值？
  contains(ele) {
    const nodeToSearch = new Node(ele);

    return (function searchAt(curNode) {
      if (curNode) {
        if (nodeToSearch.element < curNode.element) {
          return searchAt(curNode.left);
        }
        if (nodeToSearch.element > curNode.element) {
          return searchAt(curNode.right);
        }
        return true;
      }

      return false;
    }(this.root));
  }
}

const bst = new BinarySearchTree();
[11, 7, 15, 5, 3, 6, 9, 8, 10, 13, 12, 14, 20, 18, 25].forEach((ele) => bst.append(ele));

console.log(bst.contains(4));
// -> true
