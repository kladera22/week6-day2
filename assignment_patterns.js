//! Problem #1: Multiple Pointers Pattern
/*
Using the multiple pointers pattern, write a function called, areThereDuplicates which accepts a 
array of letters, 
and checks whether there are any duplicates among the argument passed in. 
You can solve this using the frequency counter pattern OR the multiple pointers pattern.
Please implement with time & space complexity of O(n)
*/

const areThereDuplicates = (arrOfLetters) => {
    let left = 0
    let right = arrOfLetters.length -1
    //let Duplicate = false

    while (left < right ){
        let next = left + 1
        if(arrOfLetters[left] === arrOfLetters[next]){   
            return true
        } else {
            left ++
        }
    }
    return false    
}

//Tests
console.log(areThereDuplicates(['a', 'a', 'c', 'd'])) // true
console.log(areThereDuplicates(['a', 'b', 'c'])) // false
console.log(areThereDuplicates(['a', 'b', 'c','c'])) // true

//! Problem #2: Multiple Pointers Pattern
/* 
Using multiple pointers pattern, write a function called console.log(avgPair. 
Given a sorted array of integers and a target average, determine if there is a pair of values in 
the array 
where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.
Please implement with time complexity of O(n) and space O(1)
*/

const avgPair = (arr, avgTarget) => {
    let left = 0
    let right = arr.length - 1

    while(left < right){
        let avg = arr[left] + arr[right] / 2
        if(avg === avgTarget){
            return true
        } else if (avgTarget > avg){
            left ++
        } else {
            right --
        }
    }
    return false
}

// Test Cases: 
console.log(avgPair([1,2,3],2.5)) // true
console.log(avgPair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(avgPair([-1,0,3,4,5,6], 4.1)) // false
console.log(avgPair([],4)) // false

//! Problem #3: Sliding Window Pattern
/*
Given an array of integers and a number, write a function called console.log(minSubarraySum,
which finds the min sum of a subarray with the length of the number passed to the function.
Note that a subarray must consist of consecutive elements from the original array.
In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is
not.
Please write this with time complexity of O(n) and space o(1)
*/

const minSubarraySum = (arr, n) => {
    if(arr.length < n) return null
    let minSub = 0, tempSub = 0
    
    for(let i = 0; i < n; i++){
        minSub += arr[i]
    }
    tempSub = minSub

    for(let i = n; i < arr.length; i++){
        tempSub = tempSub - arr[i - n] + arr[i]
        minSub = Math.min(minSub, tempSub)
    }
    return minSub
}

// Test Cases:
console.log(minSubarraySum([100,200,300,400], 2))
console.log(minSubarraySum([1,4,2,10,23,3,1,0,20], 4))
console.log(minSubarraySum([-3,4,0,-2,6,-1], 2))
console.log(minSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2))
console.log(minSubarraySum([2,3], 3)) // null