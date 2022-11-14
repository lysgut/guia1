// BINARY FINDING
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

function binaryFinding(z, y){
    let e;
    let x = []
    for(e of z){
        x.push(e)
    }
    selectionSort(x)
    let a = 0
    let b = x.length-1
    let c;
    let is;
    while(a<=b){
        c = Math.round((a+b)/2)
        is = x[c]
        if(is > y){
            b = c-1
        }
        else if(is < y){
            a = c+1
        }
        else {
            return true
        }
    }
    return false

}

console.log(binaryFinding([3,423,5,5,34,45,56,77,12,34], 8))