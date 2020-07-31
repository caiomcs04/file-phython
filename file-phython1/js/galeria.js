let contEntrada = 4
let contPP = 7
let contSM = 4

function ativar() {
    passarSlideEntrada();
    passarSlidePP();
    passarSlideSobreM();
}

function passarSlideEntrada() {
    let esquerda = document.getElementById('slideEsquerdaEntrada');
    let centro = document.getElementById('slideCentroEntrada');
    let direita = document.getElementById('slideDireitaEntrada');
    let escondido = document.getElementById('slideEscondidoEntrada');


    contEntrada++

    if (contEntrada == 5) {
        contEntrada = 1
    }

    if (contEntrada == 1) {
        esquerda.style.marginLeft = '33%'
        esquerda.style.marginTop = '-1%'
        esquerda.style.opacity = '100%'
        esquerda.style.width = '35%'
        esquerda.style.height = '330px'
        esquerda.style.border = '2px black solid'

        centro.style.marginLeft = '71%'
        centro.style.opacity = '50%'
        centro.style.width = '25%'
        centro.style.border = 'none'
        centro.style.marginTop = '0%'
        centro.style.height = '300px'

        direita.style.marginLeft = '100%'
        direita.style.width = '0px'
        direita.style.opacity = '0%'
        setTimeout(function() {
            direita.style.marginLeft = '0%'
        }, 1335)
        direita.style.border = 'none'


        escondido.style.marginLeft = '5%'
        escondido.style.opacity = '50%'
        escondido.style.width = '25%'
        escondido.style.border = 'none'


    } else if (contEntrada == 2) {
        escondido.style.marginLeft = '33%'
        escondido.style.marginTop = '-1%'
        escondido.style.opacity = '100%'
        escondido.style.width = '35%'
        escondido.style.height = '330px'
        escondido.style.border = '2px black solid'

        esquerda.style.marginLeft = '71%'
        esquerda.style.opacity = '50%'
        esquerda.style.width = '25%'
        esquerda.style.border = 'none'
        esquerda.style.marginTop = '0%'
        esquerda.style.height = '300px'

        centro.style.marginLeft = '100%'
        centro.style.width = '0px'
        centro.style.opacity = '0%'
        setTimeout(function() {
            centro.style.marginLeft = '0%'
        }, 1355)
        centro.style.border = 'none'


        direita.style.marginLeft = '5%'
        direita.style.opacity = '50%'
        direita.style.width = '25%'
        direita.style.border = 'none'


    } else if (contEntrada == 3) {
        direita.style.marginLeft = '33%'
        direita.style.marginTop = '-1%'
        direita.style.opacity = '100%'
        direita.style.width = '35%'
        direita.style.height = '330px'
        direita.style.border = '2px black solid'

        escondido.style.marginLeft = '71%'
        escondido.style.opacity = '50%'
        escondido.style.width = '25%'
        escondido.style.border = 'none'
        escondido.style.marginTop = '0%'
        escondido.style.height = '300px'

        esquerda.style.marginLeft = '100%'
        esquerda.style.width = '0px'
        esquerda.style.opacity = '0%'
        setTimeout(function() {
            esquerda.style.marginLeft = '0%'
        }, 1355)
        esquerda.style.border = 'none'

        centro.style.marginLeft = '5%'
        centro.style.opacity = '50%'
        centro.style.width = '25%'
        centro.style.border = 'none'

    } else if (contEntrada == 4) {
        centro.style.marginLeft = '33%'
        centro.style.marginTop = '-1%'
        centro.style.opacity = '100%'
        centro.style.width = '35%'
        centro.style.height = '330px'
        centro.style.border = '2px black solid'

        direita.style.marginLeft = '71%'
        direita.style.marginTop = '0%'
        direita.style.height = '300px'
        direita.style.opacity = '50%'
        direita.style.width = '25%'
        direita.style.border = 'none'

        escondido.style.marginLeft = '100%'
        escondido.style.width = '0px'
        escondido.style.opacity = '0%'
        setTimeout(function() {
            escondido.style.marginLeft = '0%'
        }, 1355)
        escondido.style.border = 'none'

        esquerda.style.marginLeft = '5%'
        esquerda.style.opacity = '50%'
        esquerda.style.width = '25%'
        esquerda.style.border = 'none'

    }

    setTimeout(function() {
        passarSlideEntrada('play')
    }, 4000)
}

