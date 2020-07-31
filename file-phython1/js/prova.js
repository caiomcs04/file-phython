let contador = 0
let cont = 0

function checarResposta() {
    let resultado = document.getElementById('acertos')
    let linkFinal = document.getElementById('linkProva')
    let botao = document.getElementById('botaoProva')
    let apto = ' voce não esta apto'
    if (contador == 0) {
        botao.style.width = '200px'
        botao.innerHTML = 'CONTINUAR'

        //id pergunta 1
        let disable1 = document.getElementsByName('pergunta1')
        let resposta1_1 = document.getElementById('resposta1-1');
        let resposta1_2 = document.getElementById('resposta1-2');
        let resposta1_3 = document.getElementById('resposta1-3');
        let resposta1_4 = document.getElementById('resposta1-4');

        let img1_1 = document.getElementById('img1-1');
        let img1_2 = document.getElementById('img1-2');
        let img1_3 = document.getElementById('img1-3');
        let img1_4 = document.getElementById('img1-4');
        //id pergunta 2
        let disable2 = document.getElementsByName('pergunta2')
        let resposta2_1 = document.getElementById('resposta2-1');
        let resposta2_2 = document.getElementById('resposta2-2');
        let resposta2_3 = document.getElementById('resposta2-3');
        let resposta2_4 = document.getElementById('resposta2-4');

        let img2_1 = document.getElementById('img2-1');
        let img2_2 = document.getElementById('img2-2');
        let img2_3 = document.getElementById('img2-3');
        let img2_4 = document.getElementById('img2-4');
        //id pergunta 3
        let disable3 = document.getElementsByName('pergunta3')
        let resposta3_1 = document.getElementById('resposta3-1');
        let resposta3_2 = document.getElementById('resposta3-2');
        let resposta3_3 = document.getElementById('resposta3-3');
        let resposta3_4 = document.getElementById('resposta3-4');

        let img3_1 = document.getElementById('img3-1');
        let img3_2 = document.getElementById('img3-2');
        let img3_3 = document.getElementById('img3-3');
        let img3_4 = document.getElementById('img3-4');
        //id pergunta 4
        let disable4 = document.getElementsByName('pergunta4')
        let resposta4_1 = document.getElementById('resposta4-1');
        let resposta4_2 = document.getElementById('resposta4-2');
        let resposta4_3 = document.getElementById('resposta4-3');
        let resposta4_4 = document.getElementById('resposta4-4');

        let img4_1 = document.getElementById('img4-1');
        let img4_2 = document.getElementById('img4-2');
        let img4_3 = document.getElementById('img4-3');
        let img4_4 = document.getElementById('img4-4');
        //id pergunta 5
        let disable5 = document.getElementsByName('pergunta5')
        let resposta5_1 = document.getElementById('resposta5-1');
        let resposta5_2 = document.getElementById('resposta5-2');
        let resposta5_3 = document.getElementById('resposta5-3');
        let resposta5_4 = document.getElementById('resposta5-4');

        let img5_1 = document.getElementById('img5-1');
        let img5_2 = document.getElementById('img5-2');
        let img5_3 = document.getElementById('img5-3');
        let img5_4 = document.getElementById('img5-4');

        //retorno das respostas da pergunta 1

        if (resposta1_1.checked) {
            img1_1.style.display = 'inline'
            img1_3.style.display = 'inline'

        } else if (resposta1_2.checked) {
            img1_2.style.display = 'inline'
            img1_3.style.display = 'inline'

        } else if (resposta1_3.checked) {
            img1_3.style.display = 'inline'
            cont++

        } else if (resposta1_4.checked) {
            img1_4.style.display = 'inline'
            img1_3.style.display = 'inline'

        }

        // retorno das resposta da pergunta 2

        if (resposta2_1.checked) {
            img2_1.style.display = 'inline'
            img2_2.style.display = 'inline'

        } else if (resposta2_2.checked) {
            img2_2.style.display = 'inline'
            cont++

        } else if (resposta2_3.checked) {
            img2_3.style.display = 'inline'
            img2_2.style.display = 'inline'

        } else if (resposta2_4.checked) {
            img2_4.style.display = 'inline'
            img2_2.style.display = 'inline'
        }

        //retorno das resposta da pergunta 3

        if (resposta3_1.checked) {
            img3_1.style.display = 'inline'
            img3_3.style.display = 'inline'

        } else if (resposta3_2.checked) {
            img3_2.style.display = 'inline'
            img3_3.style.display = 'inline'

        } else if (resposta3_3.checked) {
            img3_3.style.display = 'inline'
            cont++

        } else if (resposta3_4.checked) {
            img3_4.style.display = 'inline'
            img3_3.style.display = 'inline'
        }

        // retorno da resposta da pergunta 4

        if (resposta4_1.checked) {
            img4_1.style.display = 'inline'
            cont++

        } else if (resposta4_2.checked) {
            img4_2.style.display = 'inline'
            img4_1.style.display = 'inline'

        } else if (resposta4_3.checked) {
            img4_3.style.display = 'inline'
            img4_1.style.display = 'inline'

        } else if (resposta4_4.checked) {
            img4_4.style.display = 'inline'
            img4_1.style.display = 'inline'
        }

        // retorno da resposta da pergunta 5

        if (resposta5_1.checked) {
            img5_1.style.display = 'inline'
            img5_2.style.display = 'inline'

        } else if (resposta5_2.checked) {
            img5_2.style.display = 'inline'
            cont++

        } else if (resposta5_3.checked) {
            img5_3.style.display = 'inline'
            img5_2.style.display = 'inline'

        } else if (resposta5_4.checked) {
            img5_4.style.display = 'inline'
            img5_2.style.display = 'inline'

        }

        if (cont > 3) {
            apto = 'voce está apto'
            resultado.style.color = 'blue'
            resultado = resultado.innerHTML = ' Você acertou ' + cont + '/5 ' + apto

        } else {
            resultado.style.color = 'red'
            resultado = resultado.innerHTML = ' Você acertou ' + cont + '/5 ' + apto

        }


        for (let i = 0; i < disable1.length; i++) {
            disable1[i].disabled = 'true'
        }

        for (let i = 0; i < disable2.length; i++) {
            disable2[i].disabled = 'true'
        }

        for (let i = 0; i < disable3.length; i++) {
            disable3[i].disabled = 'true'
        }

        for (let i = 0; i < disable4.length; i++) {
            disable4[i].disabled = 'true'
        }

        for (let i = 0; i < disable5.length; i++) {
            disable5[i].disabled = 'true'

        }
        contador++
    } else {
        if (cont > 3) {
            linkFinal.href = 'aprovado.html'
        } else {
            linkFinal.href = 'index.html'
        }

    }


}