//Q 1. Given an integer N, return the number of digits in N.
//ex :- Input = 156     Output :- 3

let n = 1153;
let count = 0;
while(n>0){
    n = Math.floor(n/10)
    count = count + 1
}
console.log("count", count)

//Built-in Method
let num=122
let result = Math.abs(num).toString().length;
console.log(result);


