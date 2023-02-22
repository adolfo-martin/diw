document.addEventListener('DOMContentLoaded', programarFinAnimacionUno);

function programarFinAnimacionUno(e) {
    document.querySelector('.pelota-1')
        .addEventListener('animationend', iniciarAnimacionDos)
}

function iniciarAnimacionDos(e) {
    // document.querySelector('.pelota-2').style.animationPlayState = 'running';
    document.querySelector('.pelota-2').classList.toggle('animacion-parada');
}