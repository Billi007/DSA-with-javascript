let arr = [13,46,24,52,20,9];

for(let i = arr.length-1 ; i >= 0 ; i--){
    for(let j=0; j < arr.length; j++){
        if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        }
    }
}
console.log(arr) 
//Time complexity: O(n^2)
//Space complexity: O(1)



//OPTIMAL SOLUTION
for(let i = arr.length-1 ; i >= 0 ; i--){
    let swapped = 0;
    for(let j=0; j < arr.length; j++){
        if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
        swapped = 1;
        }
    }
    if(swapped == 0){
        break;
    }
}
console.log(arr) 
//Time complexity: O(n)
