//Transformar NOtas Escolares

// de 90 para cima 90 = A
// entre 80 - 89 = B
// entre 70 - 79 = C
// entre 60 - 69 = D
// entre 50 - 59 = E
// menor que 60 = F

function getScore(score){
    let scoreA = score > 90
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreE = score >= 50 && score <= 59
    let scoreF =  score <= 60
    let scoreFinal

    if (scoreA) {
        scoreFinal = "A"
    } else if (scoreB) {
        scoreFinal = "B"
    } else if (scoreC) {
        scoreFinal = "C"
    } else if (scoreD) {
        scoreFinal = "D"
    } else if (scoreE) {
        scoreFinal = "E"
    } else if (scoreF) {
        scoreFinal = "F"
    }

    return scoreFinal
}

let nota = parseInt(Math.random() * 100)

console.log(nota);
console.log(getScore(nota));