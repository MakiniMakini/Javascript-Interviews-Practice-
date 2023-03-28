function interpolationSearch(arr, val) {
    let low = 0;
    let high = arr.length - 1;
    
    while (low <= high && val >= arr[low] && val <= arr[high]) {
      // calculate the probable position using interpolation formula
      const pos = Math.floor(low + (((high - low) / (arr[high] - arr[low])) * (val - arr[low])));
  
      if (arr[pos] === val) {
        return pos;
      } else if (arr[pos] < val) {
        low = pos + 1;
      } else {
        high = pos - 1;
      }
    }
    
    return -1;
  }