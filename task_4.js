function getSummingAllDigits(num){
    let sum = 0 ;
    let digitsArr = String(num).split("")
    sum = digitsArr.reduce((acc, curr) => +acc + +curr)
    if(sum % 10 === sum) return sum
    return getSummingAllDigits(sum)
}
console.log(getSum
