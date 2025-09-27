function changeVideo(videoSrc) {
    // Obtém o elemento de vídeo pelo ID
    const videoPlayer = document.getElementById('videoPlayer');
    
    // Altera o src do vídeo
    videoPlayer.src = videoSrc;
    
    // Reinicia o vídeo
    videoPlayer.load();
    videoPlayer.play();
}