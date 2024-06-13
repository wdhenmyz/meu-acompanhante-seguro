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
    document.body.style.fontSize = '200%'
})

botaoMenosFonte.addEventListener('click', function() {
    document.body.style.fontSize = '100%'
})


