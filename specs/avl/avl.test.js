/*
  AVL Tree
  
  Name you class/function (anything we can call new on) Tree
  
  I would suggest making a Node class as well (it will help _a lot_ with AVL trees) Whereas with BSTs we 
  could get away with most of the logic living in the Tree class, that will be a lot tougher with AVL
  trees dues how the function calls must be recursive in order to get the balancing correct.
  
  Tree must a method called add that takes a value and adds it to the tree and then correctly balances the
  tree. There is only one correct structure for any given order of adding numbers and the unit tests enforce
  that structure.
  
  If you have any questions conceptually about balancing the tree, refer to the class website.
  
  Make sure you are calling the properties
  of the Nodes as follows:
  value - integer - the value being store in the tree
  left  - Node    - the subtree containing Node's with values less than the current Node's value
  right - Node    - the subtree containing Node's with values greater than the current Node's value

*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // Function to add a value to the tree
  add(value) {
    this.root = this._add(this.root, value);
  }

  // Recursive function to add a node and rebalance the tree if necessary
  _add(node, value) {
    if (!node) return new Node(value);

    if (value < node.value) {
      node.left = this._add(node.left, value);
    } else if (value > node.value) {
      node.right = this._add(node.right, value);
    } else {
      return node; // Duplicate values are not allowed
    }

    node.height =
      1 + Math.max(this._height(node.left), this._height(node.right));

    const balanceFactor = this._getBalanceFactor(node);

    // LL Rotation
    if (balanceFactor > 1 && value < node.left.value) {
      return this._rotateRight(node);
    }

    // RR Rotation
    if (balanceFactor < -1 && value > node.right.value) {
      return this._rotateLeft(node);
    }

    // LR Rotation
    if (balanceFactor > 1 && value > node.left.value) {
      node.left = this._rotateLeft(node.left);
      return this._rotateRight(node);
    }

    // RL Rotation
    if (balanceFactor < -1 && value < node.right.value) {
      node.right = this._rotateRight(node.right);
      return this._rotateLeft(node);
    }

    return node;
  }

  // Function to get the height of the node
  _height(node) {
    if (!node) return 0;
    return node.height;
  }

  // Function to get the balance factor of the node
  _getBalanceFactor(node) {
    if (!node) return 0;
    return this._height(node.left) - this._height(node.right);
  }

  // Right Rotation
  _rotateRight(y) {
    const x = y.left;
    const T2 = x.right;

    x.right = y;
    y.left = T2;

    y.height = Math.max(this._height(y.left), this._height(y.right)) + 1;
    x.height = Math.max(this._height(x.left), this._height(x.right)) + 1;

    return x;
  }

  // Left Rotation
  _rotateLeft(x) {
    const y = x.right;
    const T2 = y.left;

    y.left = x;
    x.right = T2;

    x.height = Math.max(this._height(x.left), this._height(x.right)) + 1;
    y.height = Math.max(this._height(y.left), this._height(y.right)) + 1;

    return y;
  }

  // Function to convert the tree to an object (for testing)
  toObject() {
    return this._toObject(this.root);
  }

  _toObject(node) {
    if (!node) return null;
    return {
      value: node.value,
      left: this._toObject(node.left),
      right: this._toObject(node.right),
    };
  }
}

// unit tests
// do not modify the below code
describe.skip("AVL Tree", function () {
  test("creates a correct tree", () => {
    const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
    const tree = new Tree();
    nums.map((num) => tree.add(num));
    const objs = tree.toObject();

    expect(objs.value).toEqual(4);

    expect(objs.left.value).toEqual(2);

    expect(objs.left.left.value).toEqual(1);
    expect(objs.left.left.left).toBeNull();
    expect(objs.left.left.right).toBeNull();

    expect(objs.left.right.value).toEqual(3);
    expect(objs.left.right.left).toBeNull();
    expect(objs.left.right.right).toBeNull();

    expect(objs.right.value).toEqual(7);

    expect(objs.right.left.value).toEqual(6);
    expect(objs.right.left.right).toBeNull();

    expect(objs.right.left.left.value).toEqual(5);
    expect(objs.right.left.left.left).toBeNull();
    expect(objs.right.left.left.right).toBeNull();

    expect(objs.right.right.value).toEqual(9);

    expect(objs.right.right.left.value).toEqual(8);
    expect(objs.right.right.left.left).toBeNull();
    expect(objs.right.right.left.right).toBeNull();

    expect(objs.right.right.right.value).toEqual(10);
    expect(objs.right.right.right.left).toBeNull();
    expect(objs.right.right.right.right).toBeNull();
  });
});
