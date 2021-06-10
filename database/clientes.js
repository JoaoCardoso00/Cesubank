var cliente01 = {nome: "Pedro", 
                sobrenome: "santos", 
                saldo: 5000, 
                nascimento: 1995, 
                email:"pedrosantos@gmail.com", 
                senha: "25954",
                pix: ""
            }

var cliente02 = {nome: "Lucas", 
                sobrenome: "souza", 
                saldo: 7000,
                nascimento: 1980, 
                email:"lucassouza@gmail.com", 
                senha: "56394",
                pix: ""
            }

var cliente03 = {nome: "Maria", 
                sobrenome: "rocha", 
                saldo: 4000, 
                nascimento: 1999, 
                email:"mariarocha@gmail.com", 
                senha: "36837",
                pix: ""
            }
                
var cliente_atual;
var contador_deposito = 0;

function gerar_chave()
{
    let letras = ["a", "e", "i", "o", "u", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
    let caracteres = ["@","#","$","%","&"];


    chave = [];

    for (let index = 0; index < 2; index++) {

        let letra_random = Math.floor(Math.random() * letras.length);
        let caractere_random = Math.floor(Math.random() * caracteres.length);

        let random_num = Math.floor(Math.random() * 9);
        let random_letter = letras[letra_random];
        let random_caractere = caracteres[caractere_random];

        chave.push(random_letter);
        chave.push(random_caractere);
        chave.push(random_num)
    }

    let chave_final = shuffle(chave);
    return chave_final.join("")
}

function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}

cliente01.pix = gerar_chave();
cliente02.pix = gerar_chave();
cliente03.pix = gerar_chave();

localStorage.setItem('cliente01', JSON.stringify(cliente01));
localStorage.setItem('cliente02', JSON.stringify(cliente02));
localStorage.setItem('cliente03', JSON.stringify(cliente03)); 
localStorage.setItem("contador", JSON.stringify(contador_deposito));

