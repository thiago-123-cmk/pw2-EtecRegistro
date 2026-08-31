//caixa  magica 1

function parar() {
    caixaMagica.innerText = ''
    caixaMagica.style.backgroundColor = 'red'
    caixaMagica2.style.backgroundColor = 'white'
    caixaMagic3.style.backgroundColor = 'white'
}

//escutando evento clicar
botaoParar.addEventListener('click' , parar)


//caixa magica 2

function atencao() {
    caixaMagica2.innerText = ''
    caixaMagica2.style.backgroundColor = 'yellow'
    caixaMagica3.style.backgroundColor = 'white'
    caixaMagica.style.backgroundColor = 'white'
}

//escutando evento clicar2
botaoAtencao.addEventListener('click' , atencao)


//caixa magica 3

function acelerar() {
    caixaMagica3.innerText = ''
    caixaMagica3.style.backgroundColor = 'green'
    caixaMagica2.style.backgroundColor = 'white'
    caixaMagica.style.backgroundColor = 'white'
}

//escutando evento clicar3
botaoAcelerar.addEventListener('click' , acelerar)