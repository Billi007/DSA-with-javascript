let arr = [1, 2, 4, 5];
let n = arr.length;
//Find missing numbers.

//Brute solution
// let ans;
// let isExist;
// for(let i =1; i<n; i++){
//     isExist = 0;
//     for(let j =0; j<n-1; j++){
//         if(arr[j] == i){
//             isExist = 1
//             break;
//         }
//     }
//     if(isExist == 0){
//         ans = i
//     }
// }
// console.log(ans)
//TC - O(n2)
//SC - O(1)

//Better solution
// let hash = new Array(6).fill(0)
// for(let i = 0; i<n; i++){
//       hash[arr[i]] = 1
// }

// for(let i = 1; i < hash.length; i++){
//     if(hash[i] == 0){
//    ans = i
//     }
// }
// console.log(hash)
//TC - O(2n)
//SC - O(n)

//1st optimal solution

// let num = n+1;
// let sum = num * (num + 1)/2

// let s=0
// for(let num of arr){
//     s += num
// }

// let result = sum - s
// console.log(result)
//TC - O(n)
//SC - O(1)



//2nd optimal solution
