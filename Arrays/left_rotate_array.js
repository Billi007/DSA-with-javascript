//LEFT ROTATE ARRAY BY 1 PLACE
let array = [1, 2, 3, 4, 5, 6, 7];
let n = array.length;
// let temp = array[0]

// for(let i=1; i<n; i++){
//     array[i-1] = array[i]
// }
// array[n-1] = temp
// console.log(array)
//TC = O(n)
//SC = O(1)


//LEFT ROTATE ARRAY BY D PLACES
//BRUTE FORCE
// let d = 3
// let tempArr = [d]
// d = d % n;

// //put every d elements in tempArr
// for(let i=0; i<d; i++){
//   tempArr[i] = array[i]
// }
// //pick rest of elements and put it into first position
// for(let i = d; i <n; i++){
//   array[i-d] = array[i]
// }

// //pick temp elments and place it in the last index.
// //4 5 6 7 _ _ _
// for(let i = n-d; i<n;i++){
//   array[i] = tempArr[i- (n - d)]
// }
// console.log(array)
//TC = O(n+d)
//SC = O(d)


//Optimal solution
let d = 3;
let start = 0;
let end = n - 1;

function reverse(arr, start, end) {
  while (start <= end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

function rotateArray(arr, n, d) {
  reverse(arr, 0, d - 1);
  reverse(arr, d, n - 1);
  reverse(arr, 0, n - 1);
  return arr;
}
console.log(rotateArray(array, n, d));
//TC = O(2n)
//SC = O(1)
