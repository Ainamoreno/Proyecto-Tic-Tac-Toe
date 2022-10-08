// Divs | Párrafos de la partida
const parrafoTurno = document.getElementById('turno-de');

// Constantes información del jugador

const nombreJugadorUno = document.getElementById('name-player1');
const nombreJugadorDos = document.getElementById('name-player2');

const opcionHumanoJ1 = document.getElementById('player1-option1');
const opcionHumanoJ2 = document.getElementById('player2-option1');
let turno = 1;

// Objetos

const celdas = [
    {
        posicion: 1,
        seleccionada: false,
        seleccionadaPor: undefined
    },
    {
        posicion: 2,
        seleccionada: false,
        seleccionadaPor: undefined
    },
    {
        posicion: 3,
        seleccionada: false,
        seleccionadaPor: undefined
    },
    {
        posicion: 4,
        seleccionada: false,
        seleccionadaPor: undefined
    },
    {
        posicion: 5,
        seleccionada: false,
        seleccionadaPor: undefined
    },
    {
        posicion: 6,
        seleccionada: false,
        seleccionadaPor: undefined
    },
    {
        posicion: 7,
        seleccionada: false,
        seleccionadaPor: undefined
    },
    {
        posicion: 8,
        seleccionada: false,
        seleccionadaPor: undefined
    },
    {
        posicion: 9,
        seleccionada: false,
        seleccionadaPor: undefined
    },
]

// Función datos jugador
const mostrarDatosJugador = () => {
    if (nombreJugadorUno.value == "" || nombreJugadorDos.value == "") {
        alert('Vuelva a la página anterior e introduce datos válidos');
    } else {
        listaJugadores = JSON.parse(localStorage.getItem('LISTA_JUGADORES'));

        listaJugadores = [
            {
                nombre: nombreJugadorUno.value,
                humano: opcionHumanoJ1.checked
            },
            {
                nombre: nombreJugadorDos.value,
                humano: opcionHumanoJ2.checked
            }
        ]
        localStorage.setItem('LISTA_JUGADORES', JSON.stringify(listaJugadores));
        window.location.href = "start.html";
    }
}

const clickFicha = (posicion) => {
    let arrayTurno = celdas.filter(celda => celda.seleccionadaPor == 1 || celda.seleccionadaPor == 2);
    let celda = celdas.find(celda => celda.posicion == posicion);

    if (celda.seleccionada == false) {

        if (arrayTurno.length <= 5) {
            celda.seleccionada = true;
            celda.seleccionadaPor = turno;
            mostrarOcultarFicha('block', posicion);
            turno = turno === 1 ? 2 : 1;
        } else {
            alert('No puede añadir ninguna ficha más');
        }

    } else if (arrayTurno.length >= 6 && celda.seleccionadaPor == turno) {
        mostrarOcultarFicha('none', posicion);
        celda.seleccionada = false;
        celda.seleccionadaPor = undefined;
    }
    mostrarInformacion()
};

mostrarOcultarFicha = (display, posicion) => {
    if (turno == 1) {
        const cruz = document.getElementById(`icon${posicion}-x`);
        cruz.style.display = display;
    } else {
        const circulo = document.getElementById(`icon${posicion}-o`);
        circulo.style.display = display;
    }
};

const mostrarInformacion = () => {
    if (turno == 1) {
        parrafoTurno.innerHTML =  " ";
        const nombre = JSON.parse(localStorage.getItem("LISTA_JUGADORES"))[0].nombre;
        parrafoTurno.innerHTML += `<p>Turno de ${nombre}</p>`;
    } else {
        parrafoTurno.innerHTML =  " ";
        const nombre = JSON.parse(localStorage.getItem("LISTA_JUGADORES"))[1].nombre;
        parrafoTurno.innerHTML += `<p>Turno de ${nombre}</p>`;
    }

};
mostrarInformacion();

