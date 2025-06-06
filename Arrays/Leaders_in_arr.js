let arr = [10, 22, 12, 3, 0, 6];
let temp = [];


// //brute force
// for(let i =0; i<arr.length; i++){
//     let leader = true;
//     for(let j = i+1; j <arr.length; j++){
//         if(arr[j] > arr[i]){
//             leader = false;
//             break;
//         }
//     }
//     if(leader == true){
//        temp.push(arr[i])
//     }
// }
// console.log(temp);
//TC - O(n2)
//SC - O(n) at the worst case 


//optimal
let max = -Infinity;
for(let i = arr.length-1; i>=0; i--){
    if(arr[i] > max){
        temp.push(arr[i])
        max = arr[i]
    }
}
console.log(temp)
//TC - O(n log n)
//SC - O(1)