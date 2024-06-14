let botaoTemaEscuro = document.getElementById('dark-mode')
let body = document.querySelector('body')
let header = document.querySelector('header')
let footer = document.querySelector('footer')
const imagem = document.getElementById('historias-logo')

botaoTemaEscuro.addEventListener('click', ()=>{ 
    body.classList.toggle('dark')
    header.classList.toggle('dark')
    footer.classList.toggle('dark')
    

    if (body.classList.contains('dark')) {
        imagem.setAttribute('src', './assets/images/sb-historias-logo-branco.svg');
    } else {
        imagem.setAttribute('src', './assets/images/sb-historias-logo.svg');
        botaoTemaEscuro.setAttribute('src', './assets/images/mode-dark.png');
    }

})

let botaoMaisFonte = document.getElementById('fonte-mais')
let botaoMenosFonte = document.getElementById('fonte-menos')

botaoMaisFonte.addEventListener('click', function() {
    document.body.style.fontSize = '180%'
})

botaoMenosFonte.addEventListener('click', function() {
    document.body.style.fontSize = '100%'
})


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

