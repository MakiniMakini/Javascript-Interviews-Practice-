// create a merge sort algorithm

function mergeSort(arr){
    // base case
  if (arr.length <= 1) {
    return arr;
  }

  // split array into two halves
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // recursively sort the two halves
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // merge the sorted halves
  return merge(sortedLeft, sortedRight);
 
}

function merge(left, right) {
    const result = [];
  
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
  
    // either left or right may have elements left
    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }
  
    return result;
  }
  
//   The mergeSort function recursively splits the input array into two halves until the base case of an array with one or zero elements is reached. Then it calls the merge function to combine the two sorted halves.

// The merge function creates a new empty array called result, and then repeatedly compares the first elements of the left and right arrays, and pushes the smaller element onto result. 
// Once one of the arrays is empty, the function simply pushes the remaining elements of the other array onto result. 
// Finally, it returns the sorted result array.


const unsortedArray = [64, 25, 12, 22, 11, 98];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray); // Output: [11, 12, 22, 25, 64]