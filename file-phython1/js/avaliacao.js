function checarAvaliacao() {
    const mensagem = document.getElementById('mensagem')
    const labelMensagem = document.getElementById('labelMensagem')
    const nome = document.getElementById("name");
    let labelNome = document.getElementById('labelNome');
    const cidade = document.getElementById("email");
    let labelEmail = document.getElementById('labelEmail');
    let numero = document.getElementById('celular');
    let labelNumero = document.getElementById('labelNumero');
    let unidade = document.getElementById('unidade');
    let labelUnidade = document.getElementById('labelUnidade');
    let labelAvaliacao = document.getElementById('labelAvaliacao');
    const botao = document.getElementById('erroAvaliacao');

    checarNome();
    checarEmail();
    checarNumero('tel');
    checarNumero('celular');
    checarMensagem();

    if (nome.value == '') {
        nome.placeholder = 'Campo Obrigatório'
        labelNome.style.color = 'red'
    } else {
        labelNome.style.color = 'black'
    }
    if (cidade.value == '') {
        cidade.placeholder = 'Campo Obrigatório'
        labelEmail.style.color = 'red'
    } else {
        labelEmail.style.color = 'black'
    }
    if (numero.value == '') {
        numero.placeholder = 'Campo Obrigatório'
        labelNumero.style.color = 'red'
    } else {
        labelNumero.style.color = 'black'
    }
    if (unidade.value == '') {
        labelUnidade.style.color = 'red'
    } else {
        labelUnidade.style.color = 'black'
    }

    if (labelUnidade.style.color == 'red') {
        botao.href = '#linkErro'
    } else if (labelAvaliacao.style.color == 'red') {
        botao.href = '#linkErro'
    } else if (nome.style.color == 'red') {
        botao.href = '#linkErro'
    } else if (numero.style.color == 'red') {
        botao.href = '#linkErro'
    } else if (cidade.style.color == 'red' || labelMensagem.style.color == 'red') {
        botao.href = '#linkErro'
    } else {
        botao.href = ''
    }



}

function checarNome() {
    const nome = document.getElementById("name");
    let letras = 'AaBbCcDdEeFfGgHhIiJjLlKkMmNnOoPpQqRrSsTtUuVvXZxzYyWwçÁáéÉóÓúÚíÍãõ '
    let conferir = true
    let cont = 0;
    let nulo;

    if (nome.value == '') {
        nulo = nome.value;
        return nulo
    } else if (nome.value == 'Campo Obrigatório') {
        nulo = nome.value
        nome.value = ''
        return nulo

    }

    nome.value = nome.value.toLowerCase()

    for (i = 0; i < nome.value.length; i++) {


        for (j = 0; j < letras.length; j++) {


            if (nome.value[i] == letras[j]) {

                nome.style.backgroundColor = "white"
                nome.style.color = "black";
                conferir = true
                break;

            } else {
                conferir = false
            }
        }
        for (j = 0; j < letras.length; j++) {

            if (nome.value.includes(letras[j])) {
                cont++
            }
        }

        if (nome.value[i] == nome.value[i + 1] && nome.value[i] == nome.value[i + 2]) {
            conferir = false
        }

        if (conferir == false || cont <= 1) {
            nome.style.color = "red";
            break;

        }
    }

    for (k = 0; k < letras.length; k++) {
        if (nome.value.includes(letras[k])) {
            cont++
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
}

function checarEmail() {
    const cidade = document.getElementById("email");
    const letras = 'AaBbCcDdEeFfGgHhIiJjLlKkMmNnOoPpQqRrSsTtUuVvXZxzYyWw@._0123456789 '
    const msgErro = document.getElementById('msgEmail');
    let conferir = true
    let cont = 0;
    let nulo;

    if (cidade.value == '') {
        nulo = cidade.value;
        return nulo
    } else if (cidade.value == 'Campo Obrigatório') {
        nulo = cidade.value
        cidade.value = ''
        return nulo

    }

    cidade.value = cidade.value.toLowerCase();

    for (i = 0; i < cidade.value.length; i++) {

        if (cidade.value[i] == '@') {
            cont++
        }

        for (j = 0; j < letras.length; j++) {

            if (cidade.value[i] == letras[j]) {

                cidade.style.backgroundColor = "white"
                cidade.style.color = "black";
                conferir = true
                break;

            } else {
                conferir = false
            }
        }
        if (conferir == false) {
            cidade.style.color = "red"
            break;
        }
    }

    if (cont != 1) {
        cidade.style.color = "red"
    } else if (cidade.value.indexOf('@') == 0 || cidade.value.indexOf('@') > (cidade.value.length - 6)) {
        cidade.style.color = "red"
    } else if (cidade.value.substring(cidade.value.indexOf('@')).includes('.') == false || cidade.value.indexOf('.') == cidade.value.length - 1) {
        cidade.style.color = "red"
    } else if (cidade.value.lastIndexOf('.') == (cidade.value.length - 1)) {
        cidade.style.color = "red"
    }

    while (cidade.value.includes(" ")) {
        cidade.value = cidade.value.replace(" ", "");
    }
    while (cidade.value.includes("..")) {
        cidade.value = cidade.value.replace("..", ".");
    }

    if (conferir == true) {
        emailCheck = 'ok'
    } else {
        emailCheck = 'erro'
    }
}

function checarNumero(num) {
    let numero;
    let cont1 = 0;

    if (num == 'tel') {
        numero = document.getElementById('tel')
    } else if (num == 'celular') {
        numero = document.getElementById('celular')
    }
    const letras = '0123456789'
    let conferir = true
    let cont = 0;

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
                break;

            } else {
                conferir = false
            }
        }
        if (conferir == false) {
            numero.style.color = "red"
            break;
        } else if (cont < 10 || cont > 11) {
            numero.style.color = "red"
            conferir = false
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

    if (num == 'tel' && cont != 10) {
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

function checarMensagem() {
    let cont = 0;
    let contador = 0;
    const mensagem = document.getElementById('mensagem')
    const labelMensagem = document.getElementById('labelMensagem')
    let letras = 'AaBbCcDdEeFfGgHhIiJjLlKkMmNnOoPpQqRrSsTtUuVvXZxzYyWwçÁáéÉóÓúÚíÍãõ 1234567890ªº'


    for (k = 0; k < letras.length; k++) {

        if (mensagem.value.includes(letras[k])) {
            cont++
        }
    }

    while (mensagem.value.includes("  ")) {
        mensagem.value = nome.value.replace("  ", " ");
    }

    for (i = 0; i < mensagem.value.length; i++) {
        if (mensagem.value[i] == ' ') {
            contador++
        }
    }

    if (cont < 10 || contador <= 5) {
        labelMensagem.style.color = 'red'
        mensagem.value = 'Ta querendo zuar meu programa?'
    } else if (mensagem.value.length < 50) {
        labelMensagem.style.color = 'red'
        mensagem.value = 'Minimo de 50 characteres'
    } else {
        labelMensagem.style.color = 'black'
        mensagem.value = mensagem.value.substring(0, 150)
    }
}