// 1. Selecionando os elementos do HTML
const num1 = document.getElementById('numero1')
const num2 = document.getElementById('numero2')
const resultado = document.getElementById('resultado')

const btnSomar = document.getElementById('btnSomar')
const btnSubtrair = document.getElementById('btnSubtrair')
const btnMultiplicar = document.getElementById('btnMultiplicar')
const btnDividir = document.getElementById('btnDividir')






//  Funções das operações(como cada uma vai funcionar)
function somar() {
    // Number() converte o texto digitado no input para número
    const total = Number(num1.value) + Number(num2.value)
    resultado.innerText = 'Resultado: ' + total
}

function subtrair() {
    const total = Number(num1.value) - Number(num2.value)
    resultado.innerText = 'Resultado: ' + total
}

function multiplicar() {
    const total = Number(num1.value) * Number(num2.value)
    resultado.innerText = 'Resultado: ' + total
}

function dividir() {
    if (Number(num2.value) === 0) {
        resultado.innerText = 'Resultado: Não é possível dividir por 0'
        return
    }
    const total = Number(num1.value) / Number(num2.value)
    resultado.innerText = 'Resultado: ' + total
}







// Escutando os eventos 
btnSomar.addEventListener('click', somar)

btnSubtrair.addEventListener('click', subtrair)

btnMultiplicar.addEventListener('click', multiplicar)

btnDividir.addEventListener('click', dividir)