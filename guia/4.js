// BINARY FINDING

function binaryFinding(z, y){
    let aux;
    let x = z
    for (let i = 0; i < x.length-1; i++) {
        for (let j = i+1; j < x.length; j++) {
            if (x[i]>x[j]) {
                aux = x[i]
                x[i] = x[j]
                x[j] = aux
            }
        }
    }
    let a = 0
    let b = x.length-1
    let c;
    while(a<b){
        c = Math.round((a+b)/2)
        if(x[c] > y){
            a = c
        }
        else if(x[c] < y){
            b = c
        }
        else {
            return true
        }
    }
    return false
}

console.log(binaryFinding([3,423,5,5,23,35,342,5,1], 2))