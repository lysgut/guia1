//SUM ARRAY

function sumArrays(x,y){
    if(x.length == y.length){
    let array = []
    for(let i=0; i<x.length; i++){
        array.push(x[i]+y[i])
    }
    return array
    }
    else{
        return false
    }
}

console.log(sumArrays([10,6,7], [0,9,1]))