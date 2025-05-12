// let array = [4,5,4,2,1,1,3,2];
// let hashTable = new Array(10).fill(0);

// for(let i = 0; i < array.length; i++){
//  if(array[i] > 0 && array[i] < hashTable.length){
//     hashTable[array[i]] += 1;
//  }else{
//     hashTable[array[i]] = 1;
//  }
// }

// let result1 = {};
// for(let i=0; i<hashTable.length; i++){
//     if(hashTable[array[i]] > 0){
//         result1[hashTable[array[i]]] = array[i];
//     }
// }
// console.log(result1)

//BASIC METHOD WITH FOR LOOP
// let count = {};
// for(let i=0; i<array.length; i++){
//     let num= array[i];
//     if(count[num]){
//         count[num]++;
//     }else{
//         count[num] = 1;
//     }
// }
// console.log(count)

// let str = 'Hello World';
// let hash = new Array(256).fill(0);

// for(let i=0; i<str.length; i++){
//     let char = str.charCodeAt(i)
//     if(char > 0 && char < hash.length){
//         hash[char] += 1;
//     }
// }
// let result = {};
// for(let i=0; i<hash.length; i++){
//     if(hash[i] > 0){
//         result[String.fromCharCode(i)] = hash[i];

//     }
// }

// console.log(result)

//FOR LOWER CASE LETTERS
// let str = 'hello world';
// let hash = new Array(97).fill(0);

// for(let i=0; i<str.length; i++){
//    let charCode = str.charCodeAt(i) - 97;
//    if(charCode > 0 && charCode < hash.length){
//       hash[charCode] += 1;
//    }
// }
// let result = {};

// for(let i=0; i<hash.length; i++){
//     if(hash[i] > 0){
//     result[String.fromCharCode(i+ 97)] = hash[i];
//     }
// }
// console.log(result)

//FOR UPPER CASE LETTERS
// let str = 'HELLO WORLD';
// let hash = new Array(65).fill(0);

// for(let i=0; i<str.length; i++){
//    let charCode = str.charCodeAt(i) - 65;
//    if(charCode > 0 && charCode < hash.length){
//       hash[charCode] += 1;
//    }
// }
// let result = {};

// for(let i=0; i<hash.length; i++){
//     if(hash[i] > 0){
//     result[String.fromCharCode(i+ 65)] = hash[i];
//     }
// }
// console.log(result)

// //BASIC METHOD WITH FOR EACH LOOP
// let str = "hello world";
// let count = {};

// for(let i=0; i<str.length; i++){
//    if(count[str[i]]){
//     count[str[i]]++;
//    }else{
//     count[str[i]] = 1;
//    }
// }
// console.log(count)


//Find occurence of each element in an array using MAP
// let arr = [1, 2, 3, 1, 3, 2, 12];
// let map = new Map();
// for (let i = 0; i < arr.length; i++) {
//   if (map.has(arr[i])) {
//     map.set(arr[i], map.get(arr[i]) + 1); //map.get =>  gets the current count
//     //map.set => updates the count by adding 1
//   } else {
//     map.set(arr[i], 1);
//   }
// }
// console.log(map);


//Find occurence of each characters in an array using MAP (ORDERED)
// let str = "hello world";
// let map = new Map();

// for(let i=0; i<str.length; i++){
//     if(map.has(str[i])){
//         map.set(str[i], map.get(str[i]) +1);
//     }else{
//         map.set(str[i], 1)
//     }
// }
// console.log(map)


//Find occurence of each characters in an array using OBJ (UNORDERED)
// let str = "hello world";
// let map = new Object();

// for(let i=0; i<str.length; i++){
//     if(map.hasOwnProperty(str[i])){
//         map[str[i]] += 1 
//     }else {
//         map[str[i]] = 1
//     }
// }
// console.log(map)

//Find occurence of each element in an array using Object (UNORDERED)
// let arr = [1,5, 2, 3, 1, 3, 2, 12];
// let map = new Object();
// for (let i = 0; i < arr.length; i++) {
//   if (map.hasOwnProperty(arr[i])) {
//       map[arr[i]] += 1;
//   } else {
//     map[arr[i]] = 1;
//   }
// }
// console.log(map);


//Homework
//Given an array of size N. Find the highest and lowest frequency element.
// let arr = [1, 2, 5,5,3,3, 3,5, 1,5];
// let hash = new Array(6).fill(0);
// let max=0;
// let min=Infinity;
// let maxKeys = {}
// let minKeys = {}

// for(let i=0; i<arr.length; i++){
//         hash[arr[i]] += 1;

//     if(hash[arr[i]] > max){
//         max = hash[arr[i]];
//         maxKeys = arr[i];
//     }
// }

// for(let i=0; i < hash.length; i++){
//     if(hash[i] > 0 && hash[i] < min){
//         min = hash[i];
//         minKeys = i;
//     }
// }

// console.log("Maxkeys :", maxKeys, "minKeys :", minKeys)


//Given two arrays a[] and b[] of size m and n respectively
//the task is to determine whether b[] is a subset of a[]. 
// Both arrays are not sorted, and elements are distinct.

// let a = [11, 1, 13, 21, 3, 7];
// let b = [5,8,6,9,3];
// let hash = new Set(a);
// let isSubset;

// for(let i of b){
//     if(!hash.has(i)){
//       isSubset = false
//     }
//     else isSubset = true
// }

// console.log(isSubset)

//Given a string s of lowercase English letters, the task is to find the first non-repeating character. 
//If there is no such character, return ‘$’.
// let s = "geeksforgeeks";
// let hash = new Array(26).fill(0);
// let result = -1;

// for(let i=0; i <s.length; i++){
//     let charCode = s.charCodeAt(i) - 97;
//     hash[charCode] += 1;
// }

// for(let i=0; i <s.length; i++){
//     let charCode = s.charCodeAt(i) - 97;
//     if(hash[charCode] == 1){
//         result = s[i];
//         break
//     }
// }
// console.log(result)


//Given an array, arr[0..n-1] of distinct elements and a range [low, high], 
//find all numbers that are in a range, but not the array. The missing elements should be printed in sorted order.
//BRUTE FORCE METHOD
// let a = [10, 12, 11, 15]
// let low = Math.min(...a);
// let high = Math.max(...a);
// let missing = [];

// for(let i =low; i <= high; i++){
//     if(!a.includes(i)){
//         missing.push(i);
//     }
// }
// console.log(missing)


//Given an array arr[] of length N, The task is to count all distinct elements in arr[].
// let array = [10, 20, 20, 10, 30, 10, 40]
// let hash = new Array(41).fill(0);
// let count =0

// for(let i=0; i <array.length; i++){
//     if(array[i] > 0 && array[i] < hash.length){
//         if(!hash[array[i]]){
//             hash[array[i]] = 1;
//             count++;
//         }
//     }
// }
// console.log(count)
// // console.log(hash)

// let str = "abcd"
// let hash = new Array(26).fill(0);

// for(let i=0; i<str.length;i++){
//     let charCode = str.charCodeAt(i) - 97;
// }console.log(hash)

//Remove duplicates from an array
let arr = [5,4,2,7,2,5];
let hash = new Set();
let result = [];

for(let i of arr){
if(!hash.has(i)){
    hash.add(i);
    result.push(i);
}
}
console.log(result)