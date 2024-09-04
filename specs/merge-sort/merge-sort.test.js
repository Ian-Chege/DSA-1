/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // code goes here
  // Base case: if the array has 1 or 0 elements, it's already sorted
  if (nums.length <= 1) return nums;

  // split the array into two halves
  const middle = Math.floor(nums.length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  // recursively sort both halves and merge them back together
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let result = [];
  const leftIndex = 0;
  const rightIndex = 0;

  // while there are elements in both arrays, compare and merge them
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // concatenate any remaining elements from the left or right array
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

// unit tests
// do not modify the below code
test.skip("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
