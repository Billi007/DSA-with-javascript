//Given row, column, Find element at that place.
//brute
//nCr = r! / c! * (r-c)
let row = 5
let col = 3

function PrintElement(r,c){
    let ans = 1;
 for(let i=0; i<c; i++){
  ans = r * (r-i) / (i + 1)
 }
 return ans
}
console.log(PrintElement(row-1,col-1));

//TC - O(n)
//SC - O(1)


//Print nth row of pascal triangle.
//brute

// let row1 = 5
// function PrintNRow(r){
// let ans = 1;
// let temp = []
// for(let col = 1; col<=r; col++){
// temp.push(ans)
// ans = ans * (r - col) / col
// }
// return temp
// }
// console.log(PrintNRow(row1))

//TC - O(n)
//SC - O(1)


//Given n, Print the entire triangle.
//brute

let rowNum = 5
function PrintEntireTraingle(r){
let ans = 1;
let temp = []
let ansRow = []
for(let col = 1; col<r; col++){
ansRow.push(ans)
ans = ans * (r - col) / col
ansRow.push(ans)
}
return ansRow
}
PrintEntireTraingle(rowNum)

function main(r){
 let ans = [];
 for(let i = 0;i <r; i++){
  ans.push(PrintEntireTraingle(r))
 }
 return ans
}
console.log(main(rowNum))

//TC - 
//SC 