//! Problem 1: In 3-4 sentences, please explain what Big O Notation is. 
    // Big O Notationg is used to decribe the time complexity of algorithms. It also helps us to understand the complexity of operations.
    // It focus on the trends of the operation. By this we can know in advance how well the algorithm will perform.

//! Problem 2: For each of the time complexities shown below: 
//? Rank 1 Constant O(1)
    // Always take same amount of time to be executed.The execution time is independent to the size of the input.
    // One good example for this is the push() and pop() operations.
        //? Example
            // arr.push(5)
            // arr.pop(5)
            // const num = arr[4]

//? Rank 2 Log O(log n)
    // The input size grows, the number of operations grows very slowly.
        //? Example
            // const logTime = (arr) => {
            //     let numberOfLoops = 0
            //     for(let i =1; i < arr.length; i*= 2){
            //         numberOfLoops++
            //     }
            //     return numberOfLoops
            // }

//? Rank 3 Linear O(n)
    // Linear complexity is when the length if the input data is linearly increases. 
    // It has 1:1 relationship between data size and time completion.
        //? Example
            // for(let i = 0; i < arr.length; i++){
            //     console.log(arr1[i])
            // }

//? Rank 4 Quadratic O(n^2)
    // Increase the size of the inout by a multiplication factor. Quadratic complexity is often seen in a nested loop.
        //? Example
            // for(let i = 0; i < arr1.length; i++){
            //     for(let j = 1; i < arr1.length; j++){ 
            //     }
            // }

//? Rank 5 Factorial O(n!) 
    // Factorial is the worst complexity. The number increases factorially (n!) to our input size.
        //? Example
            // const factorial = (n) => {
            //     let num = n;
            //     if(n === 0) return 1
            //     for(let i = 0; i < n; i++){
            //         num = n * factorial(n -1)
            //     }
            //     return num
            // }

//! Problem 3: Name 3 reasons why we care about Big O and we care about code performance. 
    // - scalability
    // - time is money
    // - demonstrate code competency in interviews

//! Problem 4: What is the problem of using a time method such as performance.now() to measure how “fast” a code runs on our machines. 
    // We use performance.now() to measure how "fast" a code runs. It's timed like a stopwatch. The problem of using time method is we have
    // different timed output. This is because of the differences of a computers performance.

//! Problem 5: Given the following piece of code: 
    //? Explain what the TOTAL time complexity is 
        // 1 + n + n + n^2
    //? Explain what the CONSOLIDATED time complexity is
        // n^2
        
        // const someFunction = (arr1) => {
        //     arr1.push(1).pop()                          //? 1
            
        //     for (let i = 0; i < arr1.length; i++) {     //? n
        //         console.log('do something 2')
        //     }
        //     for (let i = 0; i < arr1.length; i++) {     //? n
        //         console.log('do something 3')
        //     }
 
        //     for (let i = 0; i < arr1.length; i++) {     //? n^2
        //         for (let i = 0; i < arr1.length; i++) {
        //             console.log('do something 3')
        //         }
        //     }
        // }

//! Problem 6: Given the following piece of code: 
    //? Explain what the TOTAL time complexity is 
        // 1 + n + n^3
    //? Explain what the CONSOLIDATED time complexity is
        // n^3

        // const someFunction1 = (arr1) => {
        //     let sum = arr1[1] + arr[2]                          //? 1
            
        //     while (condition) {                                 //? n * 1 = 1n --> n
        //         sum = arr[5] + arr[7]                           
        //     }
            
        //     for (let i = 0; i < arr1.length; i++) {             //? n * n * n = n^3                 
        //         for (let i = 0; i < arr1.length; i++) {
        //             for (let i = 0; i < arr1.length; i++) {
        //                 console.log('do something 3')
        //             }
        //         }
        //     }
        // }

//! Problem 7: Please explain in 3-5 sentences why we can ignore constants and consolidate our time complexities.
    // Constants are ignored since they don't really matter. Also, it doesn't matter when a big input is applied.
    // Since the heavy or worse time is going to have a greater impact. 

//! Problem 8: In 2-3 sentences, please explain what space complexity is and why we care. 
    // A total amount of memory space taken by an algorithm. This helps us determine how effective the algorithm. 
    // Using Both time and space complexity can makes us competent programmers. 

//! Problem 9: Given the following data TYPES, label what the space complexity is for each one: 
    // - Boolean   //? Constant
    // - Undefined //? Constant
    // - Null      //? Constant
    // - Numbers   //? Constant
    // - String    //? Linear
    // - Array     //? Linear
    // - Object    //? Linear

//! Problem 10: Give two reasons when you should use a array and when you should use a object.
    //        ARRAY               |          OBJECT
    // - Fast access to elements.      - Fast access to elements are not need. 
    // - Need order.                   - Need ordering is not a must.

