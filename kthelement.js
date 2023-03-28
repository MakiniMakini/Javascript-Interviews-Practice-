function findKthSmallest(arr, k) {
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    return arr[k - 1]; // Return the kth smallest element
  }
  
  function findKthLargest(arr, k) {
    arr.sort((a, b) => b - a); // Sort the array in descending order
    return arr[k - 1]; // Return the kth largest element
  }