function passarSlidePP() {
    let esquerda = document.getElementById('slideEsquerdaPP');
    let centro = document.getElementById('slideCentroPP');
    let direita = document.getElementById('slideDireitaPP');
    let escondido = document.getElementById('slideEscondidoPP1');
    let escondido2 = document.getElementById('slideEscondidoPP2');
    let escondido3 = document.getElementById('slideEscondidoPP3');
    let escondido4 = document.getElementById('slideEscondidoPP4');

    contPP++

    console.log(contPP)

    if (contPP == 8) {
        contPP = 1
    }

    if (contPP == 1) {
        esquerda.style.marginLeft = '33%'
        esquerda.style.marginTop = '-1%'
        esquerda.style.opacity = '100%'
        esquerda.style.width = '35%'
        esquerda.style.height = '330px'
        esquerda.style.border = '2px black solid'

        centro.style.marginLeft = '71%'
        centro.style.opacity = '50%'
        centro.style.width = '25%'
        centro.style.border = 'none'
        centro.style.marginTop = '0%'
        centro.style.height = '300px'

        direita.style.marginLeft = '100%'
        direita.style.width = '0px'
        direita.style.opacity = '0%'
        setTimeout(function() {
            direita.style.marginLeft = '0%'
        }, 1355)
        direita.style.border = 'none'


        escondido.style.marginLeft = '5%'
        escondido.style.opacity = '50%'
        escondido.style.width = '25%'
        escondido.style.border = 'none'

        escondido2.style.marginLeft = '0%'
        escondido2.style.width = '0px'
        escondido2.style.opacity = '0%'

        escondido3.style.marginLeft = '0%'
        escondido3.style.width = '0px'
        escondido3.style.opacity = '0%'

        escondido4.style.marginLeft = '0%'
        escondido4.style.width = '0px'
        escondido4.style.opacity = '0%'


    } else if (contPP == 2) {
        escondido.style.marginLeft = '33%'
        escondido.style.marginTop = '-1%'
        escondido.style.opacity = '100%'
        escondido.style.width = '35%'
        escondido.style.height = '330px'
        escondido.style.border = '2px black solid'

        esquerda.style.marginLeft = '71%'
        esquerda.style.opacity = '50%'
        esquerda.style.width = '25%'
        esquerda.style.border = 'none'
        esquerda.style.marginTop = '0%'
        esquerda.style.height = '300px'

        centro.style.marginLeft = '100%'
        centro.style.width = '0px'
        centro.style.opacity = '0%'
        setTimeout(function() {
            centro.style.marginLeft = '0%'
        }, 1355)
        centro.style.border = 'none'


        escondido2.style.marginLeft = '5%'
        escondido2.style.opacity = '50%'
        escondido2.style.width = '25%'
        escondido2.style.border = 'none'

        direita.style.marginLeft = '0%'
        direita.style.width = '0px'
        direita.style.opacity = '0%'

        escondido3.style.marginLeft = '0%'
        escondido3.style.width = '0px'
        escondido3.style.opacity = '0%'

        escondido4.style.marginLeft = '0%'
        escondido4.style.width = '0px'
        escondido4.style.opacity = '0%'


    } else if (contPP == 3) {
        escondido2.style.marginLeft = '33%'
        escondido2.style.marginTop = '-1%'
        escondido2.style.opacity = '100%'
        escondido2.style.width = '35%'
        escondido2.style.height = '330px'
        escondido2.style.border = '2px black solid'

        escondido.style.marginLeft = '71%'
        escondido.style.opacity = '50%'
        escondido.style.width = '25%'
        escondido.style.border = 'none'
        escondido.style.marginTop = '0%'
        escondido.style.height = '300px'

        esquerda.style.marginLeft = '100%'
        esquerda.style.width = '0px'
        esquerda.style.opacity = '0%'
        setTimeout(function() {
            esquerda.style.marginLeft = '0%'
        }, 1355)
        esquerda.style.border = 'none'

        escondido3.style.marginLeft = '5%'
        escondido3.style.opacity = '50%'
        escondido3.style.width = '25%'
        escondido3.style.border = 'none'

        centro.style.marginLeft = '0%'
        centro.style.width = '0px'
        centro.style.opacity = '0%'

        escondido4.style.marginLeft = '0%'
        escondido4.style.width = '0px'
        escondido4.style.opacity = '0%'

        direita.style.marginLeft = '0%'
        direita.style.width = '0px'
        direita.style.opacity = '0%'

    } else if (contPP == 4) {
        escondido3.style.marginLeft = '33%'
        escondido3.style.marginTop = '-1%'
        escondido3.style.opacity = '100%'
        escondido3.style.width = '35%'
        escondido3.style.height = '330px'
        escondido3.style.border = '2px black solid'

        escondido2.style.marginLeft = '71%'
        escondido2.style.marginTop = '0%'
        escondido2.style.height = '300px'
        escondido2.style.opacity = '50%'
        escondido2.style.width = '25%'
        escondido2.style.border = 'none'

        escondido.style.marginLeft = '100%'
        escondido.style.width = '0px'
        escondido.style.opacity = '0%'
        setTimeout(function() {
            escondido.style.marginLeft = '0%'
        }, 1355)
        escondido.style.border = 'none'

        escondido4.style.marginLeft = '5%'
        escondido4.style.opacity = '50%'
        escondido4.style.width = '25%'
        escondido4.style.border = 'none'

        esquerda.style.marginLeft = '0%'
        esquerda.style.width = '0px'
        esquerda.style.opacity = '0%'

        direita.style.marginLeft = '0%'
        direita.style.width = '0px'
        direita.style.opacity = '0%'

    } else if (contPP == 5) {
        escondido4.style.marginLeft = '33%'
        escondido4.style.marginTop = '-1%'
        escondido4.style.opacity = '100%'
        escondido4.style.width = '35%'
        escondido4.style.height = '330px'
        escondido4.style.border = '2px black solid'

        escondido3.style.marginLeft = '71%'
        escondido3.style.marginTop = '0%'
        escondido3.style.height = '300px'
        escondido3.style.opacity = '50%'
        escondido3.style.width = '25%'
        escondido3.style.border = 'none'

        escondido2.style.marginLeft = '100%'
        escondido2.style.width = '0px'
        escondido2.style.opacity = '0%'
        setTimeout(function() {
            escondido2.style.marginLeft = '0%'
        }, 1355)
        escondido2.style.border = 'none'

        direita.style.marginLeft = '5%'
        direita.style.opacity = '50%'
        direita.style.width = '25%'
        direita.style.border = 'none'

        esquerda.style.marginLeft = '0%'
        esquerda.style.width = '0px'
        esquerda.style.opacity = '0%'

        escondido.style.marginLeft = '0%'
        escondido.style.width = '0px'
        escondido.style.opacity = '0%'

        centro.style.marginLeft = '0%'
        centro.style.width = '0px'
        centro.style.opacity = '0%'

    } else if (contPP == 6) {
        direita.style.marginLeft = '33%'
        direita.style.marginTop = '-1%'
        direita.style.opacity = '100%'
        direita.style.width = '35%'
        direita.style.height = '330px'
        direita.style.border = '2px black solid'

        escondido4.style.marginLeft = '71%'
        escondido4.style.marginTop = '0%'
        escondido4.style.height = '300px'
        escondido4.style.opacity = '50%'
        escondido4.style.width = '25%'
        escondido4.style.border = 'none'

        escondido3.style.marginLeft = '100%'
        escondido3.style.width = '0px'
        escondido3.style.opacity = '0%'
        setTimeout(function() {
            escondido3.style.marginLeft = '0%'
        }, 1355)
        escondido3.style.border = 'none'

        centro.style.marginLeft = '5%'
        centro.style.opacity = '50%'
        centro.style.width = '25%'
        centro.style.border = 'none'

        esquerda.style.marginLeft = '0%'
        esquerda.style.width = '0px'
        esquerda.style.opacity = '0%'

        escondido.style.marginLeft = '0%'
        escondido.style.width = '0px'
        escondido.style.opacity = '0%'

        escondido2.style.marginLeft = '0%'
        escondido2.style.width = '0px'
        escondido2.style.opacity = '0%'
    } else if (contPP == 7) {
        centro.style.marginLeft = '33%'
        centro.style.marginTop = '-1%'
        centro.style.opacity = '100%'
        centro.style.width = '35%'
        centro.style.height = '330px'
        centro.style.border = '2px black solid'

        direita.style.marginLeft = '71%'
        direita.style.marginTop = '0%'
        direita.style.height = '300px'
        direita.style.opacity = '50%'
        direita.style.width = '25%'
        direita.style.border = 'none'

        escondido4.style.marginLeft = '100%'
        escondido4.style.width = '0px'
        escondido4.style.opacity = '0%'
        setTimeout(function() {
            escondido4.style.marginLeft = '0%'
        }, 1355)
        escondido4.style.border = 'none'

        esquerda.style.marginLeft = '5%'
        esquerda.style.opacity = '50%'
        esquerda.style.width = '25%'
        esquerda.style.border = 'none'

        escondido.style.marginLeft = '0%'
        escondido.style.width = '0px'
        escondido.style.opacity = '0%'

        escondido3.style.marginLeft = '0%'
        escondido3.style.width = '0px'
        escondido3.style.opacity = '0%'

        escondido2.style.marginLeft = '0%'
        escondido2.style.width = '0px'
        escondido2.style.opacity = '0%'
    }
    setTimeout(function() {
        passarSlidePP()
    }, 4000)
}

