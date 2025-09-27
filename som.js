document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('videoPlayer');
    const soundToggle = document.getElementById('soundToggle');
  
    soundToggle.addEventListener('click', () => {
      if (video.muted) {
        video.muted = false;
        soundToggle.textContent = '🔊'; // Ícone de som ativo
      } else {
        video.muted = true;
        soundToggle.textContent = '🔇'; // Ícone de som mutado
      }
    });
  });
  