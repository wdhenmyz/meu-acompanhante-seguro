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




