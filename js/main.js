// Constantes información del jugador

const nombreJugadorUno = document.getElementById('name-player1');
const nombreJugadorDos = document.getElementById('name-player2');

const opcionHumanoJ1 = document.getElementById('player1-option1');
const opcionHumanoJ2 = document.getElementById('player2-option1');

console.log(nombreJugadorUno)
console.log(opcionHumanoJ2.checked)



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
function mostrarDatosJugador() {
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

    console.log(listaJugadores[0].nombre)
}