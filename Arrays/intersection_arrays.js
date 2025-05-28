//Intersection of two sorted arrays.


//Brute force (hashing)
// let intersectionArr = []
// let visitedArr = new Array(arr2.length).fill(0)
// let i=0; 
// let j=0

// while(i< arr1.length && j < arr2.length){
    // if(arr1[i] == arr2[j] && visitedArr[j] == 0){
//     intersectionArr.push(arr1[i])
//     visitedArr[j] = 1
//     i++
//     j++
// }else if(arr2[j] > arr1[i]){
    //     i++
// }else j++
// }
// console.log(intersectionArr)
// //TC - O(n1 * n2)        (n1 = length of arr1, n2 = length of arr2)
// //SC - O(n2)



//optimal solution
let arr1 = [1, 2, 2, 3, 3, 4, 5, 6];
let arr2 = [2, 3, 3, 5, 6, 6, 7];
let unionArr = []
let i=0;
let j=0;

while(i < arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
        i++
    }else if(arr2[j] < arr1[i]){
        j++
    }else {
        unionArr.push(arr1[i])
      i++;
      j++;
    }
}
console.log(unionArr)
//TC - O(n1+n2)          (n1 = length of arr1, n2 = length of arr2)
//SC - O(1)