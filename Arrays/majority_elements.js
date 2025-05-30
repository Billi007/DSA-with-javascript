let arr = [2, 2, 3, 3, 1, 2, 2];
let n = arr.length;
let mid = Math.floor(arr.length / 2);
let maxNum = Math.max(...arr);
//let elem = -1;

//brute force
// for(let i=0; i<arr.length; i++){
//  let count = 0;
//  for(let j=0; j<arr.length; j++){
//    if(arr[i] == arr[j]){
//     count++
//    }
//  }
//  if(count > mid){
//     elem = arr[i]
//  }
// }
// console.log(elem)
//TC - O(n2)
//SC - (1)

//better solution
// let hash = new Array(max+1).fill(0)

// for(let i=0; i<n; i++){
//   hash[arr[i]]++
// }
// for(let i=0; i<hash.length; i++){
//     if(hash[arr[i]] > mid){
//         elem = arr[i]
//     }
// }
// console.log(elem)
//TC - O(n log n) + O(n)
//SC - (n)



//optimal  (Boyer-Moore Voting Algorithm)
function majorityElement(arr,mid) {
  let count = 0;
  let elem;
  for (let i = 0; i <  arr.length; i++) {
    if (count == 0) {
      count = 1;
      elem = arr[i];
    } else if (arr[i] == elem) {
      count++;
    } else {
      count--;
    }
  }

  let count1 = 0
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] == elem) count1++
}
if (count1 > mid) {
  return elem;
}
  return -1;
}
console.log(majorityElement(arr,mid));
//TC - O(n)
//SC - O(1)