const nome = window.prompt('Qual é o seu nome?')

// contando  os caracteres
document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} caracteres. <br>`)

// ALTERNANDO PARA MAISCULAS
document.write(`Seu nome em maiúsculas é: ${nome.toUpperCase()} <br>`)

// ALTERNANDO PARA MINUSCULAS
document.write(`Seu nome em minúsculas é: ${nome.toLowerCase()} <br>`)

// FORMATANDO NÚMEROS
const salario = window.prompt = Number(window.prompt(`Digite seu salário: `))

// INSERINDO CASAS DECIMAIS
document.write(`Seu salario com casa decimais é: ${salario.toFixed(2)} <br>`)

// ALTERNANDO O IDENTIFICADOR EM CASAS DECIMAIS
document.write(`Seu salario com virgula nas decimais é: ${salario.toFixed(2).replace('.', ',')} <br>`)

// FORMATANDO PARA MOEDA
document.write(`Seu salario em real: ${salario.toLocaleString(`pt-br` ,{style: ` currency` , currency: `BRL`})} <br>`)


// FORMATANDO PARA DOLAR
document.write(`Seu salario em dolar: ${salario.toLocaleString(`pt-br` ,{style: ` currency` , currency: `USD`})} <br>`)

// FORMATANDO PARA EURO
document.write(`Seu salario em euro: ${salario.toLocaleString(`pt-br` ,{style: ` currency` , currency: `EUR`})} <br>`)