//! Problem #1
// Write a recursive function called reverseString which accepts a string and returns a new string in reverse.
// reverseString('tony') // 'ynot'
// reverseString('baker') // 'rekab'

function reverseString(str){
    if(str === '') { // end point
        return ''
    } else {
        return reverseString(str.substr(1)) + str.charAt(0)
    }
}

console.log(reverseString('tony')) // 'ynot'
console.log(reverseString('baker')) // 'rekab'

//! Problem #2: 
// Write a recursive function called palindrome which returns true 
// if the string passed to it is a palindrome (reads the same forward and backward). 
// Otherwise it returns false.
// palin drome('tony') // false
// palindrome('monkey') // false
// palindrome('tacocat') // true
// palindrome('sos') // true

const palindrome = (str) => {
    if(str.length === 1 || 0) return true

    if(str[0] === str[str.length - 1]){
        let newStr = str.slice(1, -1)
        return palindrome(newStr)
    } else{
        return false
    }
}

console.log(palindrome('tony')) // false
console.log(palindrome('monkey')) // false
console.log(palindrome('tacocat')) // true
console.log(palindrome('sos')) // true

//! Problem #3: 
// Write a recursive function called flatTheArray which accepts an array of arrays 
// and returns a new array with all values flattened.
// flatTheArray([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatTheArray([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatTheArray([[1],[2],[3]]) // [1,2,3]
// flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

const flatTheArray = (arr) => {
    let newArr = []

    for (let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            newArr = newArr.concat(flatTheArray(arr[i]))
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(flatTheArray([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
console.log(flatTheArray([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatTheArray([[1],[2],[3]])) // [1,2,3]
console.log(flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]

//! Problem #4: 
// Write a recursive function called capitalizeTheFirst. 
// Given an array of strings, capitalize the first letter of each string in the array.
// capitalizeFirstLetter(['tony', 'truck']); // ['Tony', 'Truck']

const capitalizeFirstLetter = (array) => {
    if(!array.length) return []

    let str = array[0].split('')
    str[0] = str[0].toUpperCase()
    return [str.join('')].concat(capitalizeFirstLetter(array.slice(1)))
}

console.log(capitalizeFirstLetter(['tony', 'truck'])) // ['Tony', 'Truck']

//! Problem #5: 
// Write a recursive function called capitalizeWords. 
// Given an array of words, return a new array containing each word capitalized.
// let words = ['tony', 'kim'];
// capitalizedAllLetters(words); // ['TONY', 'KIM']

const capitalizeAllLetters = (array) => {
    if(!array.length) return []

    let str = array[0].toUpperCase()
    return [str].concat(capitalizeAllLetters(array.slice(1)))
}

let words = ['tony', 'kim']
console.log(capitalizeAllLetters(words)) // ['TONY', 'KIM']