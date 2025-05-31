let arr = [-1,2,3,4,-3,1]
let n = arr.length

//Brute force
// let pos = [];
// let neg = [];
// for(let i =0 ;i<arr.length; i++){
    // if(arr[i] < 0 ){
        //     neg.push(arr[i])
        // }else{
//     pos.push(arr[i])
// }
// }

// for(let i =0; i<arr.length/2; i++){
    // arr[2*i] = pos[i]
    // arr[2*i+1] = neg[i]
// }
// console.log(arr)

//TC - O(2n) 
//Sc - O(n)


//optimal solution
// let temp =[]
// let pos = 0
// let neg = 1
// for(let i =0; i<n;i++){
// if(arr[i] < 0){
//     temp[neg] = arr[i]
//     neg += 2
// }else{
//     temp[pos] = arr[i]
//     pos += 2;
// }
// }
// console.log(arr)
//TC - O(2n) 
//Sc - O(n)



//Q Alternate numbers.
// Given an integer array nums of even length consisting of an equal number of positive and negative
// integers.Return the answer array in such a way that the given conditions are met:
// Every consecutive pair of integers have opposite signs.
// For all integers with the same sign, the order in which they were present in nums is preserved.
// The rearranged array begins with a positive integer.

// Input : nums = [2, 4, 5, -1, -3, -4]
// Output : [2, -1, 4, -3, 5, -4]
// Explanation: 
// The positive number 2, 4, 5 maintain their relative positions and -1, -3, -4 maintain their relative positions

//pending...