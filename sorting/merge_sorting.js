let array = [0,1,2,0,1,2,1,2,0,0,0,1];
let low = 0
let high = array.length - 1;

function merge_sort(arr, low,high){
if(low < high){
let mid = Math.floor((low+high)/2);
merge_sort(arr, low, mid) //for left portion of the array
merge_sort(arr, mid+1, high)
merge(arr, low,mid,high)
}
}

function merge (arr,low,mid,high){
let temp = []
let left = low;
let right = mid+1;
while(left<=mid && right <= high){
    if(arr[left] <= arr[right]){
    temp.push(arr[left])
    left++
}else{
    temp.push(arr[right])
    right++
}}
while(left<=mid){
     temp.push(arr[left])
    left++
}
while(right<=high){
    temp.push(arr[right])
    right++
}
for(let i=low; i<=high; i++){
   arr[i] = temp[i-low]
}
}
merge_sort(array,low,high)
console.log(array)