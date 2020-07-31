let cont = 0


function slideShow(seta) {
    let fundo = document.getElementById('articleindex')
    let ball1 = document.getElementById('sectionball1')
    let ball2 = document.getElementById('sectionball2')
    let ball3 = document.getElementById('sectionball3')
    let ball4 = document.getElementById('sectionball4')
    let ball5 = document.getElementById('sectionball5')

    if (seta == 'direita') {
        cont++
    } else if (seta == 'esquerda') {
        cont--
    }

    if (cont == -1) {
        cont = 5
    } else if (cont == 6) {
        cont = 0
    }

    switch (cont) {
        case 0:
            fundo.style.width = '100%';
            fundo.style.background = 'url(imagem/bgindex.jpg)';
            fundo.style.backgroundSize = '100% 100%';
            ball1.style.backgroundColor = 'gray';
            ball2.style.backgroundColor = 'gray';
            ball3.style.backgroundColor = 'gray';
            ball4.style.backgroundColor = 'gray';
            ball5.style.backgroundColor = 'gray';
            break;
        case 1:
            fundo.style.background = 'url(imagem/historia.jpg)';
            fundo.style.backgroundSize = '100% 100%';
            ball1.style.backgroundColor = 'rgb(49, 49, 49)';
            ball2.style.backgroundColor = 'gray';
            ball3.style.backgroundColor = 'gray';
            ball4.style.backgroundColor = 'gray';
            ball5.style.backgroundColor = 'gray';

            break;
        case 2:
            fundo.style.background = 'url(imagem/menu.jpg)';
            fundo.style.backgroundSize = '100% 100%';
            ball2.style.backgroundColor = 'rgb(49, 49, 49)';
            ball1.style.backgroundColor = 'gray';
            ball3.style.backgroundColor = 'gray';
            ball4.style.backgroundColor = 'gray';
            ball5.style.backgroundColor = 'gray';

            break;
        case 3:
            fundo.style.background = 'url(imagem/bggaleria.jpg)';
            fundo.style.backgroundSize = '100% 100%';
            ball3.style.backgroundColor = 'rgb(49, 49, 49)';
            ball2.style.backgroundColor = 'gray';
            ball1.style.backgroundColor = 'gray';
            ball4.style.backgroundColor = 'gray';
            ball5.style.backgroundColor = 'gray';

            break;
        case 4:
            fundo.style.background = 'url(imagem/indexreserva.jpg)';
            fundo.style.backgroundSize = '100% 100%';
            ball4.style.backgroundColor = 'rgb(49, 49, 49)';
            ball2.style.backgroundColor = 'gray';
            ball3.style.backgroundColor = 'gray';
            ball1.style.backgroundColor = 'gray';
            ball5.style.backgroundColor = 'gray';

            break;
        case 5:
            fundo.style.background = 'url(imagem/avaliacao.jpeg)';
            fundo.style.backgroundSize = '100% 100%';
            ball5.style.backgroundColor = 'rgb(49, 49, 49)';
            ball2.style.backgroundColor = 'gray';
            ball3.style.backgroundColor = 'gray';
            ball4.style.backgroundColor = 'gray';
            ball1.style.backgroundColor = 'gray';

            break;
        default:
            break;
    }
}