function passarSlideSobreM() {
    let esquerda = document.getElementById('slideEsquerdaSobreM');
    let centro = document.getElementById('slideCentroSobreM');
    let direita = document.getElementById('slideDireitaSobreM');
    let escondido = document.getElementById('slideEscondidoSobreM');

    contSM++

    if (contSM == 5) {
        contSM = 1
    }

    if (contSM == 1) {
        esquerda.style.marginLeft = '33%'
        esquerda.style.marginTop = '-1%'
        esquerda.style.opacity = '100%'
        esquerda.style.width = '35%'
        esquerda.style.height = '330px'
        esquerda.style.border = '2px black solid'

        centro.style.marginLeft = '71%'
        centro.style.opacity = '50%'
        centro.style.width = '25%'
        centro.style.border = 'none'
        centro.style.marginTop = '0%'
        centro.style.height = '300px'

        direita.style.marginLeft = '100%'
        direita.style.width = '0px'
        direita.style.opacity = '0%'
        setTimeout(function() {
            direita.style.marginLeft = '0%'
        }, 1355)
        direita.style.border = 'none'


        escondido.style.marginLeft = '5%'
        escondido.style.opacity = '50%'
        escondido.style.width = '25%'
        escondido.style.border = 'none'


    } else if (contSM == 2) {
        escondido.style.marginLeft = '33%'
        escondido.style.marginTop = '-1%'
        escondido.style.opacity = '100%'
        escondido.style.width = '35%'
        escondido.style.height = '330px'
        escondido.style.border = '2px black solid'

        esquerda.style.marginLeft = '71%'
        esquerda.style.opacity = '50%'
        esquerda.style.width = '25%'
        esquerda.style.border = 'none'
        esquerda.style.marginTop = '0%'
        esquerda.style.height = '300px'

        centro.style.marginLeft = '100%'
        centro.style.width = '0px'
        centro.style.opacity = '0%'
        setTimeout(function() {
            centro.style.marginLeft = '0%'
        }, 1355)
        centro.style.border = 'none'


        direita.style.marginLeft = '5%'
        direita.style.opacity = '50%'
        direita.style.width = '25%'
        direita.style.border = 'none'


    } else if (contSM == 3) {
        direita.style.marginLeft = '33%'
        direita.style.marginTop = '-1%'
        direita.style.opacity = '100%'
        direita.style.width = '35%'
        direita.style.height = '330px'
        direita.style.border = '2px black solid'

        escondido.style.marginLeft = '71%'
        escondido.style.opacity = '50%'
        escondido.style.width = '25%'
        escondido.style.border = 'none'
        escondido.style.marginTop = '0%'
        escondido.style.height = '300px'

        esquerda.style.marginLeft = '100%'
        esquerda.style.width = '0px'
        esquerda.style.opacity = '0%'
        setTimeout(function() {
            esquerda.style.marginLeft = '0%'
        }, 1355)
        esquerda.style.border = 'none'

        centro.style.marginLeft = '5%'
        centro.style.opacity = '50%'
        centro.style.width = '25%'
        centro.style.border = 'none'

    } else if (contSM == 4) {
        centro.style.marginLeft = '33%'
        centro.style.marginTop = '-1%'
        centro.style.opacity = '100%'
        centro.style.width = '35%'
        centro.style.height = '330px'
        centro.style.border = '2px black solid'

        direita.style.marginLeft = '71%'
        direita.style.marginTop = '0%'
        direita.style.height = '300px'
        direita.style.opacity = '50%'
        direita.style.width = '25%'
        direita.style.border = 'none'

        escondido.style.marginLeft = '100%'
        escondido.style.width = '0px'
        escondido.style.opacity = '0%'
        setTimeout(function() {
            escondido.style.marginLeft = '0%'
        }, 1355)
        escondido.style.border = 'none'

        esquerda.style.marginLeft = '5%'
        esquerda.style.opacity = '50%'
        esquerda.style.width = '25%'
        esquerda.style.border = 'none'

    }

    setTimeout(function() {
        passarSlideSobreM()
    }, 4000)
}