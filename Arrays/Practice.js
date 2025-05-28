//1. Find Second Largest Element in an Array
//Brute force
let n = arr.length;           
// arr.sort((a,b)=> a-b)
// let second_largest = -1;
// //1 1 10 12 34 35

// for(let i=n-2; i>=0; i--){           //O(n)
// if(arr[i] !== arr[n-1]){
    //     second_largest = arr[i];
    //     break;
    // }
    // }
    // console.log(second_largest)
    // //TC - O(n log(n))
    // //Sc - O(1)
    
    
    
    
    //Better (two pass search)
    // let max = arr[0];
    // let second_largest = -1;
    // for(let i=0; i<n; i++){
        //   if(arr[i] > max){
            //     max = arr[i]
            //   }
            // }
            
            // for(let i=0; i<n; i++){
//     if(arr[i] > second_largest && arr[i] !== max){
//         second_largest = arr[i]
//     }
// }
// console.log(second_largest)
// //TC - O(2*n)
// //SC - O(1)


//optimal
let arr = [12, 35, 1, 10, 34, 1]     //O(n log n)
let max = -1
let Second_laregest = -1

