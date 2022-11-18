let long = 'omgomdsfajosijomg'; 
let short = 'omg'; 

// create a counter
// loop over the longer string
// loop over the shorter string
// if the characters don't match, break out of the inner loop
// if the characters do match, keep going
// if you complete the inner loop and find a match, increment the count
// return the count

// const naiveSearch = (long, short) => {
//     let count = 0; 
//     for (let i = 0; i < long.length; i++) {
//         for (let j = 0; j < short.length; j++) {
//             if (long[i] !== short[j]) break; 
//             if (j === short.length - 1) count++; 
//         }
//     }

//     return count; 
// }

// const arr1 = [1, 2, 4, 5, 6, 7]

// const binaryRecursiveSearch = (arr, target, start = 0, end = arr.length - 1) => {
//   if (start > end) return -1
//   let middleIndex = Math.floor((start+end) / 2);
  
//   if(arr[middleIndex] === target) {return middleIndex}
//   else if (arr[middleIndex] > target){
//     end = middleIndex - 1
//     return binaryRecursiveSearch(arr, target, start, end)
//   } else{
//     start = middleIndex + 1
//     return binaryRecursiveSearch(arr, target, start, end)
//   }
  
// } 

const binaryIterativeSearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1
  
  while (start < end ) {
    let middleIndex = Math.floor((start + end) / 2)
    if (target === arr.middleIndex) {
      return middleIndex;
    } else if(target < arr[middleIndex]){
      end = middleIndex - 1
    } else {
      start = middleIndex + 1
    }
  }
  
  return  1
}

const arr1 = [1, 2, 4, 5]
console.log(binaryIterativeSearch(arr1, 2))