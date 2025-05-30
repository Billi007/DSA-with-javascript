let arr = [0,1,2,0,1,2,1,2,0,0,0,1]

//Brute force
// let low = 0; 
// let high = arr.length-1

// function mergeSort(arr,low,high){
// if(low < high){

// let mid = Math.floor((low+high)/2)
// mergeSort(arr,low,mid)
// mergeSort(arr,mid+1,high)
// merge(arr,low,mid,high)
// }
// }

// function merge(arr,low,mid,high){
// let left = low;
// let right = mid+1;
// let temp = []

// while(left <= mid && right <= high){
//  if(arr[left] <= arr[right]){
//   temp.push(arr[left])
//   left++
//  }else{
//     temp.push(arr[right])
//     right++
//  }
// }

// while(left<=mid){
//     temp.push(arr[left])
//     left++
// }
// while(right<=high){
//     temp.push(arr[right])
//     right++
// }

// for(let i=low; i<=high;i++){
// arr[i] = temp[i - low]
// }
// }
// mergeSort(arr,low,high)
// console.log(arr)
//TC - O(n log n)
//SC - O(n)



//better solution
// let count0 = 0;
// let count1 = 0;
// let count2 = 0;

// for(let i = 0; i<arr.length;i++){
// if(arr[i] == 0) count0++;
// if(arr[i] == 1) count1++;
// if(arr[i] == 2) count2++;
// }

// for(let i =0; i<count0; i++){
// arr[i] = 0
// }

// for(let i = count0; i<count0+count1; i++){
// arr[i] = 1
// }

// for(let i = count0+count1; i<arr.length; i++){
// arr[i] = 2
// }
// console.log(arr)
//TC - O(2n)
//SC - O(1)


//optimal solution
