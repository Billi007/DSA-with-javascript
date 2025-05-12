//BASIC EXAMPLE
// let count =0;
// function test(){
// if(count === 4) return;
// else {
//   console.log(count);
//   count++;
//   test()
// }
// }
// test()


// //Q 1. Print name 5 times
// function printName(i,n, name){
//  if(i >= 5) return;
//  console.log(name);
//  i++
//  printName(i,n, name)
// }
// printName(0,5, "test");

//Q 2. Print Linearly from 1 to N.
// function printNumbers(n) {
//     if (n <= 5) {
//       console.log(n);
//       printNumbers(n + 1);
//     }
//   }
  
//   printNumbers(1);

//Q 3. Print Linearly from N to 1.
// function printNumbers(n) {
//     if (n >= 1) {
//       console.log(n);
//       printNumbers(n - 1);
//     }
//   }
  
//   printNumbers(5);

//Q 4. Print from 1-N (by backtrack)

// function printNumbers(i,n) {
//     if (i < 1) { 
//         return;
//     }
//     printNumbers(i-1,n);
//     console.log(i);
//   }
  
//   printNumbers(3,3)
//Q 5. Print from N-1 (by backtrack)
function printNumbers(i,n) {
    if (i > n) {
        return;
    }
    printNumbers(i+1,n);
    console.log(i);
  }
  
  printNumbers(1,3);
