function mensagem_bemvindo() {
    let cliente = JSON.parse(localStorage.getItem('cliente_atual'));
    document.getElementById("mensagem_bemvindo").innerHTML = `Bem vindo ao Cesubank, ${cliente.nome} ${cliente.sobrenome}.`
}

function tirar_erro() {
    document.getElementById("mensagem_erro").style.display = "none";
}