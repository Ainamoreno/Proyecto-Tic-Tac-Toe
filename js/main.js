// Divs | Párrafos de la partida
const textTurn = document.getElementById('turno-de');
const numCounter = document.getElementById('counter');

// Constantes información del jugador

const namePlayer1 = document.getElementById('name-player1');
const namePlayer2 = document.getElementById('name-player2');

const optionHumanJ1 = document.getElementById('player1-option1');
const optionHumanJ2 = document.getElementById('player2-option1');
let turn = 1;
let counter = 0;
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
];

// Función datos jugador
const showPlayerData = () => {
    if (namePlayer1.value == "" || namePlayer2.value == "") {
        alert('Vuelva a la página anterior e introduce datos válidos');
    } else {
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
        window.location.href = "play.html";
    }
};

// Mostrar información jugador
const nameP1 = JSON.parse(sessionStorage.getItem("LISTA_JUGADORES"))[0].name;
const nameP2 = JSON.parse(sessionStorage.getItem("LISTA_JUGADORES"))[1].name;
const showInformation = () => {
    numCounter.innerHTML = `<p><strong>Turno: </strong><i>${counter}</i></p>`;
    if (turn == 1) {
        textTurn.innerHTML = " ";

        textTurn.innerHTML += `<p><strong>Turno de: </strong><i>${nameP1}</i></p>`;
    } else {
        textTurn.innerHTML = " ";

        textTurn.innerHTML += `<p><strong>Turno de: </strong><i>${nameP2}</i></p>`;
    }

};

const humanJ1 = JSON.parse(sessionStorage.getItem("LISTA_JUGADORES"))[0].human;
const humanJ2 = JSON.parse(sessionStorage.getItem("LISTA_JUGADORES"))[1].human;

const clickIcon = (position) => {
    let arrayTurn = cells.filter(cell => cell.selectedFor == 1 || cell.selectedFor == 2);
    let cell = cells.find(cell => cell.position == position);

    if (cell.selected == false) {

        if (arrayTurn.length <= 5) {
            counter++
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

            showIconCpu(humanJ1, 1);
            hideIconCpu(humanJ1, 1);
            showIconCpu(humanJ2, 2);
            hideIconCpu(humanJ2, 2);
        }




    } else {
        if (cell.selected == true) {
            if (arrayTurn.length >= 6 && cell.selectedFor == turn) {
                console.log(cells)
                cell.selected = false;
                cell.selectedFor = undefined;
                showHideIcon('none', position);
            }
        }

    }

    showInformation()
};

showInformation();

// Mostrar u ocultar ficha
showHideIcon = (display, position) => {
    if (turn == 2 && humanJ2 == false) {
        const circle = document.getElementById(`icon${position}-o`);
        circle.style.display = display;

    } else if (turn == 2 && humanJ2 == true) {
        const circle = document.getElementById(`icon${position}-o`);
        circle.style.display = display;
    } else {
        const cross = document.getElementById(`icon${position}-x`);
        cross.style.display = display;
    }
};

// Validar opciones ganadoras
const validateWinningOptions = (pos1, pos2, pos3) => {
    let arrayPlayerTurn = cells.filter(cell => cell.selectedFor == turn);
    if (arrayPlayerTurn.length == 3) {
        if (arrayPlayerTurn[0].position == pos1 && arrayPlayerTurn[1].position == pos2 &&
            arrayPlayerTurn[2].position == pos3) {
            if (turn == 1) {
                window.location.href = "winner.html";
                sessionStorage.setItem('WINNER', JSON.stringify(nameP1));
                sessionStorage.setItem('COUNTER', JSON.stringify(counter));
                hideIcons();

            } else {
                window.location.href = "winner.html";
                sessionStorage.setItem('WINNER', JSON.stringify(nameP2));
                sessionStorage.setItem('COUNTER', JSON.stringify(counter));
                hideIcons();

            }
        }
    }
};

// Ocultar iconos
const hideIcons = () => {
    setTimeout(() => {
        const iconsX = document.getElementsByClassName('icon-x');
        let arrayIconsX = Array.from(iconsX);
        arrayIconsX.map(icon => icon = icon.style.display = 'none')
        const iconsO = document.getElementsByClassName('icon-o');
        let arrayIconsO = Array.from(iconsO);
        arrayIconsO.map(icon => icon = icon.style.display = 'none')
    }, 2000)

};




