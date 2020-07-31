function checarInputs() {
    const botao = document.getElementById('linkErro');
    const nome = document.getElementById("name");
    let labelNome = document.getElementById('labelNome');
    const cidade = document.getElementById("email");
    let labelEmail = document.getElementById('labelEmail');
    let numero = document.getElementById('celular');
    let labelNumero = document.getElementById('labelNumero');
    let data = document.getElementById('data');
    let hora = document.getElementById('hora');
    let unidade = document.getElementById('unidades');
    let labelUnidade = document.getElementById('labelUnidade');
    let labelInput = document.getElementById('inputsErro')

    checarComida();
    checarNome();
    checarEmail();
    checarNumero('tel');
    checarNumero('cel');
    checarData();
    checarHora();



    if (nome.value == '') {
        nome.placeholder = 'Campo Obrigatório'
        labelNome.style.color = 'red'
    } else {
        labelNome.style.color = 'black';
    }
    if (unidade.value == '') {
        labelUnidade.style.color = 'red'
    } else {
        labelUnidade.style.color = 'black'
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

    if (labelUnidade.style.color == 'red') {
        botao.href = '#ancoraErroUnidade'
    } else if (labelInput.style.color == 'red') {
        botao.href = '#ancoraErroComida'
    } else if (nome.style.color == 'red') {
        botao.href = '#unidades'
    } else if (numero.style.color == 'red') {
        botao.href = '#unidades'
    } else if (cidade.style.color == 'red') {
        botao.href = '#unidades'
    } else if (data.style.color == 'red') {
        botao.href = '#unidades'
    } else if (hora.style.color == 'red') {
        botao.href = '#unidades'
    } else {
        botao.href = ''
    }
}

function checarNome() {
    const nome = document.getElementById("name");
    let labelNome = document.getElementById('labelNome');
    let letras = 'AaBbCcDdEeFfGgHhIiJjLlKkMmNnOoPpQqRrSsTtUuVvXZxzYyWwçÁáéÉóÓúÚíÍãõ '
    let conferir = true
    let cont = 0;
    let nulo;

    if (nome.value == '') {
        nulo = nome.value;
        return nulo
    }

    nome.value = nome.value.toLowerCase()

    for (i = 0; i < nome.value.length; i++) {


        for (j = 0; j < letras.length; j++) {


            if (nome.value[i] == letras[j]) {


                nome.style.backgroundColor = "white"
                nome.style.color = "black";
                labelNome.style.color = "black";
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

    if (num == 'tel') {
        numero = document.getElementById('tel')
    } else if (num == 'cel') {
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

function checarData() {
    let data = document.getElementById('data')
    let dataAtual = new Date;
    let idade = dataAtual.getFullYear() - data.value.substring(0, 4)

    if (idade < 18 || idade > 90) {
        data.style.color = 'red'
    } else {
        data.style.color = 'black'
    }
}

function checarHora() {
    let hora = document.getElementById('hora')

    if (hora.value.substring(0, 2) < 11 || hora.value.substring(0, 2) > 22) {
        hora.style.color = 'red'
    } else {
        hora.style.color = 'black'
    }
}

function checarComida() {
    let opcao1 = document.getElementById('radio1');
    let opcao2 = document.getElementById('radio2');
    let opcao3 = document.getElementById('radio3');
    let labelInput = document.getElementById('inputsErro')

    if (opcao1.checked || opcao2.checked || opcao3.checked) {
        labelInput.style.color = 'black'
    } else {
        labelInput.style.color = 'red'
    }
}