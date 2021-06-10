var senha = "";

function transferir() {
    var can_transfer = true;

    let contador = parseInt(localStorage.getItem("contador"));

    let valor_transferencia = parseInt(document.getElementById("valor_transferencia").value);
  
    let cliente = JSON.parse(localStorage.getItem('cliente_atual'));
    let nome_cliente = cliente.nome.toUpperCase();;

    let cliente_transferencia = document.getElementById("nome_transferencia").value;
    let cliente_transferencia_nome = document.getElementById("nome_transferencia").value;
    cliente_transferencia = cliente_transferencia.toUpperCase();

    let email_transferencia = document.getElementById("email_transferencia").value;

    switch (cliente_transferencia) {
        case nome_cliente:
            document.getElementById("mensagem_erro").innerHTML = "Voce não pode transferir pra si mesmo";
            document.getElementById("mensagem_erro").style.display = "inline-block";
            can_transfer = false;
            break;
        case "PEDRO":
            if (email_transferencia == "pedrosantos@gmail.com") {
                cliente_transferencia = JSON.parse(localStorage.getItem("cliente01"));
            }
            break;
        case "LUCAS":
            if (email_transferencia == "lucassouza@gmail.com") {
                cliente_transferencia = JSON.parse(localStorage.getItem("cliente02"));
            }
            break;               
        case "MARIA":
            if (email_transferencia == "mariarocha@gmail.com") {
                cliente_transferencia = JSON.parse(localStorage.getItem("cliente03"));        
            }
            break;
        default:
            document.getElementById("mensagem_erro").innerHTML = "Email ou nome não existem no sistema!";
            document.getElementById("mensagem_erro").style.display = "inline-block";
            can_transfer = false;
            break;
    }

    if (can_transfer) {
        if (senha == cliente.senha && (valor_transferencia <= cliente.saldo)) {
      
            cliente.saldo -= valor_transferencia;
    
            cliente_transferencia.saldo += valor_transferencia;
      
            localStorage.setItem('cliente_atual', JSON.stringify(cliente));
      
            switch (cliente.nome) {
            case "Pedro":
                localStorage.setItem('cliente01', JSON.stringify(cliente));
                break;
        
            case "Lucas":
                localStorage.setItem('cliente02', JSON.stringify(cliente));
                break;
        
            case "Maria":
                localStorage.setItem('cliente03', JSON.stringify(cliente));
                break;
            default:
                break;
            }
            switch (cliente_transferencia.nome) {
                case "Pedro":
                    localStorage.setItem('cliente01', JSON.stringify(cliente_transferencia));
                    break;
            
                case "Lucas":
                    console.log("aaaa")
                    localStorage.setItem('cliente02', JSON.stringify(cliente_transferencia));
                    break;
            
                case "Maria":
                    localStorage.setItem('cliente03', JSON.stringify(cliente_transferencia));
                    break;
                default:
                    break;
                }
            atualizar_saldo();
    
            localStorage.setItem(`extrato${contador}`, `-${JSON.stringify(valor_transferencia)} R$ | T: ${cliente_transferencia_nome}`);
            contador++;
            localStorage.setItem("contador", JSON.stringify(contador));
        }
        else{
            document.getElementById("mensagem_erro").innerHTML = "senha incorreta ou o valor desejado é maior que o saldo, tente novamente";
            document.getElementById("mensagem_erro").style.display = "inline-block";
        }
    }
    document.getElementById("valor_transferencia").value = "";
    document.getElementById("senha_interface").innerHTML = "Senha:";
    document.getElementById("nome_transferencia").value = "";
    document.getElementById("email_transferencia").value = "";
    senha = "";
}









function transferir_pix() {
    debugger;
    var can_transfer = true;

    let contador = parseInt(localStorage.getItem("contador"));

    let valor_transferencia = parseInt(document.getElementById("valor_transferencia").value);
  
    let cliente = JSON.parse(localStorage.getItem('cliente_atual'));
    let chave_pix = document.getElementById("chave_transferencia").value

    let chave_atual = cliente.pix;

    let chave01 = JSON.parse(localStorage.getItem("cliente01"));
    chave01 = chave01.pix;
    let chave02 = JSON.parse(localStorage.getItem("cliente02"));
    chave02 = chave02.pix;
    let chave03 = JSON.parse(localStorage.getItem("cliente03"));
    chave03 = chave03.pix;

    switch (chave_pix) {
        case chave_atual:
            document.getElementById("mensagem_erro").innerHTML = "Voce não pode transferir pra si mesmo";
            document.getElementById("mensagem_erro").style.display = "inline-block";
            can_transfer = false;
            break;
        case chave01:
                cliente_transferencia = JSON.parse(localStorage.getItem("cliente01"));
                var cliente_transferencia_nome ="pedro"
            break;
        case chave02:
                cliente_transferencia = JSON.parse(localStorage.getItem("cliente02"));
                var cliente_transferencia_nome ="lucas"
            break;               
        case chave03:
                cliente_transferencia = JSON.parse(localStorage.getItem("cliente03"));
                var cliente_transferencia_nome ="maria"
            break;
        default:
            document.getElementById("mensagem_erro").innerHTML = "Email ou nome não existem no sistema!";
            document.getElementById("mensagem_erro").style.display = "inline-block";
            can_transfer = false;
            break;
    }

    if (can_transfer) {
        if (senha == cliente.senha && (valor_transferencia <= cliente.saldo)) {
      
            cliente.saldo -= valor_transferencia;
    
            cliente_transferencia.saldo += valor_transferencia;
      
            localStorage.setItem('cliente_atual', JSON.stringify(cliente));
      
            switch (cliente.nome) {
            case "Pedro":
                localStorage.setItem('cliente01', JSON.stringify(cliente));
                break;
        
            case "Lucas":
                localStorage.setItem('cliente02', JSON.stringify(cliente));
                break;
        
            case "Maria":
                localStorage.setItem('cliente03', JSON.stringify(cliente));
                break;
            default:
                break;
            }
            switch (cliente_transferencia.nome) {
                case "Pedro":
                    localStorage.setItem('cliente01', JSON.stringify(cliente_transferencia));
                    break;
            
                case "Lucas":
                    console.log("aaaa")
                    localStorage.setItem('cliente02', JSON.stringify(cliente_transferencia));
                    break;
            
                case "Maria":
                    localStorage.setItem('cliente03', JSON.stringify(cliente_transferencia));
                    break;
                default:
                    break;
                }
            atualizar_saldo();
    
            localStorage.setItem(`extrato${contador}`, `-${JSON.stringify(valor_transferencia)} R$ | T: ${cliente_transferencia_nome}`);
            contador++;
            localStorage.setItem("contador", JSON.stringify(contador));
        }
        else{
            document.getElementById("mensagem_erro").innerHTML = "senha incorreta ou o valor desejado é maior que o saldo, tente novamente";
            document.getElementById("mensagem_erro").style.display = "inline-block";
        }
    }
    document.getElementById("valor_transferencia").value = "";
    document.getElementById("senha_interface").innerHTML = "Senha:";
    document.getElementById("chave_transferencia").value = "";
    senha = "";
}








function atualizar_saldo() {
    let saldo_cliente = JSON.parse(localStorage.getItem('cliente_atual'));
    document.getElementById("valor_saldo").innerHTML = `Saldo:${saldo_cliente.saldo}R$`;
}

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


