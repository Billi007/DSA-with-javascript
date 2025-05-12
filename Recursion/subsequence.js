//Print subsequence.
 
 let array = [3,1,2]
function test(arr, i=0, ds = []){
if( i === arr.length){
    if(ds.length > 0){
        console.log(ds);
    }
    return;
}
    ds.push(arr[i])
    test(arr, i+1,ds)
    ds.pop()
    test(arr, i+1, ds)
}
test(array)
