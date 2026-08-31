//Java scripit

//Capturando elemento do DOM

//Encontra o primeiro <h1> da página e guarda ele dentro da variável titulo.
const titulo = window.document.getElementsByTagName('h1')[0];

//Altera o texto desse <h1> para "Fui alterado pelo JavaScript".
titulo.innerText = "Fui alterado pelo JavaScript";

//altera cor do texto do <h1> para azul.
titulo.style.color = "blue";

//Altera a cor de fundo da pagina pelo js.

const pagina = window.document.body

pagina.style.backgroundColor = "#00850b";

// Capturando a div
const caixaMagica = window.document.getElementById("caixaMagica");

//criando uma funçao entrada

function entrada() {
    caixaMagica.innerText = 'ol :}'
    caixaMagica.style.backgroundColor = 'red'
}

//criando uma funçao saida
function saida() {
    caixaMagica.innerText = 'Tchau :{'
    caixaMagica.style.backgroundColor = 'yellow'
}

//ESCUTANDO UM EVENTO SAIDA

caixaMagica.addEventListener('mouseout' , saida)


//Evento clicar

function clicar() {
    caixaMagica.innerText = 'clicou :O'
    caixaMagica.style.backgroundColor = 'blue'
}

//escutando evento clicar
caixaMagica.addEventListener('click' , clicar)


//ESCUTANDO UM EVENTO
caixaMagica.addEventListener('mouseenter' , entrada)