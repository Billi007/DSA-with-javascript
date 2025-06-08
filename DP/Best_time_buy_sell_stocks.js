let arr = [7,1,5,3,6,4]

let maxProfit = 0;
let min = arr[0];

for(let i = 1; i<arr.length; i++){
    let sellingPrice = arr[i] - min
    maxProfit = Math.max(sellingPrice, maxProfit)
    min = Math.min(min, arr[i])
}

console.log(maxProfit)
//TC - O(n)
//SC - O(1)