let checagens = 0
let nome;
let nume;
let dia;
let mes;
let ano;
let cpf;
let labelCpf;
let labelNome;
let labelNumero;

function checarCv() {
    let labelNomeRua = document.getElementById('labelRua')
    let erroAnc = document.getElementById('ancoraErro');
    let cargo = document.getElementById('selectCargo');
    let labelCargo = document.getElementById('labelCargo');
    let empresaHeadNome = document.getElementById('empresaInput');
    let labelEmpresaHead = document.getElementById('labelEmpresa');
    let salario = document.getElementById('salarioInput')
    let labelSalario = document.getElementById('labelSalario')
    let numRua = document.getElementById('numeroInput')
    let labelNumRua = document.getElementById('labelNumRua')
    let uf = document.getElementById('ufInput')
    let labelUf = document.getElementById('labelUf')
    let uf2 = document.getElementById('ufInput2')
    let labelUf2 = document.getElementById('labelUfInput2')
    let org = document.getElementById('orgInput')
    let labelOrg = document.getElementById('labelOrgInput')
    let grau = document.getElementById('grauInput')
    let labelGrau = document.getElementById('labelGrauInput')
    let civil = document.getElementById('civilInput')
    let labelCivil = document.getElementById('labelCivil')
    let filhos = document.getElementById('possuiFilhosInput')
    let labelFilhos = document.getElementById('labelPossuiFilhosInput')
    let quantFilhos = document.getElementById('quantidadeInput')
    let labelQuantFilhos = document.getElementById('labelQuantidadeInput')
    let labelBairro = document.getElementById('labelBairro')
    let labelCep = document.getElementById('labelCep')

    if (quantFilhos.value == '') {
        labelQuantFilhos.style.color = 'red'
    } else {
        labelQuantFilhos.style.color = 'black'
    }
    if (filhos.value == '') {
        labelFilhos.style.color = 'red'
    } else {
        labelFilhos.style.color = 'black'
    }
    if (civil.value == '') {
        labelCivil.style.color = 'red'
    } else {
        labelCivil.style.color = 'black'
    }
    if (grau.value == '') {
        labelGrau.style.color = 'red'
    } else {
        labelGrau.style.color = 'black'
    }
    if (org.value == '') {
        labelOrg.style.color = 'red'
    } else {
        labelOrg.style.color = 'black'
    }
    if (uf2.value == '') {
        labelUf2.style.color = 'red'
    } else {
        labelUf2.style.color = 'black'
    }
    if (empresaHeadNome.value == '') {
        labelEmpresaHead.style.color = 'red'
    } else {
        labelEmpresaHead.style.color = 'black'
    }
    if (cargo.value == '') {
        labelCargo.style.color = 'red'
    } else {
        labelCargo.style.color = 'black'
    }
    if (salario.value == '') {
        labelSalario.style.color = 'red'
    } else {
        labelSalario.style.color = 'black'
    }
    if (uf.value == '') {
        labelUf.style.color = 'red'
    } else {
        labelUf.style.color = 'black'
    }
    if (numRua.value == '') {
        labelNumRua.style.color = 'red'
    } else {
        labelNumRua.style.color = 'black'
    }

    checarEmpresa();
    numeroRua();
    checarNomeRua();
    checarNomeBairro();
    checarApto();
    checarNumero();
    checarNome('localNasc');
    checarNome('nomePessoal');
    checarNome('nomePapa');
    checarNome('nomeMama');
    checarNome('conjuge');
    checarNome('filho1');
    checarNome('filho2');
    checarNome('filho3');
    checarNome('ref1');
    checarNome('ref3');
    checarNome('ref2');
    checarNome('cidade');
    checarCel('fixoPessoal');
    checarCel('celPessoal');
    checarCel('telInput1');
    checarCel('telInput3');
    checarCel('telInput2');
    checarCel('contatoRef1');
    checarCel('contatoRef2');
    checarCel('contatoRef3');
    checarCep();
    checarEmail();
    checarAno('docAno');
    checarAno('nascAno1');
    checarAno('nascAno2');
    checarAno('nascAno3');
    checarAno('resAno1');
    checarAno('admAno2');
    checarAno('admAno3');
    checarAno('admAno1');
    checarAno('resAno3');
    checarAno('resAno2');
    checarAno('nascAno');
    checarMes('nascMes');
    checarMes('admMes3');
    checarMes('nascMes1');
    checarMes('nascMes2');
    checarMes('docMes');
    checarMes('nascMes3');
    checarMes('admMes1');
    checarMes('resMes2');
    checarMes('resMes1');
    checarMes('admMes2');
    checarMes('resMes3');
    checarDia('nascDia');
    checarDia('diaDoc');
    checarDia('nascDia1');
    checarDia('nascDia2');
    checarDia('nascDia3');
    checarDia('resDia1');
    checarDia('admDia1');
    checarDia('resDia2');
    checarDia('admDia2');
    checarDia('resDia3');
    checarDia('admDia3');
    checarCpf('idtInput');
    checarCpf('cpfInput');
    checarCpf('cpfInput1');
    checarCpf('cpfInput2');
    checarCpf('cpfInput3');

    if (labelUf2.style.color == 'red' || labelUf.style.color == 'red' || labelCep.style.color == 'red' || labelBairro.style.color == 'red' || labelEmpresaHead.style.color == 'red' || labelCargo.style.color == 'red' || labelSalario.style.color == 'red' || labelNome.style.color == 'red' || labelNomeRua.style.color == 'red') {
        erroAnc.href = '#imgCv'
    } else {
        erroAnc.href = 'cardapio.html'
    }

}

