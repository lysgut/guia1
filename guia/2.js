//BUBBLE SORT

function bubbleSort(x){
    let aux;
    for(let stop = 0; stop < x.length; stop++){
        for(let i = 0; i < x.length - stop; i++){
            if(x[i] > x[i+1]){
                aux = x[i]
                x[i] = x[i+1]
                x[i+1] = aux
            }
        }
    }
    return x
}

console.log(bubbleSort([2,1,1,3,0,80,-80]))