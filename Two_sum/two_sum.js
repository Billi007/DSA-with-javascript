let arr = [2,6,5,8,11]
let target = 1

//Brute force
// function twoSum(arr,t){
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === t) {
//                 return [i,j]
//             }
//         }
//     }
//     return [-1,-1] 
// }
// console.log(twoSum(arr,target))
//TC - O(n2)
//Sc - O(1)



//better solution (HASHING)
// function sum(arr,t){
// let hash = {}

// for(let i =0; i<arr.length;i++){
// let moreRequired = t - arr[i]

// if(moreRequired in hash){
//     return [hash[moreRequired], i];
// }
//  hash[arr[i]] = i
// }
// return []
// }
// console.log(sum(arr,target))
//TC - O(n)
//Sc - O(n)


//optimal
let sort = arr.sort((a,b) => a-b) //2 5 6 8 11

function TwoSum(arr,t){
let right = arr.length - 1;
let left = 0

while(left < right){
let sum = arr[left] + arr[right]
if(sum == t){
    return true
}
else if(sum < t) left++;
else right--;
}
return false
}
console.log(TwoSum(sort,target))
//TC - O(n) + O(n log n)
//SC - O(1)