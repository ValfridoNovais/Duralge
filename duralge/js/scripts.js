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