function checarEmpresa() {

    let empresaHeadNome = document.getElementById('empresaInput');
    let labelEmpresaHead = document.getElementById('labelEmpresa');
    let letras = 'AaBbCcDdEeFfGgHhIiJjLlKkMmNnOoPpQqRrSsTtUuVvXZxzYyWwçÁáéÉóÓúÚíÍãõ 0123456789'
    let conferir = true
    let cont = 0;
    let nulo;

    if (empresaHeadNome.value == '') {
        return empresaHeadNome.value = ''
    }

    empresaHeadNome.value = empresaHeadNome.value.toLowerCase()

    for (i = 0; i < empresaHeadNome.value.length; i++) {


        for (j = 0; j < letras.length; j++) {


            if (empresaHeadNome.value[i] == letras[j]) {


                empresaHeadNome.style.backgroundColor = "white"
                empresaHeadNome.style.color = "black";
                labelEmpresaHead.style.color = "black";
                conferir = true
                break;

            } else {
                conferir = false
            }
        }
        for (j = 0; j < letras.length; j++) {

            if (empresaHeadNome.value.includes(letras[j])) {
                cont++
            }
        }

        if (empresaHeadNome.value[i] == empresaHeadNome.value[i + 1] && empresaHeadNome.value[i] == empresaHeadNome.value[i + 2]) {
            conferir = false
        }

        if (conferir == false || cont <= 1) {
            empresaHeadNome.style.color = "red";
            break;

        }
    }

    for (k = 0; k < letras.length; k++) {
        if (empresaHeadNome.value.includes(letras[k])) {
            cont++
        }
    }
    while (empresaHeadNome.value.includes("  ")) {
        empresaHeadNome.value = empresaHeadNome.value.replace("  ", " ");
    }


    if (empresaHeadNome.value[0] == " ") {
        empresaHeadNome.value = empresaHeadNome.value.replace(empresaHeadNome.value[0], "")
    }

    empresaHeadNome.value = empresaHeadNome.value.replace(empresaHeadNome.value[0], empresaHeadNome.value[0].toUpperCase())

    for (k = 0; k < empresaHeadNome.value.length; k++) {
        if (empresaHeadNome.value[k] == " ") {
            empresaHeadNome.value = empresaHeadNome.value.replace(' ' + empresaHeadNome.value[k + 1], ' ' + empresaHeadNome.value[k + 1].toUpperCase())
        }

        if (empresaHeadNome.value.includes(' De ')) {
            empresaHeadNome.value = empresaHeadNome.value.replace(' De ', ' de ');
        } else if (empresaHeadNome.value.includes(' Da ')) {
            empresaHeadNome.value = empresaHeadNome.value.replace(' Da ', ' da ');
        } else if (empresaHeadNome.value.includes(' Do ')) {
            empresaHeadNome.value = empresaHeadNome.value.replace(' Do ', ' do ');
        } else if (empresaHeadNome.value.includes(' Dos ')) {
            empresaHeadNome.value = empresaHeadNome.value.replace(' Dos ', ' dos ');
        } else if (empresaHeadNome.value.includes('Das')) {
            empresaHeadNome.value = empresaHeadNome.value.replace(' Das ', ' das ');
        }
    }
}

