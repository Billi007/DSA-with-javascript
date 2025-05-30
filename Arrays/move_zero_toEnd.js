let array = [1,0,2,3,2,0,0,4,5,1];
let n = array.length
//let temp = [];

//BRUTE FORCE SOLUTION
//extract all nov zero elments from and put into temp        O(n)
// for(let i=0;i<array.length; i++){
    //     if(array[i] !== 0){
        //         temp.push(array[i])
        //     }
        // } 
        // //extract all elments from temp and put in front to array     O(x)
        // for(let i=0; i< temp.length;i++){ 
            //    array[i] = temp[i]
            // }
            
            // //fill all the remaining places in array with zero        O(n- x)
            // for(let i = temp.length;i <array.length;i++){             
                //     array[i] = 0
                // }
                // console.log(temp)
                // console.log(array)

//TC = O(2n)
//SC = O(n)


//OPTIMAL SOLUTION
// let j = -1

// //find the first zeron number and put it into j
// for(let i= 0; i < array.length; i++){
//     if(array[i] == 0){
//        j = i;
//        break;
//     }
// }

// //swap non zero number with zero number
// for(let i = j+1; i<array.length; i++){
//     if(array[i] !== 0){
//         [array[i], array[j]] = [array[j], array[i]]
//         j++;
//     }
// }
// console.log(arr)
//TC = O(n)
//SC = O(1)