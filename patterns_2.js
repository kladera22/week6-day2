//! Frequency Counter Pattern
/* 
Write a function called same, which accepts two arrays. 
The function should return true if every value in the array has it's corresponding value squared in the second array. 
The frequency of values must be the same.
*/

const same = (arr1, arr2) => {
    // check edge cases
    if (arr1.length !== arr2.length) return false; 

    let frequencyCounter1 = {}; 
    let frequencyCounter2 = {}; 
    for (let num of arr1) {
        frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1
    }
    for (let num of arr2) {
        frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        //check if the key value is the squared value
        if(!(key * key in frequencyCounter2)) return false; 

        if (frequencyCounter1[key] !== frequencyCounter2[key * key]) {
            return false
        }
    }

    return true; 
}


same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,1]) // false (must be same frequency)


//! Divide and Conquer Pattern
// Problem statement: Given a sorted (in ascending order) integer array nums of n elements 
// and a target value, write a function to search target in nums. 
// If target exists, then return its index, otherwise return -1.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4

// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

// Note:
// 1. You may assume that all elements in nums are unique.
// 2. n will be in the range [1, 10000].
// 3. The value of each element in nums will be in the range [-9999, 9999].

const binarySearch = (arr, target) => {
    let min = 0; 
    let max = arr.length - 1; 

    while (min < max) {
        let middleIndex = Math.floor((min + max)/2);

        if (target === arr[middleIndex]) {
            return middleIndex; 
        } else if (arr[middleIndex] < target) {
            min = middleIndex + 1; 
        } else {
            max = middleIndex - 1; 
        }
     }

    return -1; 
}