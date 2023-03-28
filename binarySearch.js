// create a binary search function in JS \
// BigO of O(logn)

function binarySearch(array, x){
   //create the array lengths
   let first = 0;
   let last =  array.length-1;
   
   while (first <= last){
    let mid = Math.floor((first+last)/2)
    if (array[mid] == x){
        return mid
    } else if (array[mid] < x){
        let first = mid + 1;
    }else{
        let last = mid - 1;
    }
   }
   //if we exit the while loop without finding the number we return -1 to indicate we dis not find the number in the array
   return -1
}

const arr = [1, 3, 4, 6, 8, 9, 11];
const x = 4;
const index = binarySearch(arr, x);
console.log(index); // 3