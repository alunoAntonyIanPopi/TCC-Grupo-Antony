const ctx = document.getElementById('chartCanvas').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: { /* dados aqui */ },
    options: { /* opções de animação */ }
});

$(document).ready(function(){
    const track = document.querySelector('.carousel-track');
    const cloneItems = track.innerHTML; // Clonamos os itens originais

    // Duplicamos os itens para garantir a continuidade
    track.innerHTML += cloneItems;

    let resetPoint = track.scrollWidth / 2; // Ponto em que vamos reiniciar o carrossel
    
    // Função para verificar a posição e reiniciar quando necessário
    function animateCarousel() {
        if (track.scrollLeft >= resetPoint) {
            track.scrollLeft = 0; // Reinicia a posição para criar o loop infinito
        } else {
            track.scrollLeft += 3; // Move o carrossel para a esquerda
        }
    }

    // Configura a função para ser executada repetidamente
    setInterval(animateCarousel, 10); // Ajuste o tempo para controlar a velocidade
});

// Menu hamburguer

document.getElementById("hamburger-btn").addEventListener("click", function() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
  });

  function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// Fechar o modal se o usuário clicar fora da caixa modal
window.onclick = function(event) {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

function openFaqModal(id) {
    document.getElementById(id).style.display = "block";
}

function closeFaqModal(id) {
    document.getElementById(id).style.display = "none";
}