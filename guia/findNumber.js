//FIND NUMBER

function findNumber(x,y){
    let E;
    for(E of x){
        if(E === y){
            return true
        }
    }
    return false
}

console.log(findNumber([2,0], 1))