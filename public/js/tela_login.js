var senha = "";
var tentativas_cliente01 = 0;
var tentativas_cliente02 = 0;
var tentativas_cliente03 = 0;

function botao(num) {
    senha += num;
    document.getElementById("senha_interface").innerHTML += "*";
}

function erase() {
    if (document.getElementById("senha_interface").innerHTML.length >= 7) {
        senha = senha.slice(0,-1);
        let preenchimento = document.getElementById("senha_interface").innerHTML;
        preenchimento = preenchimento.slice(0,-1);
        document.getElementById("senha_interface").innerHTML = preenchimento;    
    }
}

function verificar_login() {
    let email = document.getElementById("email").value;
    switch (email) {
        case cliente01.email:
            if (senha == cliente01.senha && tentativas_cliente01 < 3) {
                localStorage.setItem("nome_cliente_atual", cliente01.nome);
                window.location.href = "index.html";
                break;
            }
            else{
                if (tentativas_cliente01 >= 3) {
                    document.getElementById("mensagem_erro").innerHTML = "Você errou sua senha 3 vezes, conta bloqueada!";
                    document.getElementById("mensagem_erro").style.display = "inline-block";
                    document.getElementByI("email").value = "";
                    document.getElementById("senha_interface").innerHTML = "Senha:";
                    senha = "";
                }
                else{
                    document.getElementById("mensagem_erro").innerHTML = "Email ou senha incorretos!";
                    document.getElementById("mensagem_erro").style.display = "inline-block";
                    tentativas_cliente01 += 1;
                    document.getElementById("email").value = "";
                    document.getElementById("senha_interface").innerHTML = "Senha:";
                    senha = "";
                }
                break;
            }
        case cliente02.email:
            if (senha == cliente02.senha && tentativas_cliente02 < 3) {
                localStorage.setItem("nome_cliente_atual", cliente02.nome);
                window.location.href = "index.html";
                break;
            }
            else{
                if (tentativas_cliente02 >= 3) {
                    document.getElementById("mensagem_erro").innerHTML = "Você errou sua senha 3 vezes, conta bloqueada!";
                    document.getElementById("mensagem_erro").style.display = "inline-block";
                    document.getElementById("email").value = "";
                    document.getElementById("senha_interface").innerHTML = "Senha:";
                    senha = "";
                }
                else{
                    document.getElementById("mensagem_erro").innerHTML = "Email ou senha incorretos!";
                    document.getElementById("mensagem_erro").style.display = "inline-block";
                    tentativas_cliente02 += 1;
                    document.getElementByI("email").value = "";
                    document.getElementById("senha_interface").innerHTML = "Senha:";
                    senha = "";
                }
                break;
            }
        case cliente03.email:
            if (senha == cliente03.senha && tentativas_cliente03 < 3) {
                localStorage.setItem("nome_cliente_atual", cliente03.nome);
                window.location.href = "index.html";
                break;
            }
            else{
                if (tentativas_cliente03 >= 3) {
                    document.getElementById("mensagem_erro").innerHTML = "Você errou sua senha 3 vezes, conta bloqueada!";
                    document.getElementById("mensagem_erro").style.display = "inline-block";
                    document.getElementById("email").value = "";
                    document.getElementById("senha_interface").innerHTML = "Senha:";
                    senha = "";
                }
                else{
                    document.getElementById("mensagem_erro").innerHTML = "Email ou senha incorretos!";
                    document.getElementById("mensagem_erro").style.display = "inline-block";
                    document.getElementById("email").value = "";
                    document.getElementById("senha_interface").innerHTML = "Senha:";
                    senha = "";
                }
                break;
            }
        default:
            document.getElementById("mensagem_erro").innerHTML = "Email ou senha incorretos!";
            document.getElementById("mensagem_erro").style.display = "inline-block";
            document.getElementById("email").value = "";
            document.getElementById("senha_interface").innerHTML = "Senha:";
            senha = "";
            break;
    }
}

function verificar_cliente_atual() {

    nome_cliente_atual = localStorage.getItem("nome_cliente_atual");

    switch (nome_cliente_atual) {
        case "Pedro":
            localStorage.setItem('cliente_atual', localStorage.getItem('cliente01'));
            break;
    
        case "Lucas":
            localStorage.setItem('cliente_atual', localStorage.getItem('cliente02'));
            break;

        case "Maria":
            localStorage.setItem('cliente_atual', localStorage.getItem('cliente03'));
            break;
        default:
            break;
    }
    mensagem_bemvindo();
}

function tirar_erro() {
    document.getElementById("mensagem_erro").style.display = "none";
}