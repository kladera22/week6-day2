const performance = require('perf_hooks').performance

// const arr = [2, 3, 1, 5]

// const sortArray = (arr) => {
//     return arr.sort()
// }
// const sortArray2 = arr => {
//     const sortedArray = []
//     for (let i = 0; i < arr.length; i++){
//         for(let j = i+1; j < arr.length; j++){
//         }
//     }
// }
// console.log(sortArray(arr));

const arr1 = [2, 3, 1, 5, 20, 10, 7, 19, 6, 11, 4, 8, 19, 9, 12, 13, 18, 17, 16, 14, 15 ];

// Option A
const pushNumberToArray1 = (arr, num) => {
    const lastIndex = arr.length -1
    for (let i = 0; i < arr.length; i++) {
        if (i === lastIndex) {
            arr.splice(lastIndex, 0 , num);
        }
    }
    return arr;
}

// Option B
const pushNumberToArray2 = (arr, num) => {
    return arr.push(num);
}

    const t0 = performance.now()
    pushNumberToArray1(arr1, 21);
    const t1 = performance.now();
    console.log(`Time to complete: ${(t1-t0)/1000}`);

    const t2 = performance.now()
    pushNumberToArray2(arr1, 21);
    const t3 = performance.now();
    console.log(`Time to complete: ${(t3-t2)/1000}`);

// constant time complexity O(1)
//    

//! log time complexity O(log n)
const logTime = (arr) => {
    let numberOfLoops = 0

    for(let i =1; i < arr.length; i*= 2){
        numberOfLoops++
    }

    return numberOfLoops
}

// console.log(logTime(arr1))

//! linear complexity O(n)

for(let i = 0; i < arr.length; i++){
    console.log(arr1[i])
}

while(arr.length < 10){
    console.log(arr1)
}

arr1.forEach(num => console.log(num))
arr1.map(num => num * 2)
arr1.find(num => num < 10)
arr1.filter(num = num !== 3)

//! quadratic complexity O(n^2)
for(let i = 0; i < arr1.length; i++){
    for(let j = 1; i < arr1.length; j++){

    }
}

for(let i = 0; i < arr1.length; i++){
    const newArr = arr1.map(num => num *2)
}

// for(let i = 0; i < arr1.length; i++){ // O(n)
//     for(let j = 1; i < arr1.length; j *= 2){ O(log n)
        
//     }
// }

//! factorial complexity O(n!)
const factorial = (n) => {
    let num = n;

    if(n === 0) return 1
    for(let i = 0; i < n; i++){
        num = n * factorial(n -1) // num = 5 * 4 * 3 * 2 * 1 * 1
    }

    return num
}

const someFuntion2 = (arr1) => {
    arr1.push(1).pop()
}
    for(let j = 1; i < arr1.length; j++){

    }
    for(let j = 1; i < arr1.length; j++){
        
    }
    for(let j = 1; i < arr1.length; j++){
        for(let j = 1; i < arr1.length; j++){
            for(let j = 1; i < arr1.length; j++){
        
            }
        }            
    }
// 1
// O(n)
// O(n)
// O(n^2)

// 1 + n + n + n^3 = n^3

// inserting
object.age = 22 // CONSTANT O(1) - time complexity
delete object.age // CONSTANT O(1) - time complexity

object.hasOwnProperty['name'] // LINEAR O(n) - time complexity
for(const prop in object){
    console.log(object[prop]) // LINEAR O(n) - time complexity
}

object.age // CONSTANT O(1) - time complexity

Object.keys(object) // LINEAR O(n) - time complexity
Object.values(object) // LINEAR O(n) - time complexity

const arr2 = [1, 2, 3, 4, 5]

arr2.push(8) // O(1)
arr2.unshift(8) // O(n)
arr2.pop() // O(1)
arr2.shift() // O(n)

const findNumber = arr2.find(num => num === 2) // O(n)
const getNumber = arr2[4] //O(1)

arr2.splice(1, 1, 5) // O(n)
arr2.reduce((total, num) => total + num, 0) // O(n)

