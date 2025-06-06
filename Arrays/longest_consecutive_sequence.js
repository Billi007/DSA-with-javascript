let arr = [102,4,100,1,101,3,2,1,1];
let n = arr.length;

// //brute force
// function ls(arr,num){
// for(let i=0;i<arr.length; i++){
//    if(arr[i] == num) return true
// }
// return false
// }

// function longestConsecutive(arr){
// let longest = 1;
// let x;
// let count = 0;

// for(let i=0;i<arr.length; i++){
//     x = arr[i];
//     count = 1
// }

// while(ls(arr,x+1) == true){
//     x++;
//     count++;
// }
// return Math.max(longest,count)
// }

// console.log(longestConsecutive(arr))
//TC - O(n2)
//SC - O(1)