document.addEventListener("DOMContentLoaded", function () {
    function enviarWhatsApp(idNomeUsuario) {
        let nome = document.getElementById(idNomeUsuario).value;

        if (nome.trim() === "") {
            alert("Por favor, digite seu nome antes de enviar a mensagem.");
            return;
        }

        let telefone = "5533999593333"; // Seu número do WhatsApp
        let mensagem = `Bom dia!\n\nEstava navegando pelo site\nGostaria de saber mais sobre a bateria *Moura*!\n\nSou *${nome}*`;

        // Codifica a mensagem para URL
        let mensagemCodificada = encodeURIComponent(mensagem);
        let link = `https://api.whatsapp.com/send/?phone=${telefone}&text=${mensagemCodificada}`;

        // Abre o WhatsApp com a mensagem preenchida
        window.open(link, "_blank");
    }

    // Adiciona os event listeners aos botões
    document.querySelector("button[onclick*='nomeUsuario']").onclick = function () {
        enviarWhatsApp('nomeUsuario');
    };

    document.querySelector("button[onclick*='nomeUsuario1']").onclick = function () {
        enviarWhatsApp('nomeUsuario1');
    };
});

let navBar = document.querySelector('#header')

document.addEventListener("scroll", ()=>{
    let scrooTop = window.scrollY

    if(scrollY > 0){
        navBar.classList.add('rolar')
    }else{navBar.classList.remove('rolar')}
})