function checarNumero() {
    const salario = document.getElementById('salarioInput')

    const num = '0123456789.';
    let conferir = true;

    while (salario.value.includes(" ")) {
        salario.value = salario.value.replace(" ", "")
    }

    while (salario.value.includes(",")) {
        salario.value = salario.value.replace(",", "")
    }
    while (salario.value.includes(".")) {
        salario.value = salario.value.replace(".", "")
    }

    for (i = 0; i < salario.value.length; i++) {

        for (j = 0; j < num.length; j++) {

            if (salario.value[i] == num[j]) {

                salario.style.backgroundColor = "white"
                salario.style.color = "black";
                conferir = true
                break;

            } else {
                conferir = false
            }
        }
        if (conferir == false) {
            salario.style.color = "red"
            break;
        }
    }

    if (salario.value.length > 3 && conferir == true) {
        salario.value = salario.value.replace(salario.value.substring(salario.value.length - 3), '.' + salario.value.substring(salario.value.length - 3));
        conferir = false
    }

    if (conferir == false) {
        checagens++
    }
}

function checarNome(pessoa) {
    let civil = document.getElementById('civilInput')
    let filhos = document.getElementById('possuiFilhosInput')
    if (pessoa == 'ref1') {
        nome = document.getElementById("nomeRef1");
        labelNome = document.getElementById('labelNomeRef1');
    } else if (pessoa == 'ref2') {
        nome = document.getElementById("nomeRef2");
        labelNome = document.getElementById('labelNomeRef2');
    } else if (pessoa == 'ref3') {
        nome = document.getElementById("nomeRef3");
        labelNome = document.getElementById('labelNomeRef3');
    } else if (pessoa == 'filho1') {
        nome = document.getElementById("nomeFilhoInput1");
        labelNome = document.getElementById('labelNomeFilhoInput1');
        if (filhos.value != 'Sim') {
            nome.disabled = 'true'
            return labelNome.style.color = 'black'
        }
    } else if (pessoa == 'filho2') {
        nome = document.getElementById("nomeFilhoInput2");
        labelNome = document.getElementById('labelNomeFilhoInput2');
        if (filhos.value != 'Sim') {
            nome.disabled = 'true'
            return labelNome.style.color = 'black'
        }
    } else if (pessoa == 'filho3') {
        nome = document.getElementById("nomeFilhoInput3");
        labelNome = document.getElementById('labelNomeFilhoInput3');
        if (filhos.value != 'Sim') {
            nome.disabled = 'true'
            return labelNome.style.color = 'black'
        } else {
            nome.removeAttribute('disabled')
        }
    } else if (pessoa == 'nomePessoal') {
        nome = document.getElementById("nomeInput");
        labelNome = document.getElementById('labelNomeCand')
    } else if (pessoa == 'nomeMama') {
        nome = document.getElementById("nomeMae");
        labelNome = document.getElementById('labelMae')
    } else if (pessoa == 'nomePapa') {
        nome = document.getElementById("nomePai");
        labelNome = document.getElementById('labelPai')
    } else if (pessoa == 'cidade') {
        nome = document.getElementById("cidadeInput");
        labelNome = document.getElementById('labelCidade')
    } else if (pessoa == 'localNasc') {
        nome = document.getElementById("localNascInput");
        labelNome = document.getElementById('labelLocalNascInput')
    } else if (pessoa == 'conjuge') {
        nome = document.getElementById("conjInput");
        labelNome = document.getElementById('labelConjInput')
        if (civil.value != 'Casado(a)') {
            nome.disabled = 'true'
            return labelNome.style.color = 'black'
        } else {
            nome.disabled = 'false'
        }
    }
    let letras = 'AaBbCcDdEeFfGgHhIiJjLlKkMmNnOoPpQqRrSsTtUuVvXZxzYyWwçÁáéÉóÓúÚíÍãõ '
    let conferir = true

    if (nome.value == '') {
        if (pessoa == 'ref1' || pessoa == 'ref2' || pessoa == 'ref3') {
            return labelNome.style.color = 'black'
        } else { return labelNome.style.color = 'red' }

    } else {
        labelNome.style.color = 'black'
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

        if (nome.value[i] == nome.value[i + 1] && nome.value[i] == nome.value[i + 2]) {
            conferir = false
        }
        if (conferir == false) {
            nome.style.color = "red";
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

    if (conferir == false) {
        checagens++
    }
}

function checarNomeBairro() {
    let labelNomeRua = document.getElementById('labelBairro')
    let nomeRua = document.getElementById('bairroInput')
    let cont = 0;
    let letras = '0123456789AaBbCcDdEeFfGgHhIiJjLlKkMmNnOoPpQqRrSsTtUuVvXZxzYyWw ºª-'
    let conferir = true

    if (nomeRua.value == '') {
        return labelNomeRua.style.color = 'red'
    } else {
        labelNomeRua.style.color = 'black'
    }

    nomeRua.value = nomeRua.value.toLowerCase()

    for (i = 0; i < nomeRua.value.length; i++) {

        for (j = 0; j < letras.length; j++) {

            if (nomeRua.value[i] == letras[j]) {

                nomeRua.style.backgroundColor = "white"
                nomeRua.style.color = "black";
                conferir = true
                break;

            } else {
                conferir = false
            }
        }

        for (j = 0; j < letras.length; j++) {

            if (nomeRua.value.includes(letras[j])) {
                cont++
            }
        }

        if (conferir == false) {
            nomeRua.style.color = "red";
            break;

        }

        if (nomeRua.value[i] == nomeRua.value[i + 1] && nomeRua.value[i] == nomeRua.value[i + 2]) {
            conferir = false
        }
        if (conferir == false) {
            nomeRua.style.color = "red";
            break;

        }
    }

    while (nomeRua.value.includes("  ")) {
        nomeRua.value = nomeRua.value.replace("  ", " ");
    }

    if (nomeRua.value[0] == 0) {
        nomeRua.style.color = "red";
    }

    if (nomeRua.value[0] == " ") {
        nomeRua.value = nomeRua.value.replace(nomeRua.value[0], "")
    }

    nomeRua.value = nomeRua.value.replace(nomeRua.value[0], nomeRua.value[0].toUpperCase())

    for (k = 0; k < nomeRua.value.length; k++) {
        if (nomeRua.value[k] == " ") {
            nomeRua.value = nomeRua.value.replace(' ' + nomeRua.value[k + 1], ' ' + nomeRua.value[k + 1].toUpperCase())
        }

        if (nomeRua.value.includes(' De ')) {
            nomeRua.value = nomeRua.value.replace(' De ', ' de ');
        } else if (nomeRua.value.includes(' Da ')) {
            nomeRua.value = nomeRua.value.replace(' Da ', ' da ');
        } else if (nomeRua.value.includes(' Do ')) {
            nomeRua.value = nomeRua.value.replace(' Do ', ' do ');
        } else if (nomeRua.value.includes(' Dos ')) {
            nomeRua.value = nomeRua.value.replace(' Dos ', ' dos ');
        } else if (nomeRua.value.includes('Das')) {
            nomeRua.value = nomeRua.value.replace(' Das ', ' das ');
        }
    }
}

function checarNomeRua() {
    let labelNomeRua = document.getElementById('labelRua')
    let nomeRua = document.getElementById('ruaInput')
    let cont = 0;
    let letras = '0123456789AaBbCcDdEeFfGgHhIiJjLlKkMmNnOoPpQqRrSsTtUuVvXZxzYyWw ºª-'
    let conferir = true

    if (nomeRua.value == '') {
        return labelNomeRua.style.color = 'red'
    } else {
        labelNomeRua.style.color = 'black'
    }

    nomeRua.value = nomeRua.value.toLowerCase()

    for (i = 0; i < nomeRua.value.length; i++) {

        for (j = 0; j < letras.length; j++) {

            if (nomeRua.value[i] == letras[j]) {

                nomeRua.style.backgroundColor = "white"
                nomeRua.style.color = "black";
                conferir = true
                break;

            } else {
                conferir = false
            }
        }

        for (j = 0; j < letras.length; j++) {

            if (nomeRua.value.includes(letras[j])) {
                cont++
            }
        }

        if (conferir == false) {
            nomeRua.style.color = "red";
            break;

        }

        if (nomeRua.value[i] == nomeRua.value[i + 1] && nomeRua.value[i] == nomeRua.value[i + 2]) {
            conferir = false
        }
        if (conferir == false) {
            nomeRua.style.color = "red";
            break;

        }
    }

    while (nomeRua.value.includes("  ")) {
        nomeRua.value = nomeRua.value.replace("  ", " ");
    }

    if (nomeRua.value[0] == 0) {
        nomeRua.style.color = "red";
    }

    if (nomeRua.value[0] == " ") {
        nomeRua.value = nomeRua.value.replace(nomeRua.value[0], "")
    }

    nomeRua.value = nomeRua.value.replace(nomeRua.value[0], nomeRua.value[0].toUpperCase())

    for (k = 0; k < nomeRua.value.length; k++) {
        if (nomeRua.value[k] == " ") {
            nomeRua.value = nomeRua.value.replace(' ' + nomeRua.value[k + 1], ' ' + nomeRua.value[k + 1].toUpperCase())
        }

        if (nomeRua.value.includes(' De ')) {
            nomeRua.value = nomeRua.value.replace(' De ', ' de ');
        } else if (nomeRua.value.includes(' Da ')) {
            nomeRua.value = nomeRua.value.replace(' Da ', ' da ');
        } else if (nomeRua.value.includes(' Do ')) {
            nomeRua.value = nomeRua.value.replace(' Do ', ' do ');
        } else if (nomeRua.value.includes(' Dos ')) {
            nomeRua.value = nomeRua.value.replace(' Dos ', ' dos ');
        } else if (nomeRua.value.includes('Das')) {
            nomeRua.value = nomeRua.value.replace(' Das ', ' das ');
        }
    }
}

function numeroRua() {
    const salario = document.getElementById('numeroInput')
    const num = '0123456789.';
    let conferir = true;

    while (salario.value.includes(" ")) {
        salario.value = salario.value.replace(" ", "")
    }

    while (salario.value.includes(",")) {
        salario.value = salario.value.replace(",", "")
    }
    while (salario.value.includes(".")) {
        salario.value = salario.value.replace(".", "")
    }

    for (i = 0; i < salario.value.length; i++) {

        for (j = 0; j < num.length; j++) {

            if (salario.value[i] == num[j]) {

                salario.style.backgroundColor = "white"
                salario.style.color = "black";
                conferir = true
                break;

            } else {
                conferir = false
            }
        }
        if (conferir == false) {
            salario.style.color = "red"
            break;
        }
    }

    if (salario.value.length > 3 && conferir == true) {
        salario.value = salario.value.replace(salario.value.substring(salario.value.length - 3), '.' + salario.value.substring(salario.value.length - 3));
        conferir = false
    }

    if (conferir == false) {
        checagens++
    }
}

function checarApto() {
    let cont = 0;
    let num = 0;
    let labelApto = document.getElementById('labelApto')
    let numApto = document.getElementById('aptoInput')
    let letras = '0123456789AaBbCcDdEeFfGgHhIiJjLlKkMmNnOoPpQqRrSsTtUuVvXZxzYyWw ºª-'
    let conferir = true

    if (numApto.value == '') {
        return labelApto.style.color = 'red'
    } else {
        labelApto.style.color = 'black'
    }

    numApto.value = numApto.value.toLowerCase()

    for (i = 0; i < numApto.value.length; i++) {

        for (j = 0; j < letras.length; j++) {

            if (numApto.value[i] == letras[j]) {

                numApto.style.backgroundColor = "white"
                numApto.style.color = "black";
                conferir = true
                break;

            } else {
                conferir = false
            }
        }

        for (j = 0; j < letras.length; j++) {

            if (numApto.value.includes(letras[j])) {
                cont++
            }
        }

        for (k = 0; k < 10; k++) {

            if (numApto.value.includes(letras[k])) {
                num++
            }
        }

        if (conferir == false || cont <= 1 || num <= 0) {
            numApto.style.color = "red";
            break;

        }

        if (numApto.value[i] == numApto.value[i + 1] && numApto.value[i] == numApto.value[i + 2]) {
            conferir = false
        }
        if (conferir == false) {
            numApto.style.color = "red";
            break;

        }
    }

    while (numApto.value.includes("  ")) {
        numApto.value = numApto.value.replace("  ", " ");
    }

    if (numApto.value[0] == 0) {
        numApto.style.color = "red";
    }

    if (numApto.value[0] == " ") {
        numApto.value = numApto.value.replace(numApto.value[0], "")
    }

    numApto.value = numApto.value.replace(numApto.value[0], numApto.value[0].toUpperCase())

    for (k = 0; k < numApto.value.length; k++) {
        if (numApto.value[k] == " ") {
            numApto.value = numApto.value.replace(' ' + numApto.value[k + 1], ' ' + numApto.value[k + 1].toUpperCase())
        }

        if (numApto.value.includes(' De ')) {
            numApto.value = numApto.value.replace(' De ', ' de ');
        } else if (numApto.value.includes(' Da ')) {
            numApto.value = numApto.value.replace(' Da ', ' da ');
        } else if (numApto.value.includes(' Do ')) {
            numApto.value = numApto.value.replace(' Do ', ' do ');
        } else if (numApto.value.includes(' Dos ')) {
            numApto.value = numApto.value.replace(' Dos ', ' dos ');
        } else if (numApto.value.includes('Das')) {
            numApto.value = numApto.value.replace(' Das ', ' das ');
        }
    }
}

function checarCep() {

    const labelCep = document.getElementById('labelCep')
    const cep = document.getElementById('cepInput')
    const num = '0123456789-';
    let cont = 0
    let conferir = true;

    if (cep.value == '') {
        return labelCep.style.color = 'red'
    } else {
        labelCep.style.color = 'black'
    }

    while (cep.value.includes(" ")) {
        cep.value = cep.value.replace(" ", "")
    }

    while (cep.value.includes("-")) {
        cep.value = cep.value.replace("-", "")
    }

    for (i = 0; i < cep.value.length; i++) {

        for (j = 0; j < num.length; j++) {

            if (cep.value[i] == num[j]) {
                cep.style.color = "black";
                cont++
                conferir = true
                break;

            } else {
                conferir = false
            }
        }
        if (conferir == false) {
            cep.style.color = "red"
            break;
        }
    }

    if (cont != 8) {
        cep.style.color = "red"
        conferir = false
    } else if (conferir == true) {
        cep.value = cep.value.substring(0, 5) + '-' + cep.value.substring(5);
    }
}

function checarCel(nume) {
    let nome1 = document.getElementById("nomeRef1");
    let nome2 = document.getElementById("nomeRef2");
    let nome3 = document.getElementById("nomeRef3");

    if (nume == 'celPessoal') {
        numero = document.getElementById("celInput");
        labelNumero = document.getElementById('labelCelInput');
    } else if (nume == 'contatoRef1') {
        numero = document.getElementById("contatoRef1");
        labelNumero = document.getElementById('labelContatoRef1');
        if (nome1.value == '') {
            numero.disabled = 'true'
            labelNumero.style.color = 'black';
        }
    } else if (nume == 'contatoRef2') {
        numero = document.getElementById("contatoRef2");
        labelNumero = document.getElementById('labelContatoRef2');
        if (nome2.value == '') {
            numero.disabled = 'true'
            labelNumero.style.color = 'black';
        }
    } else if (nume == 'contatoRef3') {
        numero = document.getElementById("contatoRef3");
        labelNumero = document.getElementById('labelContatoRef3');
        if (nome3.value == '') {
            numero.disabled = 'true'
            labelNumero.style.color = 'black';
        }
    } else if (nume == 'fixoPessoal') {
        numero = document.getElementById("telInput");
        labelNumero = document.getElementById('labelTelInput')
    } else if (nume == 'telInput1') {
        numero = document.getElementById("telInput1");
    } else if (nume == 'telInput3') {
        numero = document.getElementById("telInput3");
    } else if (nume == 'telInput2') {
        numero = document.getElementById("telInput2");
    }
    const num = '0123456789'
    let conferir = true
    let cont = 0;

    if (numero.value == '') {
        labelNumero.style.color = 'red'
    } else {
        labelNumero.style.color = 'black'
    }

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

    for (i = 0; i < numero.value.length; i++) {

        for (j = 0; j < num.length; j++) {

            if (numero.value[i] == num[j]) {

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

function checarEmail() {
    const cidade = document.getElementById("emailInput");
    const labelEmail = document.getElementById("labelEmailInput");
    const letras = 'AaBbCcDdEeFfGgHhIiJjLlKkMmNnOoPpQqRrSsTtUuVvXZxzYyWw@._0123456789 '
    let conferir = true
    let cont = 0;

    if (cidade.value == '') {
        labelEmail.style.color = 'red'
    } else {
        labelEmail.style.color = 'black'
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
    }

    while (cidade.value.includes(" ")) {
        cidade.value = cidade.value.replace(" ", "");
    }
}

function checarDia(diaData) {
    if (diaData == 'nascDia') {
        dia = document.getElementById('nascDia')
    } else if (diaData == 'diaDoc') {
        dia = document.getElementById('docDia')
    } else if (diaData == 'nascDia1') {
        dia = document.getElementById('nascDia1')
    } else if (diaData == 'resDia1') {
        dia = document.getElementById('resDia1')
    } else if (diaData == 'resDia2') {
        dia = document.getElementById('resDia2')
    } else if (diaData == 'resDia3') {
        dia = document.getElementById('resDia3')
    } else if (diaData == 'admDia1') {
        dia = document.getElementById('admDia1')
    } else if (diaData == 'admDia2') {
        dia = document.getElementById('admDia2')
    } else if (diaData == 'admDia3') {
        dia = document.getElementById('admDia3')
    } else if (diaData == 'nascDia2') {
        dia = document.getElementById('nascDia2')
    } else if (diaData == 'nascDia3') {
        dia = document.getElementById('nascDia3')
    }
    const num = '0123456789';
    let conferir = true;

    if (dia.value == '') {
        return (
            dia.style.color = 'red',
            dia.value = 0
        )
    }

    while (dia.value.includes(" ")) {
        dia.value = dia.value.replace(" ", "")
    }

    for (i = 0; i < dia.value.length; i++) {

        for (j = 0; j < num.length; j++) {

            if (dia.value[i] == num[j]) {

                dia.style.backgroundColor = "white"
                dia.style.color = "black";
                conferir = true
                break;

            } else {
                conferir = false
            }
        }
        if (conferir == false) {
            dia.style.color = "red"
            break;
        }
    }

    if (dia.value > 31 || dia.value <= 0) {
        conferir = false;
    } else if (dia.value.length > 2) {
        conferir = false;
    }

    if (conferir == false) {
        checagens++
        dia.style.color = "red"
    }
    if (dia.value.length < 2 && conferir == true) {
        dia.value = '0' + dia.value.charAt(0);
    }
}

function checarMes(mesData) {
    if (mesData == 'nascMes') {
        mes = document.getElementById('nascMes')
    } else if (mesData == 'resMes1') {
        mes = document.getElementById('resMes1')
    } else if (mesData == 'resMes2') {
        mes = document.getElementById('resMes2')
    } else if (mesData == 'resMes3') {
        mes = document.getElementById('resMes3')
    } else if (mesData == 'admMes1') {
        mes = document.getElementById('admMes1')
    } else if (mesData == 'admMes2') {
        mes = document.getElementById('admMes2')
    } else if (mesData == 'admMes3') {
        mes = document.getElementById('admMes3')
    } else if (mesData == 'docMes') {
        mes = document.getElementById('docMes')
    } else if (mesData == 'nascMes1') {
        mes = document.getElementById('nascMes1')
    } else if (mesData == 'nascMes2') {
        mes = document.getElementById('nascMes2')
    } else if (mesData == 'nascMes3') {
        mes = document.getElementById('nascMes3')
    }
    const num = '0123456789';
    let conferir = true;

    if (mes.value == '') {
        return (
            mes.style.color = 'red',
            mes.value = 0
        )
    }

    while (mes.value.includes(" ")) {
        mes.value = mes.value.replace(" ", "")
    }

    for (i = 0; i < mes.value.length; i++) {

        for (j = 0; j < num.length; j++) {

            if (mes.value[i] == num[j]) {

                mes.style.backgroundColor = "white"
                mes.style.color = "black";
                conferir = true
                break;

            } else {
                conferir = false
            }
        }
        if (conferir == false) {
            mes.style.color = "red"
            break;
        }
    }


    if (mes.value > 12 || mes.value <= 0) {
        conferir = false;
    } else if (mes.value.length > 2) {
        conferir = false;
    }
    if (conferir == false) {
        checagens++
        mes.style.color = "red"
    }
    if (mes.value.length < 2 && conferir == true) {
        mes.value = '0' + mes.value.charAt(0);
    }
}

function checarAno(anoData) {
    if (anoData == 'nascAno') {
        ano = document.getElementById('nascAno')
    } else if (anoData == 'nascAno1') {
        ano = document.getElementById('nascAno1')
    } else if (anoData == 'nascAno2') {
        ano = document.getElementById('nascAno2')
    } else if (anoData == 'nascAno3') {
        ano = document.getElementById('nascAno3')
    } else if (anoData == 'resAno1') {
        ano = document.getElementById('resAno1')
    } else if (anoData == 'resAno3') {
        ano = document.getElementById('resAno3')
    } else if (anoData == 'resAno2') {
        ano = document.getElementById('resAno2')
    } else if (anoData == 'admAno1') {
        ano = document.getElementById('admAno1')
    } else if (anoData == 'admAno2') {
        ano = document.getElementById('admAno2')
    } else if (anoData == 'admAno3') {
        ano = document.getElementById('admAno3')
    } else if (anoData == 'docAno') {
        ano = document.getElementById('docAno')
    }
    const num = '0123456789';
    let data = new Date();
    let anoAtual = data.getFullYear();
    let conferir = true;

    if (ano.value == '') {
        return (
            ano.style.color = 'red',
            ano.value = '0000'
        )
    }

    while (ano.value.includes(" ")) {
        ano.value = ano.value.replace(" ", "")
    }

    for (i = 0; i < ano.value.length; i++) {

        for (j = 0; j < num.length; j++) {

            if (ano.value[i] == num[j]) {

                ano.style.backgroundColor = "white"
                ano.style.color = "black";
                conferir = true
                break;

            } else {
                conferir = false
            }
        }
        if (conferir == false) {
            ano.style.color = "red"
            break;
        }
    }


    if (ano.value.length != 4) {
        conferir = false
    }

    let idade = anoAtual - ano.value

    if (idade < 18 || idade > 65) {
        ano.style.color = "red"
        conferir = false
    }

    if (conferir == false) {
        checagens++
    }
}

function checarCpf(cpf) {
    let civil = document.getElementById('civilInput')
    let filhos = document.getElementById('possuiFilhosInput')

    if (cpf == 'idtInput') {
        cpf = document.getElementById("idtInput")
        labelCpf = document.getElementById("labelIdt")
    } else if (cpf == 'cpfInput') {
        cpf = document.getElementById("cpfInput")
        labelCpf = document.getElementById("labelCpfInput")
        if (civil.value != 'Casado(a)') {
            cpf.disabled = 'true'
            return labelCpf.style.color = 'black'
        }
    } else if (cpf == 'cpfInput1') {
        cpf = document.getElementById("cpfInput1")
        labelCpf = document.getElementById("labelCpfInput1")
        if (filhos.value != 'Sim') {
            cpf.disabled = 'true'
            return labelCpf.style.color = 'black'
        }
    } else if (cpf == 'cpfInput2') {
        cpf = document.getElementById("cpfInput2")
        labelCpf = document.getElementById("labelCpfInput2")
        if (filhos.value != 'Sim') {
            cpf.disabled = 'true'
            return labelCpf.style.color = 'black'
        }
    } else if (cpf == 'cpfInput3') {
        cpf = document.getElementById("cpfInput3")
        labelCpf = document.getElementById("labelCpfInput3")
        if (filhos.value != 'Sim') {
            cpf.disabled = 'true'
            return labelCpf.style.color = 'black'
        }
    }
    const num = '0123456789';
    let cont = 0;
    let conferir = true;

    if (cpf.value == '') {
        return labelCpf.style.color = 'red'
    } else {
        labelCpf.style.color = 'black'
    }

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

        for (j = 0; j < num.length; j++) {

            if (cpf.value[i] == num[j]) {

                cpf.style.backgroundColor = "white"
                cpf.style.color = "black";
                conferir = true
                cont++
                break;

            } else {
                conferir = false
            }
        }
        if (conferir == false) {
            cpf.style.color = "red"
            break;
        } else if (cont < 11) {
            cpf.style.color = "red"
            conferir = false
        } else if (cont > 11) {
            cpf.style.color = "red"
            conferir = false
        }
    }

    if (conferir == true) {
        cpf.value = cpf.value.substring(0, 3) + '.' + cpf.value.substring(3, 6) + '.' + cpf.value.substring(6, 9) + '-' + cpf.value.substring(9, 12)
    } else if (conferir == false) {
        checagens++
    }
}