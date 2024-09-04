/*

  Quick Sort!
  
  Name your function quickSort.
  
  Quick sort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

*/

function quickSort(nums) {
  // code goes here
  // Base case: if the array has 0 or 1 element, it's already sorted
  if (nums.length < 2) return nums;

  // Choose the last element as the pivot
  const pivot = nums[nums.length - 1];

  // Create two arrays to store the elements smaller and larger than the pivot
  const left = [];
  const right = [];

  // Loop through all elements (except the pivot) and partition them
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]); // elemets less than the pivot go to the left
    } else {
      right.push(nums[i]); // elements greater than the pivot go to the right
    }
  }

  // Recursively sort the left and right partitions and concatenate them with the pivot
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// unit tests
// do not modify the below code
test.skip("quickSort", function () {
  const input = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
  const answer = quickSort(input);

  expect(answer).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
