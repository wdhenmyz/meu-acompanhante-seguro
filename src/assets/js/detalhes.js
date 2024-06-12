let body = document.querySelector('body')

// função para modo dark
trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})



function aumentarTamanho() {
    const sections = document.querySelectorAll('.container'); // Seleciona todas as seções com classe "container"
    
    for (const section of sections) {
      const paragraphs = section.querySelectorAll('p'); // Seleciona todos os parágrafos dentro das seções
      
      for (const paragraph of paragraphs) {
        const fontSize = parseFloat(paragraph.style.fontSize) || 16; // Obtém o tamanho da fonte atual (ou define 16px se não existir)
        paragraph.style.fontSize = fontSize + 2 + 'px'; // Aumenta o tamanho da fonte em 2px
      }
    }
  }
  
  function diminuirTamanho() {
    const sections = document.querySelectorAll('.container'); // Seleciona todas as seções com classe "container"
    
    for (const section of sections) {
      const paragraphs = section.querySelectorAll('p'); // Seleciona todos os parágrafos dentro das seções
      
      for (const paragraph of paragraphs) {
        const fontSize = parseFloat(paragraph.style.fontSize) || 16; // Obtém o tamanho da fonte atual (ou define 16px se não existir)
        const newFontSize = fontSize - 2; // Diminui o tamanho da fonte em 2px
        
        // Verifica se o novo tamanho é menor que o limite mínimo (por exemplo, 12px)
        if (newFontSize >= 12) {
          paragraph.style.fontSize = newFontSize + 'px';
        }
      }
    }
  }
