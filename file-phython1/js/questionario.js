let nomeCheck;
let cpfCheck;
let celCheck;
let emailCheck;

function apv() {
    const x = document.getElementById('nomeContrato')

    x.innerHTML = localStorage.getItem('ola')
}

function checarCadastro() {
    let nome = document.getElementById("boxNome");
    const cpf = document.getElementById("boxCpf");
    const cel = document.getElementById("boxCel");
    const email = document.getElementById("boxEmail");
    const linkQuest = document.getElementById('linkQuest')



    if (nome.value == '' || cpf.value == '' || cel.value == '' || email.value == '') {
        alert('Preencha Todos os Campos!')
    } else {
        checarNome();
        checarCpf();
        checarNumero();
        checarEmail();
    }

    if (nomeCheck == 'ok' && cpfCheck == 'ok' && celCheck == 'ok' && emailCheck == 'ok') {
        localStorage['ola'] = nome.value
        linkQuest.href = 'prova.html'
    }
}

function checarNome() {
    const nome = document.getElementById("boxNome");
    const msgErro = document.getElementById("msgNome")
    let letras = 'AaBbCcDdEeFfGgHhIiJjLlKkMmNnOoPpQqRrSsTtUuVvXZxzYyWwçÁáéÉóÓúÚíÍãõ '
    let conferir = true

    for (i = 0; i < nome.value.length; i++) {

        for (j = 0; j < letras.length; j++) {

            if (nome.value[i] == letras[j]) {

                nome.style.backgroundColor = "white"
                nome.style.color = "black";
                conferir = true
                msgErro.style.display = 'none'
                break;

            } else {
                conferir = false
            }
        }

        if (conferir == false) {
            nome.style.color = "red";
            msgErro.style.display = 'inline'
            msgErro.style.color = "red"
            break;

        }
    }

    while (nome.value.includes("  ")) {
        nome.value = nome.value.replace("  ", " ");
    }


    if (nome.value[0] == " ") {
        nome.value = nome.value.replace(nome.value[0], "")
    }

    nome.value = nome.value.replace(nome.value[0], nome.value[0].toUpperCase())

    for (k = 0; k < nome.value.length; k++) {
        if (nome.value[k] == " ") {
            nome.value = nome.value.replace(' ' + nome.value[k + 1], ' ' + nome.value[k + 1].toUpperCase())
        }

        if (nome.value.includes(' De ')) {
            nome.value = nome.value.replace(' De ', ' de ');
        } else if (nome.value.includes(' Da ')) {
            nome.value = nome.value.replace(' Da ', ' da ');
        } else if (nome.value.includes(' Do ')) {
            nome.value = nome.value.replace(' Do ', ' do ');
        } else if (nome.value.includes(' Dos ')) {
            nome.value = nome.value.replace(' Dos ', ' dos ');
        } else if (nome.value.includes('Das')) {
            nome.value = nome.value.replace(' Das ', ' das ');
        }
    }

    if (conferir == true) {
        nomeCheck = 'ok'
    } else {
        nomeCheck = 'erro'
    }
}

function checarCpf() {
    const mensagem = document.getElementById('mensagemErroCpf')
    const cpf = document.getElementById("boxCpf");
    const msgErro = document.getElementById("msgCpf");
    const letras = '0123456789';
    let cont = 0;
    let conferir = true;

    while (cpf.value.includes(" ")) {
        cpf.value = cpf.value.replace(" ", "")
    }

    while (cpf.value.includes(".")) {
        cpf.value = cpf.value.replace(".", "")
    }

    while (cpf.value.includes("-")) {
        cpf.value = cpf.value.replace("-", "")
    }


    for (i = 0; i < cpf.value.length; i++) {

        for (j = 0; j < letras.length; j++) {

            if (cpf.value[i] == letras[j]) {

                cpf.style.backgroundColor = "white"
                cpf.style.color = "black";
                conferir = true
                cont++
                msgErro.style.display = "none"
                break;

            } else {
                conferir = false
            }
        }
        if (conferir == false) {
            cpf.style.color = "red"
            msgErro.style.display = 'inline'
            msgErro.style.color = 'red'
            mensagem.innerHTML = 'Digite Somente Numeros!'
            break;
        } else if (cont < 11) {
            cpf.style.color = "red"
            conferir = false
            msgErro.style.display = 'inline'
            mensagem.innerHTML = "Menos de 11 dígitos<br>Digite somente 11 dígitos"
            msgErro.style.color = 'red';
        } else if (cont > 11) {
            conferir = false
            cpf.style.color = "red"
            msgErro.style.display = 'inline'
            msgErro.style.color = 'red'
            mensagem.innerHTML = 'Mais de 11 dígitos<br>Digite somente 11 dígitos!'
        }
    }

    let validador1 = (cpf.value[0] * 10) + (cpf.value[1] * 9) + (cpf.value[2] * 8) + (cpf.value[3] * 7) + (cpf.value[4] * 6) + (cpf.value[5] * 5) + (cpf.value[6] * 4) + (cpf.value[7] * 3) + (cpf.value[8] * 2)
    let validador2 = (cpf.value[0] * 11) + (cpf.value[1] * 10) + (cpf.value[2] * 9) + (cpf.value[3] * 8) + (cpf.value[4] * 7) + (cpf.value[5] * 6) + (cpf.value[6] * 5) + (cpf.value[7] * 4) + (cpf.value[8] * 3) + (cpf.value[9] * 2)
    let resultado1 = 11 - (validador1 % 11)
    let resultado2 = 11 - (validador2 % 11)

    if (validador1 % 11 < 2 && cpf.value[9] != 0) {
        conferir = false
        cpf.style.color = "red"
        msgErro.style.display = 'inline'
        msgErro.style.color = 'red'
        mensagem.innerHTML = 'CPF Inváilido!'
    } else if (resultado1 != cpf.value[9]) {
        cpf.style.color = "red"
        msgErro.style.display = 'inline'
        msgErro.style.color = 'red'
        mensagem.innerHTML = 'CPF Inváilido!'
    }
    if (validador2 % 11 < 2 && cpf.value[10] != 0) {
        conferir = false
        cpf.style.color = "red"
        msgErro.style.display = 'inline'
        msgErro.style.color = 'red'
        mensagem.innerHTML = 'CPF Inváilido!'
    } else if (resultado2 != cpf.value[10]) {
        cpf.style.color = "red"
        msgErro.style.display = 'inline'
        msgErro.style.color = 'red'
        mensagem.innerHTML = 'CPF Inváilido!'
    }


    if (conferir == true) {
        cpf.value = cpf.value.substring(0, 3) + '.' + cpf.value.substring(3, 6) + '.' + cpf.value.substring(6, 9) + '-' + cpf.value.substring(9, 12)
    }

    if (conferir == true) {
        cpfCheck = 'ok'
    } else {
        cpfCheck = 'erro'
    }


}