//!  Problem 11:Given the following object methods, label what the TIME complexity is for each one: 
    // const obj = {                       
    //     name: 'tony'
    //    }
    
    //    //inserting
    //    obj.age = 44;                    //? 1
    //    //removing 
    //    delete obj.age;                  //? 1
    //    //searching 1
    //    obj.hasOwnProperty['name']       //? 1
    
    //    //searching 2
    //    for (const prop in obj) {        //? n
    //     console.log(obj[prop])
    //    }
    
    //    //accessing
    //    obj.age //44                     //? 1
    //    //retrieving keys
    //    Object.keys(obj)                 //? 1
    //    //retrieving values
    //    Object.values(obj)               //? 1

//! Problem 12: Given the following array methods, label what the TIME complexity is for each one:
    // const arr2 = [1, 2, 3, 4, 5, 6, 7];
    
    // //inserting 1
    // arr2.push(8)                                               //? 1
    // //inserting 2
    // arr2.unshift(0)                                            //? n
    // //removing 1
    // arr2.pop()                                                 //? 1
    // //removing 2
    // arr2.shift()                                               //? n

    // //searching 1
    // const findNumber = arr2.find(num => num === 2)             //? n
    // //searching 2
    // for (let i = 0; i < arr2.length; i++) {                    //? n * n = n^2
    //     if (arr2[i] === 2) {                                  
    //         return arr2[i]
    //     }
    // }   

    // //retrieving 
    // const getNumber = arr2[3]                                  //? 1                            
    // //method 1
    // const double = arr2.map(num => num * 2)                    //? n
    // //method 2
    // const removeAndAddNewNumber = arr2.splice(1, 1, 5)         //? n
    // //method 3
    // const getSum = arr2.reduce((total, num) => total + num, 0) //? n 
    // //method 4
    // for (const num of nums) {                                  //? n
    //     console.log(num * 2)
    // }
    // //method 5
    // const convertToString = arr2.join(' ')                     //? n
    // //method 6
    // const reversed = arr2.reverse();                           //? n

