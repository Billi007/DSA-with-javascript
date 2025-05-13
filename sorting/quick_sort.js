let array = [4,2,8,9,3,6,10];
let low = 0           
let high = array.length - 1


function quickSort(arr,low,high){
 if(low < high){
    let j = partition(arr, low,high)
    quickSort(arr, low, j-1)
    quickSort(arr,j+1, high)
 }
 return arr
}
function partition(arr, low, high){
let i = low;
let j = high;
let pivot = arr[low]

while (i < j){
    while(arr[i] <= pivot && i <= high - 1){
        i++
    }
    while (arr[j] > pivot && j >= low + 1){
        j--
    }
    if(i < j){
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
}
  [arr[j], arr[low]] = [arr[low], arr[j]]
  return j;
}
quickSort(array,low,high)
console.log(array)