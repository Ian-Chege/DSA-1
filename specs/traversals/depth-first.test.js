/* 
In-Order Traversal (Left, Root, Right)
Pre-Order Traversal (Root, Left, Right)
Post-Order Traversal (Left, Right, Root)

In-Order: Used in binary search trees to retrieve values in a sorted order.
Pre-Order: Useful for copying trees or generating prefix expressions.
Post-Order: Used in evaluating or parsing mathematical expressions, and for freeing up memory in some languages.
*/

const preorderTraverse = (node, array) => {
  // code goes here
  if (!node) return array;
  array.push(node.value); // visit the root node first
  array = preorderTraverse(node.left, array); // recursively traverse the left subtree
  array = preorderTraverse(node.right, array); // recursively traverse the right subtree

  return array;
};

const inorderTraverse = (node, array) => {
  // code goes here
  if (!node) return array;
  array = inorderTraverse(node.left, array); // recursively traverse the left subtree
  array.push(node.value); // visit the root node
  array = inorderTraverse(node.right, array); // recursively traverse the right subtree

  return array;
};

const postorderTraverse = (node, array) => {
  // code goes here
  if (!node) return array;
  array = postorderTraverse(node.left, array);
  array = postorderTraverse(node.right, array);
  array.push(node.value);

  return array;
};

// unit tests
// do not modify the below code
describe.skip("depth-first traversals", function () {
  const tree = {
    value: 8,
    left: {
      value: 4,
      left: {
        value: 3,
        left: {
          value: 2,
          left: null,
          right: null,
        },
        right: null,
      },
      right: {
        value: 5,
        left: null,
        right: {
          value: 7,
          left: {
            value: 6,
            left: null,
            right: null,
          },
        },
      },
    },
    right: {
      value: 12,
      left: {
        value: 10,
        left: {
          value: 9,
          left: null,
          right: null,
        },
        right: {
          value: 11,
          left: null,
          right: null,
        },
      },
    },
  };

  test("preorderTraverse", () => {
    expect(preorderTraverse(tree, [])).toEqual([
      8, 4, 3, 2, 5, 7, 6, 12, 10, 9, 11,
    ]);
  });

  test("inorderTraverse", () => {
    expect(inorderTraverse(tree, [])).toEqual([
      2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    ]);
  });

  test("postorderTraverse", () => {
    expect(postorderTraverse(tree, [])).toEqual([
      2, 3, 6, 7, 5, 4, 9, 11, 10, 12, 8,
    ]);
  });
});
