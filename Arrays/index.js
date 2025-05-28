//1. Largest element in an array
//Brute force solution
// let array = [10,87,90,90,23,100,54,2];
// let sortedArr = array.sort((a,b) => a - b) //2 10 23 54 87 90 90 100
// let largest = sortedArr[sortedArr.length - 1]
// console.log("largest element",largest);


// //OPTIMAL SOLUTION
// let max = array[0]
// for(let i=0; i <array.length; i++){
// if(array[i] > max){
//     max = array[i]
// }
// }
// //console.log("largest element",max);
// //TC -  O(n)
// //SC - O(1)


// //2. Find secong largest element in array.

// //Brute force solution
// //console.log("second largest element", sortedArr[sortedArr.length-2]);

// //better solution
// //sort it first and then apply loop 2 10 23 54 87 90 90 100
// let second_largest = -1
// for(let i = sortedArr.length-1; i>=0; i--){
// if(array[i] > second_largest && array[i] !== largest){
//  second_largest = array[i]
//  break
// }
// }
// //console.log("Second_laregest",second_largest)

// //TC - O(2n)
// //SC - O(1)


// //3. Find both largest and secong largest number
// //optimal solution
// let largestNum = array[0]
// let second_largest_num = -1

// for(let i=0; i< array.length;i++){
//     if(array[i] > largestNum){
//         second_largest_num = largestNum
//         largestNum = array[i]
//     }
//     if(array[i] < largestNum && array[i] > second_largest_num){
//         second_largest =array[i]
//     }
// }
// //console.log(largestNum, second_largest_num)
// //TC = O(n)
// //SC = O(2)



// //4. Check if the array is sorted
// let arr = [1,1,2,3,4,4]
// let sorted = true
// for(let i=0; i<arr.length-1; i++){
//     if(arr[i] > arr[i+1]){
//     sorted = false;
//     break;
//     }
// }
// //console.log(sorted)
// //TC = O(n)
// //SC = O(1)


// //5. Remove duplicates
// // let set = new Set(arr)
// // console.log(set)

// //brute force


// //better solution
// let uniqueArr = [];
// for(let i=0; i<arr.length; i++){
//     if(!uniqueArr.includes(arr[i])){
//         uniqueArr.push(arr[i])
//     }
// }
// console.log("better", uniqueArr)
// //TC = O(n)
// //SC = O(1)


// //optimal solution
// //using hash sort

// let duplicates = new Set()
// let seen = new Set()

// for(let i of arr){
//     if(seen.has(i)){
//         duplicates.add(i)
//     }
//     else{
//         seen.add(i)
//     }
// }
// let duplicatesArr = Array.from(duplicates)
// console.log("optimal", duplicatesArr)
// //TC = O(n)


//let nums = [1,1,2,3,4,4]

// function removeDuplicates(nums){
//     let j=0;
// for(let i =0; i<nums.length; i++){
//  if(nums[i] !== nums[j]){
//     j++
//     nums[j] = nums[i]
//  }
// }
//  return j+1
// }

// console.log(removeDuplicates(nums))
//TC - O(n)
//SC -O(1)


// let nums = [1,3,2,2,5,2]
// function removeElement(nums){ 
// let val = 3
// let j =0;

// for(let i = 0; i<nums.length; i++){
//     if(nums[i] !== val){
//         nums[j] = nums[i]
//         j++
//     }
// }
// return j;
// }
// console.log(removeElement(nums))
// //TC - O(n)
// //SC - O(1)

// let digits = [9]
// // digits[digits.length-1] += 1
// // console.log(digits)
// let n = digits.length;

// for(let i = n-1; i>=0; i--){
//     if(digits[i] < 9){
//         digits[i]++
//         break;
//     }else{
//         digits[i] = 0 
//     }
//     if(i===0){
//         digits.unshift(1)
//     }
// } 

// console.log(digits)
// //TC - O(n)    n-1
// //SC - O(1)