let trilho = document.getElementById('trilho')
let body = document.getElementById('corpo')

// função para modo dark
trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})

let contador = 0

// Função para aumentar o tamanho da letra
function aumentarTamanho() {
    if (contador < 1 ) {
        const corpo = document.getElementById('corpo');
        const estilo = window.getComputedStyle(corpo, null).getPropertyValue('font-size');
        const tamanhoAtual = parseFloat(estilo);
        corpo.style.fontSize = (tamanhoAtual + 3) + 'px';
      
        contador++
    }

    console.log(contador);
    }

// Função para diminuir o tamanho da letra
function diminuirTamanho() {
    if (contador >= 0) {
        const corpo = document.getElementById('corpo');
        const estilo = window.getComputedStyle(corpo, null).getPropertyValue('font-size');
        const tamanhoAtual = parseFloat(estilo);
        corpo.style.fontSize = (tamanhoAtual - 3) + 'px';

        contador--
    }

    console.log(contador)
}

// Seleciona todos os botões de leitura
const botoesLer = document.querySelectorAll('.ler-button');

// Adiciona evento de clique a cada botão
botoesLer.forEach(botao => {
    botao.addEventListener('click', () => {
        const texto = botao.parentElement.textContent.replace('Ler em Voz Alta', '').trim(); // Obtém o texto do elemento pai do botão
        const utterance = new SpeechSynthesisUtterance(texto); // Cria objeto SpeechSynthesisUtterance
        speechSynthesis.speak(utterance); // Inicia a leitura do texto
    });
});

