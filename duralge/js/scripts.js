document.addEventListener("DOMContentLoaded", function () {
    const whatsappBtn = document.getElementById("whatsappBtn");
    const emailBtn = document.getElementById("emailBtn");
    const ligarBtn = document.getElementById("ligarBtn");
    const formularioBtn = document.getElementById("formularioBtn");

    const whatsappForm = document.getElementById("whatsappForm");
    const emailForm = document.getElementById("emailForm");
    const ligarForm = document.getElementById("ligarForm");
    const formularioForm = document.getElementById("formularioForm");

    whatsappBtn.addEventListener("click", function (e) {
        e.preventDefault();
        whatsappForm.style.display = "block";
        emailForm.style.display = "none";
        ligarForm.style.display = "none";
        formularioForm.style.display = "none";
    });

    emailBtn.addEventListener("click", function (e) {
        e.preventDefault();
        emailForm.style.display = "block";
        whatsappForm.style.display = "none";
        ligarForm.style.display = "none";
        formularioForm.style.display = "none";
    });

    ligarBtn.addEventListener("click", function (e) {
        e.preventDefault();
        ligarForm.style.display = "block";
        whatsappForm.style.display = "none";
        emailForm.style.display = "none";
        formularioForm.style.display = "none";
    });

    formularioBtn.addEventListener("click", function (e) {
        e.preventDefault();
        formularioForm.style.display = "block";
        whatsappForm.style.display = "none";
        emailForm.style.display = "none";
        ligarForm.style.display = "none";
    });

    // Função para enviar dados via WhatsApp
    document.getElementById("whatsappFormContent").addEventListener("submit", function (e) {
        e.preventDefault();
        const nome = document.getElementById("whatsappNome").value;
        const numero = document.getElementById("whatsappNumero").value;
        const mensagem = document.getElementById("whatsappMensagem").value;

        if (nome.trim() === "" || numero.trim() === "" || mensagem.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const telefone = "5533999593333"; // Seu número do WhatsApp
        const mensagemCodificada = encodeURIComponent(`Bom dia!\n\nEstava navegando pelo site\nGostaria de saber mais sobre o serviço: *${mensagem}*\n\nSou *${nome}*`);
        const link = `https://api.whatsapp.com/send/?phone=${telefone}&text=${mensagemCodificada}`;

        window.open(link, "_blank");

        // Aqui você pode adicionar a lógica para salvar os dados no banco de dados
        saveData("WhatsApp", nome, numero, "", mensagem);
    });

    // Função para enviar e-mail
    document.getElementById("emailFormContent").addEventListener("submit", function (e) {
        e.preventDefault();
        const nome = document.getElementById("emailNome").value;
        const email = document.getElementById("emailEmail").value;
        const mensagem = document.getElementById("emailMensagem").value;

        if (nome.trim() === "" || email.trim() === "" || mensagem.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Aqui você pode adicionar a lógica para enviar o e-mail e salvar os dados no banco de dados
        saveData("Email", nome, "", email, mensagem);
    });

    // Função para ligar
    document.getElementById("ligarFormContent").addEventListener("submit", function (e) {
        e.preventDefault();
        const nome = document.getElementById("ligarNome").value;
        const numero = document.getElementById("ligarNumero").value;
        const mensagem = document.getElementById("ligarMensagem").value;
    
        if (nome.trim() === "" || numero.trim() === "" || mensagem.trim() === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }
    
        // Aqui você pode adicionar a lógica para salvar os dados no banco de dados
        saveData("Ligar", nome, numero, "", mensagem);
    
        // Verifica se é um dispositivo móvel
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            window.open(`tel:3335233520`, "_blank"); // Abre o discador no celular
        } else {
            // Exibe o modal personalizado no desktop
            Swal.fire({
                title: 'Ligue para nós!',
                html: `
                    <div style="text-align: left;">
                        <p style="font-size: 1.2em; margin-bottom: 20px;">Escolha um dos números abaixo para entrar em contato:</p>
                        <div style="display: flex; align-items: center; margin-bottom: 15px;">
                            <i class="bi bi-telephone-fill" style="font-size: 1.5em; margin-right: 10px; color: #242222;"></i>
                            <span style="font-size: 1.2em;">(33) 3523-3520</span>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 15px;">
                            <i class="bi bi-telephone-fill" style="font-size: 1.5em; margin-right: 10px; color: #242222;"></i>
                            <span style="font-size: 1.2em;">(33) 3522-5123</span>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 15px;">
                            <i class="bi bi-whatsapp" style="font-size: 1.5em; margin-right: 10px; color: #25D366;"></i>
                            <span style="font-size: 1.2em;">(33) 99959-3333</span>
                        </div>
                    </div>
                `,
                icon: 'info',
                confirmButtonText: 'Fechar',
                confirmButtonColor: '#242222',
            });
        }
    });

// Função para formulário
document.getElementById("formularioFormContent").addEventListener("submit", function (e) {
    e.preventDefault();
    const nome = document.getElementById("formularioNome").value;
    const numero = document.getElementById("formularioNumero").value;
    const mensagem = document.getElementById("formularioMensagem").value;

    if (nome.trim() === "" || numero.trim() === "" || mensagem.trim() === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Aqui você pode adicionar a lógica para salvar os dados no banco de dados
    saveData("Formulario", nome, numero, "", mensagem);

    // Exibe o modal personalizado com os dados enviados
    Swal.fire({
        title: 'DADOS SALVOS COM SUCESSO!',
        html: `
            <div style="text-align: left;">
                <p style="font-size: 1.2em; margin-bottom: 20px;">Agradecemos pelo seu contato. Aqui estão os dados que você enviou:</p>
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                    <i class="bi bi-person-fill" style="font-size: 1.5em; margin-right: 10px; color: #242222;"></i>
                    <span style="font-size: 1.2em;"><strong>Nome:</strong> ${nome}</span>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                    <i class="bi bi-whatsapp" style="font-size: 1.5em; margin-right: 10px; color: #25D366;"></i>
                    <span style="font-size: 1.2em;"><strong>WhatsApp:</strong> ${numero}</span>
                </div>
                <div style="display: flex; align-items: center; margin-bottom: 15px;">
                    <i class="bi bi-chat-left-text-fill" style="font-size: 1.5em; margin-right: 10px; color: #242222;"></i>
                    <span style="font-size: 1.2em;"><strong>Mensagem:</strong> ${mensagem}</span>
                </div>
                <p style="font-size: 1.1em; margin-top: 20px;">Em breve entraremos em contato com você!</p>
            </div>
        `,
        icon: 'success',
        confirmButtonText: 'Fechar',
        confirmButtonColor: '#242222',
    });
});

    // Função para salvar dados no banco de dados (simulação)
    function saveData(tipoContato, nome, whatsapp, email, mensagem) {
        const data = {
            tipoContato,
            nome,
            whatsapp,
            email,
            mensagem
        };

        // Aqui você pode fazer uma requisição AJAX para salvar os dados no banco de dados
        console.log("Dados a serem salvos:", data);
        // Exemplo de requisição AJAX:
        // fetch('/save-data', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // }).then(response => response.json())
        //   .then(data => console.log('Sucesso:', data))
        //   .catch(error => console.error('Erro:', error));
    }
});

let navBar = document.querySelector('#header')

document.addEventListener("scroll", ()=>{
    let scrooTop = window.scrollY

    if(scrollY > 0){
        navBar.classList.add('rolar')
    }else{navBar.classList.remove('rolar')}
})



document.addEventListener("DOMContentLoaded", function() {
    // Função para verificar se o cookie já foi aceito
    function verificaCookie() {
        const cookies = document.cookie.split(';').map(cookie => cookie.trim());
        const cookieAceito = cookies.find(cookie => cookie.startsWith('cookiesPlatonica='));

        // Se o cookie já foi aceito, esconde o popup
        if (cookieAceito) {
            let popup = document.getElementsByClassName("popup_cookie");
            popup[0].classList.remove('popup_cookie_show');
        }
    }

    // Executa a verificação ao carregar a página
    verificaCookie();
});


function AceitoCookies() {
    let popup = document.getElementsByClassName("popup_cookie");
    popup[0].classList.remove('popup_cookie_show');
    const expires = new Date();
    let nexpires = expires.getFullYear() + 1;
    document.cookie = "cookiesPlatonica=aceito; expires=18 Dec " + nexpires + " 12:00:00 UTC; path=/";
}

document.addEventListener("DOMContentLoaded", function () {
    // Aplica a máscara ao campo de WhatsApp do formulário de WhatsApp
    const whatsappNumero = document.getElementById("whatsappNumero");
    if (whatsappNumero) {
        VMasker(whatsappNumero).maskPattern("(99) 9 9999-9999");
    }
    // Aplica a máscara ao campo de WhatsApp do formulário de Ligar
    const ligarNumero = document.getElementById("ligarNumero");
    if (ligarNumero) {
        VMasker(ligarNumero).maskPattern("(99) 9 9999-9999");
    }
    // Aplica a máscara ao campo de WhatsApp do formulário de Formulario
    const formularioNumero = document.getElementById("formularioNumero");
    if (formularioNumero) {
        VMasker(formularioNumero).maskPattern("(99) 9 9999-9999");
    }

    // Aplica a máscara ao campo de WhatsApp do formulário de e-mail
    const emailWhatsapp = document.getElementById("emailwhatsapp");
    if (emailWhatsapp) {
        VMasker(emailWhatsapp).maskPattern("(99) 9 9999-9999");
    }
});

/* 
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contatos'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados');
});

app.post('/save-data', (req, res) => {
    const { tipoContato, nome, whatsapp, email, mensagem } = req.body;
    const query = `INSERT INTO contatos (Tipo_Contato, Nome_Cliente, WhatsApp, email, Mensagem) VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [tipoContato, nome, whatsapp, email, mensagem], (err, result) => {
        if (err) throw err;
        res.send('Dados salvos com sucesso');
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
}); */