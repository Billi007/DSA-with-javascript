//RIGHT ROTATE ARRAY BY 1 PLACE
// let arr = [1,2,3,4,5,6,7];
// let n = arr.length;
// let temp = arr[n-1]

// for(let i=n-2;i >=0; i--){
//     arr[i+1] = arr[i]
// }
// arr[0] = temp
// console.log(arr)
//SC = O(1)
//TC = O(n)


//RIGHT ROTATE ARRAY BY D PLACES
//BRUTE FORCE
// let arr = [1,2,3,4,5,6,7];
// let n = arr.length;
// let d = 13;
// let temp = arr.slice(n-d)
// d = d % n

// for(let i = n-d-1; i>=0; i--){
//     arr[i+d] = arr[i]
// }

// //_ _ _ 1 2 3 4
// for(let i= 0; i < d; i++){
//     arr[i] = temp[i]
// }
// 5 6 7 1 2 3 4 
//console.log(arr)

//TS = O(n-d)
//SC = O(1)


//Optimal solution
let array = [1,2,3,4,5,6,7];
let d = 3;
let n = array.length
let start = 0;
let end = n-1
function reverse(arr,start,end){
    while(start <= end){
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
    }
    return arr
}

function righRotate(arr,n,d){
d = d % n
reverse(arr,0,n-1)
reverse(arr,0,d-1)
reverse(arr,d,n-1)
return arr
}
console.log(righRotate(array,n,d))
//TC = O(2n)
//SC = O(1)