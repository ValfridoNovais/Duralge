let currentIndex = 0;

function moverCarrossel(direction) {
    const carrossel = document.querySelector('.carrossel');
    const articles = document.querySelectorAll('.itens-produtos');
    const totalArticles = articles.length;

    currentIndex += direction;

    if (currentIndex >= totalArticles) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalArticles - 1;
    }

    const offset = -currentIndex * 100;
    carrossel.style.transform = `translateX(${offset}%)`;
}

// Carrossel automático
setInterval(() => {
    moverCarrossel(1);
}, 5000); // Muda a cada 5 segundos

// Função existente para enviar WhatsApp
function enviarWhatsApp() {
    let nome = document.getElementById("nomeUsuario").value;

    if (nome.trim() === "") {
        alert("Por favor, digite seu nome antes de enviar a mensagem.");
        return;
    }

    let telefone = "5533999593333"; // Seu número do WhatsApp
    let mensagem = `Bom dia!\n\nEstava navegando pelo site\nGostaria de saber mais sobre a bateria *Moura*!\n\nSou *${nome}*`;

    // Codifica a mensagem para URL
    let mensagemCodificada = encodeURIComponent(mensagem);
    let link = `https://api.whatsapp.com/send?phone=${telefone}&text=${mensagemCodificada}`;

    // Abre o WhatsApp com a mensagem preenchida
    window.open(link, "_blank");
}

// Código existente para a barra de navegação
let navBar = document.querySelector('#header');

document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    if (scrollTop > 0) {
        navBar.classList.add('rolar');
    } else {
        navBar.classList.remove('rolar');
    }
});