function checarNumero() {
    const mensagem = document.getElementById('mensagemErroCel')
    const numero = document.getElementById("boxCel");
    const msgErro = document.getElementById('msgCel')
    const letras = '0123456789'
    let conferir = true
    let cont = 0;
    let cont1 = 0;

    while (numero.value.includes(" ")) {
        numero.value = numero.value.replace(" ", "")
    }

    while (numero.value.includes(")")) {
        numero.value = numero.value.replace(")", "")
    }

    while (numero.value.includes("(")) {
        numero.value = numero.value.replace("(", "")
    }

    while (numero.value.includes("-")) {
        numero.value = numero.value.replace("-", "")
    }

    if (numero.value[0] == '0') {
        numero.value = numero.value.replace(numero.value[0], '')
    }

    for (i = 0; i < numero.value.length; i++) {

        for (j = 0; j < letras.length; j++) {

            if (numero.value[i] == letras[j]) {

                numero.style.backgroundColor = "white"
                numero.style.color = "black";
                conferir = true
                cont++
                msgErro.style.display = 'none'
                mensagem.innerHTML = '';
                break;

            } else {
                conferir = false
            }
        }
        if (conferir == false) {
            msgErro.style.display = 'inline'
            numero.style.color = "red"
            mensagem.innerHTML = 'Digite somente Numeros!';
            msgErro.style.color = 'red'
            break;
        } else if (cont < 10 || cont > 11) {
            msgErro.style.display = 'inline'
            numero.style.color = "red"
            mensagem.innerHTML = ' Digite 10 Numeros para fixo <br> 11 numeros para celular<br>incluindo código de area';
            conferir = false
            msgErro.style.color = 'red'
        }
    }

    for (k = 0; k < letras.length; k++) {

        if (numero.value.includes(letras[k])) {
            cont1++
        }
    }

    if (cont == 1) {
        conferir = false
        numero.style.color = 'red'
    }

    if (conferir == true && cont == 10) {
        numero.value = '(' + numero.value.substring(0, 2) + ') ' + numero.value.substring(2, 6) + '-' + numero.value.substring(6, 10);
    } else if (conferir == true && cont >= 11) {
        numero.value = '(' + numero.value.substring(0, 2) + ') ' + numero.value.substring(2, 7) + '-' + numero.value.substring(7, 11);
    }

    if (conferir == true) {
        celCheck = 'ok'
    } else {
        celCheck = 'erro'
    }
}

function checarEmail() {
    const mensagem = document.getElementById('mensagemErroEmail')
    const cidade = document.getElementById("boxEmail");
    const letras = 'AaBbCcDdEeFfGgHhIiJjLlKkMmNnOoPpQqRrSsTtUuVvXZxzYyWw@._0123456789 ºª'
    const msgErro = document.getElementById('msgEmail');
    let conferir = true
    let cont = 0;

    for (i = 0; i < cidade.value.length; i++) {

        if (cidade.value[i] == '@') {
            cont++
        }

        for (j = 0; j < letras.length; j++) {

            if (cidade.value[i] == letras[j]) {

                cidade.style.backgroundColor = "white"
                cidade.style.color = "black";
                conferir = true
                msgErro.style.display = "none";
                break;

            } else {
                conferir = false
            }
        }
        if (conferir == false) {
            cidade.style.color = "red"
            msgErro.style.display = 'inline'
            mensagem.innerHTML = "E-mail inválido!"
            msgErro.style.color = 'red'
            break;
        }
    }

    if (cont != 1) {
        cidade.style.color = "red"
        msgErro.style.display = 'inline'
        mensagem.innerHTML = "E-mail inválido!"
        msgErro.style.color = 'red'
    }

    while (cidade.value.includes(" ")) {
        cidade.value = cidade.value.replace(" ", "");
    }

    if (conferir == true) {
        emailCheck = 'ok'
    } else {
        emailCheck = 'erro'
    }
}