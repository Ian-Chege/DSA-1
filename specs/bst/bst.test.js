/*

Binary Search Tree!

Name your class Tree. 

I'd suggest making another class called Node. You don't have to; you can make them all plain JS objects

Here you'll make a BST. Your Tree class will have keep track of a root which will be the first item added
to your tree. From there, if the item is less than the value of that node, it will go into its left subtree
and if greater it will go to the right subtree.

value - integer     - value being contained in the node
left  - Node/object - the left node which itself may be another tree
right - Node/object - the right node which itself may be another tree

*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  // code goes here
  constructor() {
    this.root = null;
  }

  // method to add a value to the tree
  add(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._addNode(this.root, newNode);
    }
  }

  // Recursive method to add nodes in the correct position
  _addNode(currentNode, newNode) {
    if (newNode.value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this._addNode(currentNode.left, newNode);
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this._addNode(currentNode.right, newNode);
      }
    }
  }

  // method to convert the tree to an object for easy testing
  toObject() {
    return this.root;
  }
}

// you might consider using a Node class too
// class Node {
//   // code maybe goes here
// }

// unit tests
// do not modify the below code
describe.skip("Binary Search Tree", function () {
  it("creates a correct tree", () => {
    const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8];
    const tree = new Tree();
    nums.map((num) => tree.add(num));
    const objs = tree.toObject();
    // render(objs, nums);

    expect(objs.value).toEqual(3);

    expect(objs.left.value).toEqual(1);
    expect(objs.left.left).toBeNull();

    expect(objs.left.right.value).toEqual(2);
    expect(objs.left.right.left).toBeNull();
    expect(objs.left.right.right).toBeNull();

    expect(objs.right.value).toEqual(7);

    expect(objs.right.left.value).toEqual(4);
    expect(objs.right.left.left).toBeNull();

    expect(objs.right.left.right.value).toEqual(6);
    expect(objs.right.left.right.left.value).toEqual(5);
    expect(objs.right.left.right.left.right).toBeNull();
    expect(objs.right.left.right.left.left).toBeNull();

    expect(objs.right.right.value).toEqual(10);
    expect(objs.right.right.right).toBeNull();

    expect(objs.right.right.left.value).toEqual(9);
    expect(objs.right.right.left.right).toBeNull();

    expect(objs.right.right.left.left.value).toEqual(8);
    expect(objs.right.right.left.left.right).toBeNull();
    expect(objs.right.right.left.left.left).toBeNull();
  });
});
