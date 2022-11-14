// RAIN DROP

function rainDrop(x){
    let rain= ""
    if(x % 3 === 0){
        rain+="Pling"
    }
    if (x % 5 === 0){
        rain+="Plang"
    }
    if (x % 7 === 0){
        rain+="Plong"
    }
    if (rain === ""){
        rain = x
    }
    return rain
}
console.log(rainDrop(5))