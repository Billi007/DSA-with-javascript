//Largest element in an array
let array = [3,2,1,5,2];
let maxVal;

//BRUTE FORCE SOLUTION
for(let i =0; i< array.length; i++){
    let isMax = true;
    for(let j=0; j < array.length; j++){
        if(array[j] > array[i]){
          isMax = false;
          break
        }
    }
    if(isMax){
    maxVal = array[i]
    }
}
console.log(maxVal);
//TC -  O(n2)
//SC - O(1)


//OPTIMAL SOLUTION
let max = array[0]
for(let i=0; i <array.length-1; i++){
if(array[i] > max){
    max = array[i]
}
}
console.log(max);
//TC -  O(n)
//SC - O(1)