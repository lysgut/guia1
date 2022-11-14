//MULT NUMBERS

function multNumbers(x, y){
    let array = []
    let e;
    for(e of x){
        if(e % y == 0){
            array.push(e)
        }
    }
    return array
}

console.log(multNumbers([9,12,4,52,51], 6))