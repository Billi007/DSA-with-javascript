//Reverse an array
//method-1
// let data = [2,5,8,4,3]
// let end = data.length - 1;
// function reverseArr(arr, i ,l){
//     if(i >= l) return arr;
//     [arr[i], arr[l]] = [arr[l], arr[i]];
//     return reverseArr(arr,i+1, l-1)
// }
// console.log(reverseArr(data, 0, end));

//method-2
let data = [2,5,8,4,3]
let N = data.length;
function reverseArr(i,arr,n){
  if(i >= n/2){
    return;
}
[arr[i], arr[n-i-1]] = [arr[n-i-1],arr[i]]
reverseArr(i+1, arr, n)
}
reverseArr(0,data,N)
console.log(data)