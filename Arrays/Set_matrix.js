//Find Zeros's in matrix.
let matrix = [
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 0, 1],
  [1, 0, 0, 1],
];

let m = matrix.length; //rows
let n = matrix[0].length; //col

//brute force
// function makeRow(arr,i){
// for(let j=0;j<n; j++){
//     if(arr[i][j] !== 0){
//         arr[i][j] = -1
//     }
// }
// }

// function makeCol(arr,j){
// for(let i=0;i<m; i++){
//     if(arr[i][j] !== 0){
//         arr[i][j] = -1
//     }
// }
// }

// function Matrix(arr){
// for(let i = 0; i<m; i++){
//     for(let j =0; j<n; j++){
//         if(arr[i][j] == 0){
//             makeRow(arr,i)
//             makeCol(arr,j)
//         }
//     }
// }
// return arr
// }

// function SetMatrixZero(arr){
// for(let i=0; i<m; i++){
//     for(let j=0; j<n; j++){
//         if(arr[i][j] == -1){
//             arr[i][j] = 0
//         }
//     }
// }
// return arr
// }

// Matrix(matrix)
// SetMatrixZero(matrix)
// console.log(matrix)
// //TC - (n*m)(n*m)+(n+m)
// //SC - O(1)


//better
let row = new Array(m).fill(0)
let col = new Array(n).fill(0)

function Matrix(arr){
 for(let i=0; i<row.length; i++){
        for(let j=0; j<col.length; j++){
                if(arr[i][j] == 0){
            row[i] = 1;
            col[j] = 1;
        }
    }
 }
}

function SetMatrixZero(arr){
    for(let i=0; i<row.length; i++){
    for(let j=0; j<col.length; j++){
           if(row[i] ==1 || col[j] == 1){
                arr[i][j] = 0
               }
            }
         }
         return arr
        }

Matrix(matrix)
SetMatrixZero(matrix)
console.log(matrix)
//TC - O(n2m2)
//SC - O(m + n)



