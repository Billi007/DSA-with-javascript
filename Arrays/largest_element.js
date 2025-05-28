//Find second largest element.
//brute force
// let arr = [1,2,4,5,7,7]
// let n = arr.length;

// let largest = arr[n-1];
// let second_largest = -1
// for(let i = n-2; i >=0; i--){
//     if(arr[i] !== largest){
//         second_largest = arr[i];
//         break;
//     }
// }
// console.log(second_largest)
//TC - O(n log n)
//SC - O(1)



//better
let arr = [1,2,4,7,7,5];
let n =arr.length
// let largest = arr[0];
// let second_largest = -1;

// //Find largest
// for(let i=0; i<n; i++){
//  if(arr[i] > largest){
//     largest = arr[i]
//  }
// }

// //Find second largest
// for(let i = 0; i< n; i++){
// if(arr[i] > second_largest && arr[i] !== largest){
//     second_largest = arr[i]
// }
// }
// console.log(second_largest)
//TC - O(2n)
//SC - O(1)


//optimal 
let largest = arr[0]
for(let i = 0; i<n;i++){
    if(arr[i] > largest){
        second_largest = largest
        largest = arr[i]
    }else if(arr[i] !== largest && arr[i] > second_largest){
        second_largest = arr[i]
    }
}
console.log(largest)
console.log(second_largest)
//TC - O(n)
//SC - O(1)   