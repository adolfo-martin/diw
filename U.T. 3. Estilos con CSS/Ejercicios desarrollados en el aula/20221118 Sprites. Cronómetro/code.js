document.addEventListener('DOMContentLoaded', arrancarCronometro);

let numeroActual = 9;
let posicionActual = -810;

function arrancarCronometro(e) {
    const nDivNumero = document.querySelector('.numero');
    nDivNumero.style.backgroundPositionX = `${posicionActual}px`;

    const intervaloId = setInterval(cambiarNumero, 1000);

    function cambiarNumero() {
        const nDivNumero = document.querySelector('.numero');
        posicionActual += 90;
        numeroActual -= 1;
        nDivNumero.style.backgroundPositionX = `${posicionActual}px`;

        if (numeroActual === 0) {
            clearInterval(intervaloId);
        }
    }
}