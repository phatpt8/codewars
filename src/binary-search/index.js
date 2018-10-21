 class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  size() {
    let length = 0;
    this.traverse(() => length++);

    return length;
  }

  contains(value) {
    if (this.root === null) return;

    let current = this.root;
    let found = false;

    while (!found && current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true;
      }
    }

    return found;
  }

  traverse(callback) {
    const loop = node => {
      if (!node) return;

      if (node.left !== null) {
        loop(node.left);
      }
      
      callback.call(this, node);

      if (node.right !== null) {
        loop(node.right);
      }
    }

    loop(this.root);

  }

  add(value) {
    const node = {
      value,
      left: null,
      right: null,
    }

    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;

      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            break;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = node;
            break;
          } else {
            current = current.right;
          }
        } else {
          break;
        }
      }
    }
  }

  findMinValue(node) {
    if (node.left) {
      this.findMinValue(node.left);
    } else {
      return node.value;
    }
  }

  remove(value, node) {
    if (!this.contains(value)) return;
    
    if (!node) {
      this.root = this.remove(value, this.root);
    } else if (value < node.value && node.left) {
      node.left = this.remove(value, node.left);
    } else if (value > node.value && node.right) {
      node.right = this.remove(value, node.right);
    } else {
      if (node.left && node.right) {
        node.value = this.findMinValue(node.right);
        node.right = this.remove(node.value, node.right);
      } else {
        node = node.left || node.right;
      }
    }
    return node;
  }

}