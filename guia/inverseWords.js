// INVERSE WORDS

function inverseWords(x){
        let inverse = ""
        for(let i = x.length-1; i>=0; i--){
            inverse+=x[i]
        }
        return inverse
    }
    console.log(inverseWords("Amor azul Ramera, de todo te di. Mariposa colosal, sí, yo de todo te di. Poda la rosa, Venus. El átomo como tal es un evasor alado. Pide, todo te doy: isla, sol, ocaso, pirámide. Todo te daré: mar, luz, aroma."))