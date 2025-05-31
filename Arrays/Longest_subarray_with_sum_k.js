//Find the longest subarray with sum k
let arr = [1,2,3,1,1,1,1,4,2,3];
let n = arr.length;
let k = 4;                        
let len = 0;

//brute force
// for(let i=0; i<n; i++){
    //     let sum = 0;
    //     for(let j=i; j<n; j++){
        //         sum += arr[j];
        //         if(sum === k){
            //          len = Math.max(len, j - i + 1)
            //         }
            //     }
            // }
            // console.log(len)
            //TC - O(n2)
            //Sc - O(1)
            
            

let maxNum = Math.max(...arr)
