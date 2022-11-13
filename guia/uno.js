//SELECTION SORT

function selectionSort(x){
    let aux;
    for (let i = 0; i < x.length-1; i++) {
        for (let j = i+1; j < x.length; j++) {
            if (x[i]>x[j]) {
                aux = x[i]
                x[i] = x[j]
                x[j] = aux
            }
        }
    }
    return x
}

console.log(selectionSort([2,1,1,3,0,80,-80]))