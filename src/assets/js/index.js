let trilho = document.getElementById('trilho')
let body = document.getElementById('corpo')

// função para modo dark
trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})



function aumentarTamanho() {
    if (contador < 1 ) {
        
        const corpo = document.getElementById('corpo');
        const estilo = window.getComputedStyle(corpo, null).getPropertyValue('font-size');
        const tamanhoAtual = parseFloat(estilo);
        corpo.style.fontSize = (tamanhoAtual + 2) + 'px';
      
        contador++
    }

    console.log(contador);
    }

// Função para diminuir o tamanho da letra
function diminuirTamanho() {
    if (contador > 0) {
        const corpo = document.getElementById('corpo');
        const estilo = window.getComputedStyle(corpo, null).getPropertyValue('font-size');
        const tamanhoAtual = parseFloat(estilo);
        corpo.style.fontSize = (tamanhoAtual - 2) + 'px';

        contador--
    }

    console.log(contador)
}
