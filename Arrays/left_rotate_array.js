//LEFT ROTATE ARRAY BY 1 PLACE
// let temp = arr[0]

// for(let i=1; i<n; i++){
//     arr[i-1] = arr[i]
// }
// arr[n-1] = temp
// console.log(arr)

//TC = O(n)
//SC = O(1)


//LEFT ROTATE ARRAY BY D PLACES
//BRUTE FORCE
// let tempArr = [d]
// d = d % n;

// for (let i = 0; i < d; i++) {
//   tempArr[i] = arr[i];
// }

// for (let i = d; i < n; i++) {
//   arr[i - d] = arr[i];
// }
// // 4 5 6 7 _ _ _
// //put temp in yout last index
// let j = 0;
// for (let i = n - d; i < n; i++) {
//   arr[i] = tempArr[i - (n - d)];
// }
//TC = O(n+d)
//SC = O(d)

//Optimal solution
let array = [1, 2, 3, 4, 5, 6, 7];
let n = array.length;
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
