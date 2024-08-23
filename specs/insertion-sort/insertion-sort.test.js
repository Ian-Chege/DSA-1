/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

function insertionSort(nums) {
  // Outer loop: Start from the second element (index 1) since the first element is trivially "sorted".
  for (let i = 1; i < nums.length; i++) {
    // The 'key' is the current element that we need to insert into the correct position
    // within the sorted portion of the array.
    let key = nums[i];

    // Initialize 'j' to be the index of the last element in the sorted portion of the array.
    // This helps us compare the 'key' with elements in the sorted part.
    let j = i - 1;

    // Inner loop: Shift elements in the sorted portion of the array to the right
    // as long as they are greater than the 'key'.
    // This loop moves larger elements one position to the right to make space for the 'key'.
    while (j >= 0 && nums[j] > key) {
      // Move the current element at index 'j' to the position 'j + 1'
      nums[j + 1] = nums[j];
      // Decrement 'j' to continue checking the next element to the left.
      j--;
    }

    // Insert the 'key' into its correct position in the sorted portion.
    // 'j + 1' is now the correct index where 'key' should be placed.
    nums[j + 1] = key;
  }
  return nums;
}

// unit tests
// do not modify the below code
test("insertion sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
