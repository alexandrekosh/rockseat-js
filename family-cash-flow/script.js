// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: [] 
//     * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e 
// despesas e irá mostrar uma mensagem se a família está com 
// saldo positivo ou negativo, seguido do valor do saldo.

let family = {
    incomes: [300, 400],
    expenses: [200, 300, 300]
}

function sum(array){
    let total = 0;

    for(value of array){
        total += value
    }

    return total
}

function calculateBalance(){
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const condition = total >= 0

    let textInfo = "Negativo"

    if(condition){
        textInfo = "Positivo"
    }

    console.log(`Seu saldo é de ${total} e está ${textInfo}`)
}

calculateBalance()