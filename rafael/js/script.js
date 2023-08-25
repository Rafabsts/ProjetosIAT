function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
}


// Espera até que o documento HTML seja completamente carregado
document.addEventListener("DOMContentLoaded", function () {
    // Obtém todas as referências dos slides e botões de navegação
    var slides = document.querySelectorAll(".slide");
    var autoBtns = document.querySelectorAll(".auto-btn");

    // Define uma variável para rastrear o slide atual
    var currentSlide = 0;

    // Função para exibir o slide atual
    function showSlide(n) {
        slides[currentSlide].style.display = "none";
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.display = "block";
    }

    // Função para avançar para o próximo slide automaticamente
    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Configura um temporizador para avançar automaticamente os slides a cada 5 segundos (5000 milissegundos)
    var slideInterval = setInterval(nextSlide, 5000);

    // Adiciona um ouvinte de evento para os botões de navegação automática
    for (var i = 0; i < autoBtns.length; i++) {
        autoBtns[i].addEventListener("click", function () {
            // Pára o temporizador ao clicar em um botão de navegação automática
            clearInterval(slideInterval);
            // Avança para o próximo slide
            nextSlide();
            // Configura novamente o temporizador
            slideInterval = setInterval(nextSlide, 5000);
        });
    }

    // Inicialmente, mostra o primeiro slide
    showSlide(currentSlide);
});
