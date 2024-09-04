const heapSort = (array) => {
  createMaxHeap(array); // Step 1: Build the max heap
  let heapSize = array.length;

  // Step 2: Sort the array by extracting elements one by one
  for (let i = array.length - 1; i > 0; i--) {
    // Swap the root (max element) with the last element
    [array[0], array[i]] = [array[i], array[0]];
    heapSize--; // Reduce the heap size by one
    heapify(array, 0, heapSize); // Heapify the root to maintain max heap property
  }
  return array; // Return the sorted array
};

const createMaxHeap = (array) => {
  // Start from the last non-leaf node and heapify each node
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, i, array.length);
  }
};

const heapify = (array, index, heapSize) => {
  let largest = index;
  let left = 2 * index + 1; // Left child
  let right = 2 * index + 2; // Right child

  // If left child is larger than root
  if (left < heapSize && array[left] > array[largest]) {
    largest = left;
  }

  // If right child is larger than the largest so far
  if (right < heapSize && array[right] > array[largest]) {
    largest = right;
  }

  // If the largest is not the root, swap and continue heapifying
  if (largest !== index) {
    [array[index], array[largest]] = [array[largest], array[index]];
    heapify(array, largest, heapSize); // Recursively heapify the affected sub-tree
  }
};

// Unit tests
test.skip("heap sort", function () {
  const nums = [2, 5, 3, 8, 10, 6, 4, 7, 9, 1];
  heapSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
