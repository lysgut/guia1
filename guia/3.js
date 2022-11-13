//LINEAL FINDING

function linealFinding(x,y){
    let E;
    for(E of x){
        if(E === y){
            return true
        }
    }
    return false
}

console.log(linealFinding([2,0], 1))