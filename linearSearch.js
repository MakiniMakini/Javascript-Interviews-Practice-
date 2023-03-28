// Big O(n)
function linearSearch(arr, target){
    for (let i = 0; i <= arr.length; i++){
        if (arr[i] == target ){
            return i
        } 
        
    } 
    return -1
}
 

const array = [10, 5, 3, 8, 2, 6];
const x = 8;
const index = linearSearch(array, x);
console.log(index); // Output: 3