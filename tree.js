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

  append(ele) {
    const newNode = new Node(ele);

    if (this.root) {
      let curNode = this.root;

      const appendAtSigleNode = () => {
        if (newNode.onLeftOf(curNode)) {
          if (curNode.left) {
            curNode = curNode.left;
            appendAtSigleNode();
          } else {
            curNode.left = newNode;
            return undefined;
          }
        } else if (curNode.right) {
          curNode = curNode.right;
          appendAtSigleNode();
        } else {
          curNode.right = newNode;
          return undefined;
        }
      };

      appendAtSigleNode();
    } else {
      this.root = newNode;
    }

    return this;
  }
}

const bst = new BinarySearchTree();
bst.append(11).append(7).append(15).append(9).append(3);

console.log(bst);
