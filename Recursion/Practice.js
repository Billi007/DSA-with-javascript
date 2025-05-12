//Write a recursive function to calculate the factorial of a number.
// function factorial(n){
//     if(n == 1 || n == 0) return 1;
//     return n * factorial(n-1)
// }
// console.log(factorial(5))

// //Write a recursive function to calculate the sum of digits of a number.
// function sumOfDigit(n){
//     if(n == 1 || n == 0) return 1;
//     return n * sumOfDigit(n-1)
// }
// console.log(sumOfDigit(5))


//Print numbers from n to 1 recursively.
// function reverseNums(n,i){
// if(i>n) return;
// reverseNums(n, i+1)
// console.log(i)
// }
// reverseNums(5,1);


//Given an array of numbers, you are required to calculate the mean (average) using recursion.
// let array = [2, 4, 6, 8, 10];
// let n = array.length;
// function calculateMean(arr,i,sum=0){
// if(i == arr.length) return Math.round(sum/arr.length);
// return calculateMean(arr,i+1, sum + arr[i])
// }
// console.log(calculateMean(array,0));


//Given a number n, find sum of first n natural numbers.
// function sumOfNaturalNums(n){
// if(n == 0) return n;
// return n + sumOfNaturalNums(n-1);
// }
// console.log(sumOfNaturalNums(3))


//Given a string, the task is to print the given string in reverse order using recursion.
// let string = "hello world";

// function reverseStr(str){
// if(str == "") return "";
// return reverseStr(str.substring(1)) + str.charAt(0)
// }
// console.log(reverseStr(string));

//Given a string calculate length of the string using recursion.
// function lenOfStr(str,i){
// if(str.length == i) return i;
// return lenOfStr(str, i+1)
// }
// console.log(lenOfStr("toe",0))


// //Given a number, we need to find sum of its digits using recursion. 
// function sumOfDigit(n){
// if(n < 10) return n;
// if (n > 0){
// return (n % 10) + sumOfDigit(Math.floor(n/10))
// }
// }
// console.log(sumOfDigit(489))

//Given an array arr, we need to find the sum of its elements using Tail Recursion Method.

//Given an array of integers arr, the task is to find the minimum and maximum element of that array using recursion.
// let array = [1, -5, 8, 6];
// let max=0
// let min=0;

// function findMaxAndMin(arr,i=0,max,min){
// if(i == arr.length) return {max: -Infinity, min: Infinity};
// let newMax = Math.max(max,arr[i]);
// let newMin = Math.max(min,arr[i]);
// return findMaxAndMin(arr,i+1,newMax,newMin)
// };
// console.log(findMaxAndMin(array,0,max,min))
//              PENDING


//Given a string, write a recursive function that checks if the given string is a palindrome.
// let string = "racecars";

// function checkPalindrome(str,i=0){
// if(i == Math.floor(str.length/2)) return true;
// if(str[i] == str[str.length-i-1]){
// return checkPalindrome(str, i+1);
// }
// else return false;
// }
// console.log(checkPalindrome(string));


//Given a queue, the task is to sort it using recursion without using any loop.
// let array = [10,7,16,9,20,5];

// function sortQueue(arr, n=arr.length,i=0){
// if(n == 0) return arr;
// if(i >= n-1){
//     return sortQueue(arr, n-1,0)
// }

// if(arr[i] > arr[i+1]){
// [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
// }
// return sortQueue(arr,n,i+1)
// }
//  console.log(sortQueue(array))

//