//! MULTIPLE POINTERS
/*
Write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is 0. 
Return an array that includes both values that sum to zero or undefined if a pair does not exist
*/

const sumZeroQuadratic = (arr) => {
     for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++)
          if(arr[i] + arr[j] === 0){
            return [arr[i], arr[j]]
          } 
     }
}

const sumZeroLinear = (arr) => {
    let left = 0
    let right = arr.length - 1

    while(left < right){
        let sum = arr[left] + arr[right]
        if(sum === 0){
            return[arr[left], arr[right]]
        } else if(sum > 0){
            right --
        } else {
            left ++
        }
    }
}

console.log(sumZeroLinear([-3,-2,-1,0,1,2,3])) // [-3,3] 
console.log(sumZeroLinear([-2,0,1,3])) // undefined
console.log(sumZeroLinear([1,2,3])) // undefined

//! SLIDING WINDOW 
/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
The function should calculate the maximum sum of n consecutive elements in the array.
*/

const maxSubarraySumLinear = (arr, num) => {
    if(arr.length < num) return null;
    let maxSum = 0, tempSum =0;
    for(let i = 0; i<num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}


maxSubarraySumLinear([1,2,5,2,8,1,5],2) // 10
maxSubarraySumLinear([1,2,5,2,8,1,5],4) // 17
maxSubarraySumLinear([4,2,1,6],1) // 6
maxSubarraySumLinear([4,2,1,6,2],4) // 13
maxSubarraySumLinear([],4) // null



