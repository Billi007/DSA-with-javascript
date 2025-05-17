//optimal
let arr = [1,1,0,1,1,1,0,1,1,1,1];
let n = arr.length
let count = 0;
let max = 0;

for(let  i= 0; i< n; i++){
    if(arr[i] == 1){
        count += 1;
        max = Math.max(max, count)
    }else{
        count = 0
    }
}
console.log(max)
//TC- O(n) 
//SC- O(1)