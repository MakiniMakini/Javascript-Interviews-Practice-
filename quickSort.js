function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i === Math.floor(arr.length / 2)) {
        continue;
      }
  
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return quickSort(left).concat([pivot], quickSort(right));
  }

//   Here is how the Quick Sort algorithm works:

//     First, we check if the input array is empty or contains only one element. If so, we can return the array as it is already sorted.
//     Next, we choose a pivot element. In this implementation, we choose the element in the middle of the array. We then create two arrays: one for elements smaller than the pivot, and another for elements greater than the pivot.
//     We then recursively sort the two sub-arrays using the same quickSort function, until they both contain only one element or are empty.
//     Finally, we concatenate the sorted left sub-array, the pivot element, and the sorted right sub-array into a single sorted array.