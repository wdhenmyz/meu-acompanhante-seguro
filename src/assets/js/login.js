let trilho = document.getElementById('trilho')
let body = document.getElementById('corpo')

// função para modo dark
trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})



// Função para aumentar o tamanho da letra
function aumentarTamanho() {
    const corpo = document.getElementById('corpo');
    const estilo = window.getComputedStyle(corpo, null).getPropertyValue('font-size');
    const tamanhoAtual = parseFloat(estilo);
    corpo.style.fontSize = (tamanhoAtual + 2) + 'px';
}

// Função para diminuir o tamanho da letra
function diminuirTamanho() {
    const corpo = document.getElementById('corpo');
    const estilo = window.getComputedStyle(corpo, null).getPropertyValue('font-size');
    const tamanhoAtual = parseFloat(estilo);
    corpo.style.fontSize = (tamanhoAtual - 2) + 'px';
}
