let body = document.querySelector('body')

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


let isReading = false;
// Seleciona todos os botões de leitura
const botoesLer = document.querySelectorAll('.ler-button');

// Adiciona evento de clique a cada botão
botoesLer.forEach(botao => {
    botao.addEventListener('click', () => {
        if (isReading) {
            // Para a leitura atual se já estiver lendo
            speechSynthesis.cancel();
            botao.textContent = 'Ler em Voz Alta';
            isReading = false;
        } else {
            // Obtém o texto do elemento pai do botão
            const texto = botao.parentElement.textContent.replace('Ler em Voz Alta', '').trim();
            // Cria objeto SpeechSynthesisUtterance
            const utterance = new SpeechSynthesisUtterance(texto);
            // Adiciona evento para detectar quando a leitura termina
            utterance.onend = () => {
                isReading = false;
                botao.textContent = 'Ler em Voz Alta';
            };
            // Inicia a leitura do texto
            speechSynthesis.speak(utterance);
            botao.textContent = 'Parar Leitura';
            isReading = true;
        }
    });
});

