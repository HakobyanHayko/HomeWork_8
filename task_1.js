function calcSum(arr){
    let sum  = 0 ;
    if(arr.length === 1){
        return arr[0] ;
    }
    return arr.pop() + calcSum(arr)
}
console.log(calcSum([1,2,3,4,5,6]))

//function calcSum(arr){
//     let sum  = 0 ;
//     if(arr.length === 1){
//         return arr[0] ;
//     }
//     return arr[0] + calcSum(arr.slice(1))
// }
// console.log(calcSum([1,2,3,4,5,6]))
