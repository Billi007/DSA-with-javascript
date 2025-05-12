//Print fabonacci number with the help of recursion.


function fabonacciNums(n){
if(n <= 1) return n;
return fabonacciNums(n-1) + fabonacciNums(n-2)
}
console.log(fabonacciNums(4)) 


//Find First n Fibonacci Numbers.