//TARGET MATH

function targetMath(x, y, z){
    let result;
    if( y === "+") {
    result = x + z
    }
    if( y === "-") {
    result = x - z
    }
    if ( y === "*") {
    result = x*z
    }
    if ( y === "/") {
    result = x/z
    }
    if (y === "^"){
    result = Math.pow(x, z)
    }
    if ( y === "_"){
    result = Math.pow(x, 1/z)
    }
    return result
    }
    
    console.log(targetMath(2, "-", 4))