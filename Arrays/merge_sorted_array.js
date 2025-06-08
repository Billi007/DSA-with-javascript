let arr1 = [1,3,5,7]
let m = arr1.length;
let arr2 = [0,2,6,8,9]
let n = arr2.length


function sort(arr1, arr2,m,n){
let temp = [];
let i=0;
let j=0
while(i<m && j<n){
    if(arr1[i] == 0){
        i++
        continue;
    }
    if(arr2[j] == 0){
        j++
        continue;
    }
if(arr1[i] < arr2[j]){
    temp.push(arr1[i])
    i++
}else{
    temp.push(arr2[j])
    j++
}
}

while(i< m){
    if(arr1[i] !== 0){
        temp.push(arr1[i])
    }
    i++
}

while(j< n){
    if(arr2[j] !== 0){
        temp.push(arr2[j])
    }
    j++
}

for(let k =0; k<m+n; k++){
    if(k < arr1.length) {
        arr1[k] = temp[k]
    }
    else arr2[k-arr1.length] = temp[k]
}

return temp
}
console.log(sort(arr1,arr2,m,n))                                                   