function getNumberOfSquares(n){
    
    if(n === 0){
        return 0
    }
    return n**2 + getNumberOfSquares(n-1)
}
console.log(getNumberOfSquares(4))
