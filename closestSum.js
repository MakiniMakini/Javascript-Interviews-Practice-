function findClosestSum(arr, x) {
    //empty list
    newArr = []
    // lopp through the entire list
    for (let i = 0; i < arr.length - 1; i++){
        let sum = arr[i] + arr[i + 1]
        newArr.push(sum)
    }
    newArr.push(x)
    const sortedNewArr = newArr.sort((a, b) => a - b)
    // find the location of x
    for (let i = 0; i < sortedNewArr.length - 1; i++){
        let index =  sortedNewArr.indexOf(x)
        // create a difference 
        let first = x - sortedNewArr[index - 1]
        let second = sortedNewArr[index + 1] - x
        //check for the smallest
        if (first <= second){
            return sortedNewArr[index - 1]
        } else{
            return sortedNewArr[index + 1]
        }
    } 
    
  }

  const arr = [3, 4, 56, 57, 59, 65, 71, 85, 97]
  const find = findClosestSum(arr, 50)
  console.log(find)