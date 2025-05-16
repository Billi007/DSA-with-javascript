let arr = [9,7,8,4,1];
let num = 4
let index = -1

for(let i=0; i<= arr.length; i++){
    if(arr[i] == num){
        index = i
        break;
    }
}
console.log(index)