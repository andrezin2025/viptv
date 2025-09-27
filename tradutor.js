// Função para alterar o idioma usando Google Translate
function changeLanguage(lang) {
    const select = document.querySelector('.goog-te-combo');
    if (select) {
      select.value = lang; // Define o idioma selecionado
      select.dispatchEvent(new Event('change')); // Dispara o evento de mudança
    }
  }
  
  // Adiciona eventos de clique para cada bandeira
  document.querySelectorAll('.flag').forEach(flag => {
    flag.addEventListener('click', () => {
      const lang = flag.getAttribute('data-lang');
      changeLanguage(lang);
    });
  });
  