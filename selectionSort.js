// create a selction sort
function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
  }

//   Here’s how the above code works:

//     The function takes an array as input.
//     The outer loop runs from the first element to the second-to-last element of the array.
//     For each iteration of the outer loop, the inner loop runs from the next element to the last element of the array.
//     The inner loop finds the minimum element in the unsorted part of the array.
//     If the minimum element is not the first element of the unsorted part, the function swaps the first element of the unsorted part with the minimum element.
//     The function returns the sorted array.

const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]