// Divs | Párrafos de la partida
const textTurn = document.getElementById('turno-de');

// Constantes información del jugador

const namePlayer1 = document.getElementById('name-player1');
const namePlayer2 = document.getElementById('name-player2');

const optionHumanJ1 = document.getElementById('player1-option1');
const optionHumanJ2 = document.getElementById('player2-option1');
let turn = 1;

// Objetos

const cells = [
    {
        position: 1,
        selected: false,
        selectedFor: undefined
    },
    {
        position: 2,
        selected: false,
        selectedFor: undefined
    },
    {
        position: 3,
        selected: false,
        selectedFor: undefined
    },
    {
        position: 4,
        selected: false,
        selectedFor: undefined
    },
    {
        position: 5,
        selected: false,
        selectedFor: undefined
    },
    {
        position: 6,
        selected: false,
        selectedFor: undefined
    },
    {
        position: 7,
        selected: false,
        selectedFor: undefined
    },
    {
        position: 8,
        selected: false,
        selectedFor: undefined
    },
    {
        position: 9,
        selected: false,
        selectedFor: undefined
    },
]

// Función datos jugador
const showPlayerData = () => {
    if (namePlayer1.value == "" || namePlayer2.value == "") {
        alert('Vuelva a la página anterior e introduce datos válidos');
    } else {
        playersList = JSON.parse(sessionStorage.getItem('LISTA_JUGADORES'));

        playersList = [
            {
                name: namePlayer1.value,
                human: optionHumanJ1.checked
            },
            {
                name: namePlayer2.value,
                human: optionHumanJ2.checked
            }
        ]
        sessionStorage.setItem('LISTA_JUGADORES', JSON.stringify(playersList));
        window.location.href = "start.html";
    }
};

const clickIcon = (position) => {
    let arrayTurn = celdas.filter(cell => cell.selectedFor == 1 || cell.selectedFor == 2);
    let cell = cells.find(cell => cell.position == position);

    // casuítica de que entre en el if en caso de que la celda no esté seleccionada
    if (cell.selected == false) {

        if (arrayTurn.length <= 5) {
            cell.selected = true;
            cell.selectedFor = turn;
            showHideIcon('block', position);

            validateWinningOptions(1, 2, 3);
            validateWinningOptions(4, 5, 6);
            validateWinningOptions(7, 8, 9);
            validateWinningOptions(3, 6, 9);
            validateWinningOptions(2, 5, 8);
            validateWinningOptions(1, 4, 7);
            validateWinningOptions(3, 5, 7);
            validateWinningOptions(1, 5, 9);

            turn = turn === 1 ? 2 : 1;
        } else {
            alert('No puede añadir ninguna ficha más');
        }

        // casuítica de que estén 6 celdas seleccionadas y se de click a una celda que le pertenezca al jugador
    } else if (arrayTurn.length >= 6 && cell.selectedFor == turn) {
        showHideIcon('none', position);
        cell.selected = false;
        cell.selectedFor = undefined;
    }


    console.log(cell)
    showInformation()
    console.log(arrayTurn)
};

showHideIcon = (display, position) => {
    if (turn == 1) {
        const cross = document.getElementById(`icon${position}-x`);
        cross.style.display = display;
    } else {
        const circle = document.getElementById(`icon${position}-o`);
        circle.style.display = display;
    }
};

const showInformation = () => {
    if (turn == 1) {
        textTurn.innerHTML = " ";
        const name = JSON.parse(sessionStorage.getItem("LISTA_JUGADORES"))[0].name;
        textTurn.innerHTML += `<p>Turno de ${name}</p>`;
    } else {
        textTurn.innerHTML = " ";
        const name = JSON.parse(sessionStorage.getItem("LISTA_JUGADORES"))[1].name;
        textTurn.innerHTML += `<p>Turno de ${name}</p>`;
    }

};

const validateWinningOptions = (pos1, pos2, pos3) => {
    let arrayPlayerTurn = cells.filter(cell => cell.selectedFor == turn);
    if (arrayPlayerTurn.length == 3) {
        if (arrayPlayerTurn[0].position == pos1 && arrayPlayerTurn[1].position == pos2 &&
            arrayPlayerTurn[2].position == pos3) {
            alert("Enhorabuena has ganado")
        }
    }
};
showInformation();

