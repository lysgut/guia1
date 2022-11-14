//COUNT VOWELS

function isVowel(x){
    let vowel = ["A", "Á", "a", "á", "E", "É", "e", "é", "I", "Í", "i", "í", "O", "Ó", "o", "ó", "U", "Ú", "u", "ú"]
    let e;
    for(e of vowel){
        if(x === e){
            return true
        }
    }
    return false
}

function countVowels(x){
    let vowels = 0
    for(e of x){
        if(isVowel(e)=== true){
            vowels++
        }
    }
    return vowels
}

console.log(countVowels("BELGRANO MI BEUN AMIGO ESTA CAMPAÑA VOLVEREMO A ESTAR CONTIGO TE ALENTAREMOOO DE CORAZOOON ESTA EN LA hINCHADA QUE TE QUIERE VER CAMPEOOOb "))