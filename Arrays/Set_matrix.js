//Find Zeros's in matrix.

function makRow(i){
    for(let j =0; j<m; j++){
        if(arr[i][j] != 0){
            arr[i][j] = -1
        }
    }
}
function makeCol(j){
    for(let i =0; i<n; i++){
        if(arr[i][j] != 0){
            arr[i][j] = -1
        }
    }
}

function main(arr,m,n){
    for(let i=0; i<n; i++){
   for(let j=0; j<m; jsx++){
     if(arr[i][j] == 0){
        makRow(i)
        makeCol(j)
     }
}
}
}
console.log(main(arr,m,n))