//! Problem 13: For each one of these code blocks, please identify the time & space complexity and explanation of why it is.
    //? Problem 1: 
        // Time Complexity: 1n --> O(n) LINEAR TIME COMPLEXITY
        // Space Complexity: O(1) CONSTANT SPACE COMPLEXITY
        // Explanation: It has a for loop that is a linear and a if statement that is a constant.
        // The space complexity is a constant since we are just comparing and there is no changes made in the data.

    // function findFirstIndexOfNumber(number, array) {    //? 1 space
    //     for (let i = 0; i < array.length; i++) {        //? n * 1  = 1n time
    //         if (array[i] === number) {              
    //             return i;                               
    //         }
    //     }
    //     return -1                                      
    //     }

    //? Problem 2: 
        // Time Complexity: 1n --> O(n) LINEAR TIME COMPLEXITY
        // Space Complexity: O(n) LINEAR SPACE COMPLEXITY
        // Explanation: It has a for each loop that is a  linear and a if statement that is a constant.
        // The space complexity is a linear since we stored the given number from a array to a new array 
        // that could possibly make the new array growing.

    // function findEachIndexOfNumber(number,array) {      //? n space
    //     let arrayOfIndexes = [];                        
    //     array.forEach(function(element, index) {        //? n * 1 = 1n time
    //         if (element === number) {                  
    //             arrayOfIndexes.push(index);
    //         }
    //     });
    //     return arrayOfIndexes;
    // }

    //? Problem 3: 
        // Time Complexity: 1 + 1 + 1 = 3 (1) --> O(1) CONSTANT TIME COMPLEXITY
        // Space Complexity: O(1) CONSTANT SPACE COMPLEXITY
        // Explanation: It has a 3 constant time complexity of if...else if...else statement.
        // The space complexity is a constant since we only compare if the last number is higher, lower or neither to the first number.
        // We did not made a new storage of data or let the previous data grow or change.

    // const array = [36, 14, 1, 7, 21];
    // function higherOrLower(array) {                         //? 1 space
    //     if (array[array.length -1 ] > array[0]) {           //? 1 time
    //         return "Higher";
    //     }else if (array[array.length -1 ] < array[0]) {     //? 1 time
    //         return "Lower";
    //     } else {
    //         return "Neither";                               //? 1 time
    //     }
    // }

    //? Problem 4: 
        // Time Complexity: 1n --> O(n) LINEAR TIME COMPLEXITY
        // Space Complexity: O(1) CONSTANT SPACE COMPLEXITY
        // Explanation: It has a for...loop that is a linear and inside of the for..loop is a constant.
        // The space complexity is a constant since we are just adding all the index value and there is no changes made in the data.

    // const array = [1,2,3,4,5,6,7,8];
    // function determineSumOfSequentialArray(array) {     //? 1 space
    //     let sum = 0;
    //     for (let i = 0; i < array.length; i++) {        //? n * 1 = 1n time
    //         sum += array[i];                            //? 1 time
    //     }                  
    //     return sum;
    // }

    //? Problem 5: 
        // Time Complexity: 1 --> O(1) CONSTANT TIME COMPLEXITY
        // Space Complexity: O(1) CONSTANT SPACE COMPLEXITY
        // Explanation: It has a return of one constant time complexity. The space complexity is constant. 
        // We only calculate the total sum of the index value.

    // const array = [1,2,3,4,5,6,7,8];
    // function determineSumOfSequentialArray(array) {     //? 1 space
    //     return array.length * (array.length + 1)/2;     //? 1 time
    // }
    
    //? Problem 6: 
        // Time Complexity: 1 + 1 + 1 + 1 + log n + 1 + log n = 5 logn (log n) --> O(log n) LOG TIME COMPLEXITY 
        // Space Complexity: O(1) CONSTANT SPACE COMPLEXITY
        // Explanation:  It has a return of 5 constant and 2 log n. The space complexity is constant
        // for it is only returning a number.

    // function searchSortedArray(number, array, beginIndex = 0, endIndex = array.length - 1) {    //? 1 space
    //     let middleIndex = Math.floor((beginIndex + endIndex)/2);                                //? 1 time
    //     if (array[middleIndex] === number) {                                                    //? 1 time
    //         return middleIndex;
    //     } else if (beginIndex >= endIndex) {                                                    //? 1 time
    //         return -1;
    //     } else if (array[middleIndex] < number) {                                               //? 1 time
    //         beginIndex = middleIndex + 1; b
    //         return searchSortedArray(number, array, beginIndex, endIndex);                      //? log n time
    //     } else if (array[middleIndex] > number) {                                               //? 1 time
    //         endIndex = middleIndex - 1;
    //         return searchSortedArray(number, array, beginIndex, endIndex);                      //? log n time
    //     }
    // }
    
    //? Problem 7: 
        // Time Complexity: n^2 + 1 = 1n^2 (n^2) --> O(n^2) QUADRATIC TIME COMPLEXITY
        // Space Complexity: O(n) LINEAR SPACE COMPLEXITY
        // Explanation: It has a one quadratic nested forEach...loop and one constant that compares if its equal. 
        // The space complexity is linear since it compares the 2 data if they have similar index value and store 
        // the similar index value to a new data of pairs.

    // const array1 = [3, 7, 9, 12, 15, 18, 32];
    // const array2 = [3, 3, 7, 41, 76];
    // function compareArrays(array1, array2) {        //? n space
    //     let arrayOfPairs = [];
    //     array1.forEach(function(e, i) {             //? n * n = n^2 time
    //         array2.forEach(function(e2, i2) {
    //             if (e === e2) {                     //? 1 time
    //                 arrayOfPairs.push([i, i2]);
    //             }
    //         });
    //     });
    //     return arrayOfPairs;
    // }

    //? Problem 8: 
        // Time Complexity: 1 + 1 + 1 + n^2 + 1 + n + 1 = 5n^2 (n^2) --> O(n^2) QUADRATIC TIME COMPLEXITY
        // Space Complexity: 1 --> O(1) CONSTANT SPACE COMPLEXITY
        // Explanation: It has a quadratic time complexity for this is heaviest complexity in the program.
        // The space complexity is constant for we only swap index value and the data remains at is. 

    // function sortByValue(array){                        //? 1 space
    //     function swap(array, index1, index2){          
    //         let temporaryValue = array[index1];         //? 1 time
    //         array[index1] = array[index2];              //? 1 time
    //         array[index2] = temporaryValue;             //? 1 time
    //     }
    //     let count = 1;
    //     while (count < array.length) {                  //? n * n = n^2 time
    //         let swapCount = 0;
    //         for (let i=0; i<array.length-count; i++) { 
    //             if (array[i] > array[i+1]) {            //? 1 time
    //                 swap(array, i, i+1);                //? n time 
    //                 swapCount++;                        //? 1
    //             }
    //         }
    //         count++;
    //     }
    //     return array;
    // }

    //? Problem 9: 
        // Time Complexity: n^2 + 1 = 1n^2 (n^2) --> O(n^2) QUADRATIC TIME COMPLEXITY
        // Space Complexity: O(n) LINEAR SPACE COMPLEXITY
        // Explanation: It has two linear that made it equal to quadratic and one constant that push the element to a new data storage. 
        // The space complexity is linear since it compare two data and collect the same elements of the data and store it to a new data.

    // function returnDupes(array, array2) {       //? n space
    //     let dupeArray = [];
    //     array.forEach(function(element) {       //? n * n = n^2 time
    //         if (array2.includes(element)) {
    //             dupeArray.push(element);        //? 1 time
    //         }
    //     });
    //     return dupeArray;
    // }
    
    //? Problem 10: 
        // Time Complexity: n + 1 + n + 1 = 4n (n) --> O(1) LINEAR TIME COMPLEXITY
        // Space Complexity: O(1) CONSTANT TIME COMPLEXITY
        // Explanation: It has a two constant that compare the elements and one that adds value Also has two linear that .filter and .reduce. 
        // The space complexity is constant since it only filter elements that are > 5 and < 20 then sum everything left.

    // function sumFilteredData(array) {                       //? 1 space
    //     return array.filter(function(element) {             //? n time 
    //         return ((element > 5) && (element < 20))        //? 1 time
    //     }).reduce(function(valueToAdd, currentValue) {      //? n time
    //         return valueToAdd + currentValue;               //? 1 time
    //     }, 0);
    // }