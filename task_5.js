function myCopy(obj) {
    return Object.keys(obj).reduce((newObj, val) => Object.assign(newObj, {
      [val]: (obj[val].constructor === Object) ? myCopy(obj[val]) : obj[val]
    }), {});
  }
  

let obj = {a: 1,
            b : 2}
let a = myCopy(obj)
console.log(a, a ===  obj)

// function createCopy(obj){
//     let newObj = {}
//     for(let item in obj){
//         if(typeof obj[item] === "object"){
//             newObj[item] = createCopy(obj[item])
//         }
//         else{
//             newObj[item] = obj[item]
//         }
//     }
//     return newObj ;
// }
