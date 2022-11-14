//SUM EVEN

function sumEven(x){
    let acum = 0
    for(e of x){
        if(e % 2 == 0){
            acum+=e
        }
    }
    return acum
}

console.log(sumEven([4,2,3,5,7,9]))