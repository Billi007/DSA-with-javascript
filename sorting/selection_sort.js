// Selection Sort
let arr = [13,46,24,52,20,9]

for(let i =0; i< arr.length -1 ; i++){
    for(let j=i; j < arr.length; j++){
        if(arr[i] > arr[j]){
            let mini = arr[i]
            arr[i] =arr[j]
            arr[j] = mini
        }
    }
}
console.log(arr) 
//[arr[i], arr[j]] = [arr[j], arr[i]] swap
//Time complexity: O(n^2)
//Space complexity: O(1) 