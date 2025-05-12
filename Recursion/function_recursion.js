// Sum of first N numbers.

//PARAMETERIZED METHOD
// function sumOfNum(i,sum){
//  if(i < 1){
//     console.log(sum); 
//     return;
//  }
//  sumOfNum(i-1, sum+i)
// }
// sumOfNum(3,0);

// Functional Recursion

function sumOfNum(i){
    if(i == 0) return 0;
    return i + sumOfNum(i-1)
   }
  console.log( sumOfNum(3))


//EASY METHOD                            
