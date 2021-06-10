var senha = "";

function depositar() {
    let contador = parseInt(localStorage.getItem("contador"));

    let valor_deposito = parseInt(document.getElementById("valor_deposito").value);
  
    let cliente = JSON.parse(localStorage.getItem('cliente_atual'));

    if (senha == cliente.senha) {
        
        cliente.saldo += valor_deposito;
      
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
        atualizar_saldo();

        localStorage.setItem(`extrato${contador}`, `+${JSON.stringify(valor_deposito)} R$`);
        contador++;
        localStorage.setItem("contador", JSON.stringify(contador));

        document.getElementById("valor_deposito").value = "";
        document.getElementById("senha_interface").innerHTML = "Senha:";
        senha = "";
    }
    else{
        document.getElementById("mensagem_erro").innerHTML = "senha incorreta!, tente novamente";
        document.getElementById("mensagem_erro").style.display = "inline-block";
        document.getElementById("valor_deposito").value = "";
    }
}

function sacar() {
    let contador = parseInt(localStorage.getItem("contador"));

    let valor_saque = parseInt(document.getElementById("valor_saque").value);
  
    let cliente = JSON.parse(localStorage.getItem('cliente_atual'));

    if (senha == cliente.senha && (valor_saque <= cliente.saldo)) {
  
        cliente.saldo -= valor_saque;
  
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
        atualizar_saldo();

        localStorage.setItem(`extrato${contador}`, `- ${JSON.stringify(valor_saque)} R$`);
        contador++;
        localStorage.setItem("contador", JSON.stringify(contador));

        document.getElementById("valor_saque").value = "";
        document.getElementById("senha_interface").innerHTML = "Senha:";
        senha = "";
    }
    else{
        document.getElementById("mensagem_erro").innerHTML = "senha incorreta ou o valor desejado é maior que o saldo, tente novamente";
        document.getElementById("mensagem_erro").style.display = "inline-block";
        document.getElementById("valor_saque").value = "";
        document.getElementById("senha_interface").innerHTML = "Senha:";
        senha = "";
    }
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

function atualizar_extrato() {

    let contador = parseInt(localStorage.getItem("contador"));

    for (let i = 0; i < contador; i++) {
        var lista_extrato = document.getElementById("lista_extrato");
        var li = document.createElement("li");
        let item_extrato = localStorage.getItem(`extrato${i}`);
        li.appendChild(document.createTextNode(item_extrato));
        if (item_extrato.includes('+')) {
            li.setAttribute("class", "deposito");   
        }
        else if (item_extrato.includes('T')){
            li.setAttribute("class", "transferencia"); 
        }
        else{
            li.setAttribute("class", "saque");   
        }
        lista_extrato.appendChild(li);  
    }
}