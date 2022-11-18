//! Problem #1: 
const arr1 = [1, 34, 5, 2, 23, 9, 12, 17, 12, 10, 25];
// Using any linear search algorithm and a time complexity of O(n)
// Search and return target number: 12
// If no target number is found, return -1
// Please use arr1. 

const linearSearch = (arr, target) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return arr[i]
        }
    }
    return -1
}

console.log(linearSearch(arr1, 12))

//! Problem #2: 
// Using any binary search algorithm and a time complexity of O(n)
// Search and return target number: 12
// If no target number is found, return -1
// Please use arr1. 

const binarySearch = (arr, target) => {
    let newArr = arr.sort((a, b) => a - b)
    let start = 0
    let end = newArr.length - 1
        
    while (start <= end ) {
        let middleIndex = Math.floor((start + end) / 2)
        
        if (target === newArr[middleIndex]) {
            return newArr[middleIndex]
        
        } else if(target < newArr[middleIndex]){
            end = middleIndex - 1
        
        } else {
            start = middleIndex + 1
        }
    } 
    return - 1
}

console.log(binarySearch(arr1, 12))

//! Problem #3: 
const arr2 = [1, 3, 5, 7, 8, 9, 10, 11, 12, 13, 15, 18, 20];
// Using the recursive binary search algorithm and a time complexity of O(log n)
// Search and return target number: 12
// If no target number is found, return -1
// Please use arr2. 

const recursiveBinarySearch = (arr, target, start = 0, end = arr.length - 1) => {
    if (start > end) return -1
    let middleIndex = Math.floor((start+end) / 2)
    
    if(arr[middleIndex] === target) {
        return arr[middleIndex]
    
    } else if (arr[middleIndex] > target){
        end = middleIndex - 1
        return recursiveBinarySearch(arr, target, start, end)
    
    } else {
        start = middleIndex + 1
        return recursiveBinarySearch(arr, target, start, end)
    }
}

console.log(recursiveBinarySearch(arr2, 3))

//! Problem #4: 
// Using the iterative binary search algorithm and a time complexity of O(log n)
// Search and return target number: 12
// If no target number is found, return -1
// Please use arr2. 

const iterativeBinarySearch = (arr, target) => {
    let start = 0
    let end = arr.length - 1
        
    while (start <= end ) {
        let middleIndex = Math.floor((start + end) / 2)
        
        if (target === arr[middleIndex]) {
            return arr[middleIndex]
        
        } else if(target < arr[middleIndex]){
            end = middleIndex - 1
        
        } else {
            start = middleIndex + 1
        }
    } 
    return - 1
}

console.log(iterativeBinarySearch(arr2, 12))

//! Problem #5: 
// Naive String Search
// Return the frequency count of occurence of the word "dog" in "deladogomydog"
// function SHOULD return 2 since 'dog' occurs twice in the long string
// Algorithm should use a time complexity of O(n * m)

const long = 'deladogomydog';
const short = 'dog'

const naiveSearch = (long, short) => {
    let count = 0

    for(let i = 0; i < long.length; i++){
        for(let j = 0; j < short.length; j++){
            if(long[i + j] !== short[j]) break
            if(j === short.length - 1) count ++
        }
    }
    return count
}

console.log(naiveSearch(long, short))

//! Problem #6: Identify the pattern and solve using it. 
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of 
// the non-zero elements.
// Note that you must do this in-place without making a copy of the array.
// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:
// Input: nums = [0]
// Output: [0]
// /**
// * @param {number[]} nums
// * @return {void} Do not return anything, modify nums in-place instead.
// */

const  moveZeroes = (nums) => {
    let zeros = 0

    for(let i = 0; i < nums.length; i++){
        let isZero = nums[i] === 0
        
        if (isZero){
            zeros++
            nums.splice(i, 1)
            i--
        }
    }
     
    for (let i = 0; i < zeros; i++){
        nums.push(0)
    }
    return nums
}

console.log(moveZeroes([0, 1, 0, 0, 0, 0, 3, 12]))

//! Problem #7: Identify the pattern and solve using it.
// Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might 
// get long pressed, and the character will be typed 1 or more times.
// You examine the typed characters of the keyboard. Return True if it is possible that it was your 
// friends name, with some characters (possibly none) being long pressed.
// Example 1:
// Input: name = "alex", typed = "aaleex"
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.
// Example 2:
// Input: name = "saeed", typed = "ssaaedd"
// Output: false
// Explanation: 'e' must have been pressed twice, but it was not in the typed output.
// Constraints:
// 1 <= name.length, typed.length <= 1000
// name and typed consist of only lowercase English letters.

const isLongPressedName = (name, typed) => {
    if (typed.length < name.length) return false
    let namePtr = 0
    let typedPtr = 0
    
    while (typedPtr < typed.length || namePtr < name.length) {
        if (name[namePtr] === typed[typedPtr]) {
            namePtr++
            typedPtr++
        
        } else if (name[namePtr - 1] === typed[typedPtr]) {
            typedPtr++
        
        } else {
            return false
        }
    }
    return true;
}

console.log(isLongPressedName(named = 'alex', typed = 'aaleex'))
console.log(isLongPressedName(named = 'saeed', typed = 'ssaaedd'))

//! Problem #8: Use Binary Search Pattern
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in
// the range that is missing from the array.
// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the 
// missing number in the range since it does not appear in nums.
// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the 
// missing number in the range since it does not appear in nums.
// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the 
// missing number in the range since it does not appear in nums.
// Constraints:
// n == nums.lengthclear
// 1 <= n <= 104
// 0 <= nums[i] <= n
// All the numbers of nums are unique.
// /**
// * @param {number[]} nums
// * @return {number}
// */

const missingNumber = (nums) => {
    let sum = 0; 

    for (let i = 0; i < nums.length; i++) {
        sum += i + 1 - nums[i]
    }
    return sum 
}

console.log(missingNumber([3,0,1]))
console.log(missingNumber([0,1]))
console.log(missingNumber([9,6,4,2,3,5,7,0,1]))