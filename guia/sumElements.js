//SUM ELEMENTS

function sumElements(x){
    let acum = 0
    let e;
    for(e of x){
        if((e % 3 == 0 || e % 5 == 0) && 10 < e && e < 150){
            acum+=e
        }
    }
    return acum
}

console.log(sumElements([20,15,5]))