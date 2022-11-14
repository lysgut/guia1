//SUM ODDS

function sumOdds(x){
    let acum = 0
    for(e of x){
        if(e % 2 == 1){
            acum+=e
        }
    }
    return acum
}

console.log(sumOdds([4,2,3,5,7,9]))