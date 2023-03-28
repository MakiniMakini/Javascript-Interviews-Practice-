//create a function Bubble sort Big O(nlogn)
function bubbleSort(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements at positions j and j+1
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    
    return arr;
  }

const arr = [ 45, 65, 76, 23, 56, 87, 98]
const sorted = bubbleSort(arr)
console.log(sorted)