let arr = [14,9,15,12,6,8,13]           
let isSorted;
for(let i=0; i< arr.length; i++){
    let j=i;
    while(j > 0 && arr[j] < arr[j-1]){
        let temp = arr[j-1]
        arr[j-1] = arr[j]
        arr[j] = temp
        j--
        isSorted = 1
    }
    if(isSorted == 0){
        break;
    }
}
console.log(arr)  
////Time complexity: O(n)