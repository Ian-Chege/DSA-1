/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function radixSort(array) {
  // code goes here
  // Determine the maximum number of digits in the largest number
  const maxNum = Math.max(...array); // to find the maxNum
  const maxDigits = maxNum.toString().length; // eg. 3000 => 4 digits (because "3000".length = 4) has 4 digits

  // Loop through each digit place (1s, 10s, 100s, etc)
  for (let digitPlace = 0; digitPlace < maxDigits; digitPlace++) {
    // Create buckets for each digit (0-9)
    const buckets = Array.from({ length: 10 }, () => []); // create 10 empty arrays

    // Distribute numbers into buckets based on the current digit place
    for (let i = 0; i < array.length; i++) {
      const digit = getDigit(array[i], digitPlace); // get the digit at the digitPlace
      buckets[digit].push(array[i]); // push the number into the bucket
    }

    // Rebuild the array by concantenating all the buckets
    array = [].concat(...buckets); // spread the buckets into the array
  }
  return array;
}

// Helper function to get the digit at the given place
function getDigit(num, place) {
  return Math.floor(num / Math.pow(10, place)) % 10;
}

// unit tests
// do not modify the below code
describe.skip("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20, 51, 3, 801, 415, 62, 4, 17, 19, 11, 1, 100, 1244, 104, 944, 854, 34,
      3000, 3001, 1200, 633,
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1, 3, 4, 11, 17, 19, 20, 34, 51, 62, 100, 104, 415, 633, 801, 854, 944,
      1200, 1244, 3000, 3001,
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort((a, b) => a - b));
  });
});
