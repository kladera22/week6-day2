//! Problem #1: Frequency Counter Pattern
/*Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the 
majority element always exists in the array.
Please solve using a linear time complexity and using the frequency counter pattern

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

/**
* @param {number[]} nums
* @return {number}
*/

const solution = (nums) => {
    const n = nums.length
    if(n < 1 || n > 5 * 104) return -1

    let frequencyCounter = {}

    for(let n of nums) {
        if(nums[n] < -109 || nums[n] > 109) return -1
        frequencyCounter[n] = (frequencyCounter[n] || 0) + 1
    }
    
    const values = Object.values(frequencyCounter)
    const max = Math.max(...values)

    for(let key in frequencyCounter){
        if (frequencyCounter[key] === max){
            return key
        }
    }
}

// Test Cases:
console.log('Problem #1: Frequency Counter Pattern')
console.log(solution([3, 2, 3]))
console.log(solution([2, 2, 1, 1, 1, 1, 1, 2, 2]))

//! Problem #2: Multiple Pointers Pattern
/*
Write a function called subsequence which takes in two strings and checks whether 
the characters in the first string form a subsequence of the characters in the second string. 
In other words, the function should check whether the characters in the first string 
appear somewhere in the second string, without their order changing.
Write your solution with time complexity O(n) and space O(1)
*/

const subsequence = (str1, str2) => {
    let n = str1.length
    let m = str2.length
    let i = 0, j = 0
arr = new Set ()
    while (i < n && j < m){
        if(str1[i] === str2[j]){
            i++
        } else {
            j++
        }
    }
    return i == n
}

// Test Cases:
console.log('Problem #2: Multiple Pointers Pattern')
console.log(subsequence('hello', 'hello world')) // true
console.log(subsequence('sing', 'sting')) // true
console.log(subsequence('abc', 'abracadabra')) // true
console.log(subsequence('abc', 'acb')) // false

//! Problem 3: Sliding Window Pattern
/* 
Write a function called longestSubstringInString, which accepts a string and 
returns the length of the longest substring with all distinct characters.
Please write in time complexity of O(n)
*/

const longestSubstringInString = (str) => {
    let current = 0
    let next = 0
    let max = 0

    let charSet = new Set();

    while (next < str.length) {
        if (!charSet.has(str.charAt(next))) {
            charSet.add(str.charAt(next))
            next++
            max = Math.max(charSet.size, max)

        } else {
            charSet.delete(str.charAt(current))
            current++
        }
    }
    return max
}

// Test Cases: 
console.log('Problem 3: Sliding Window Pattern')
console.log(longestSubstringInString('rithmschool')) // 7
console.log(longestSubstringInString('')) // 0
console.log(longestSubstringInString('thecatinthehat')) // 7
console.log(longestSubstringInString('bbbbbb')) // 1
console.log(longestSubstringInString('longestsubstring')) // 8
console.log(longestSubstringInString('thisishowwedoit')) // 6

//! Problem #4: Divide and Conquer Pattern
// sorted (in ascending order) integer array nums of n elements 
// and a target value, write a function to search target in nums. 
// If target exists, then return its index, otherwise return -1.
// Please write in time complexity of O(log n)
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

const binaryIterativeSearch = (nums, target) => {
    let min = 0; 
    let max = nums.length - 1; 

    while (min < max) {
        let middleIndex = Math.floor((min + max)/2);

        if (target === nums[middleIndex]) {
           return middleIndex; 
        
        } else if (nums[middleIndex] < target) {
            min = middleIndex + 1
        
        } else {
            max = middleIndex - 1
        }
     }

    return -1;
}

// Test Cases: 
console.log('Problem #4: Divide and Conquer Pattern')
console.log(binaryIterativeSearch([-1,0,3,5,9,12], 9))
console.log(binaryIterativeSearch([-1,0,3,5,9,12], 2))