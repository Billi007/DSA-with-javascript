// find the number that appears only once and other number twice.
let arr = [1,1,2,2,3,4,4];
let n = arr.length;

// //brute force
// let ans;
// for(let i=0; i< n; i++){
//     let count = 0;
//     for(let j =0; j<n; j++){
//      if(arr[j] == arr[i]){
//         count++
//      }
//     }
//     if(count == 1){
//         ans = arr[i]
//     }
// }
// console .log(ans)   
//TC - O(n2) 
//SC - O(1)
                

//better solution  
// let maxElem = arr[0]
// let ans;

// for(let i =0; i< n; i++){
//     maxElem = Math.max(arr[i])
// }

// let hash = new Array(maxElem).fill(0);
// for(let i =0; i<n; i++){
//     hash[arr[i]]++
// }

// for(let i=1; i<hash.length; i++){
//     if(hash[arr[i]] == 1){
//         ans = arr[i]
//     }
// }
// console.log(ans)
//TC - O(3n)
//SC - O(maxNum)

//optimal solution