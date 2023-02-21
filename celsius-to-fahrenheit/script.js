/*
    ### Celsius to Fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit
    e faça a transformação de uma unidade para outra 
    
        C = (F - 32) * 5/9 
        F = C * 9/5 + 32
*/

// trasform("50F")
function transformeDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    // fluxo de Error
    if(!celsiusExists && !fahrenheitExists){
        throw new Error('Grau não indetificado')
    }

    // fluxo ideal, F -> C
    let updateDegree = Number(degree.toUpperCase().replace('F', ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSing = 'C'

    // fluxo alternativo
    if (celsiusExists) {
        updateDegree = Number(degree.toUpperCase().replace("C", ""));
        formula = (celsius) =>  celsius * 9/5 + 32
        degreeSing = 'F'
    }

    return formula(updateDegree) + degreeSing
}

try {
    console.log(transformeDegree("50c"));
    console.log(transformeDegree("50f"));
    transformeDegree("50a");
} catch (error) {
    console.log(error.message)
}