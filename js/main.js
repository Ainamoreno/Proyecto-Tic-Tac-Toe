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
    if (turn == 1) {
        textTurn.innerHTML = " ";

        textTurn.innerHTML += `<p>Turno de ${nameP1}</p>`;
    } else {
        textTurn.innerHTML = " ";

        textTurn.innerHTML += `<p>Turno de ${nameP2}</p>`;
    }

};

const humanJ1 = JSON.parse(sessionStorage.getItem("LISTA_JUGADORES"))[0].human;
const humanJ2 = JSON.parse(sessionStorage.getItem("LISTA_JUGADORES"))[1].human;

const clickIcon = (position) => {
    let arrayTurn = cells.filter(cell => cell.selectedFor == 1 || cell.selectedFor == 2);
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

        }

        showIconCpu(humanJ1, 1);
        hideIconCpu(humanJ1, 1);
        showIconCpu(humanJ2, 2);
        hideIconCpu(humanJ2, 2);

    } else {
        if (arrayTurn.length >= 6 && cell.selectedFor == turn) {
            console.log(cells)
            cell.selected = false;
            cell.selectedFor = undefined;
            showHideIcon('none', position);
        }
    }

    showInformation()
};

// Función para jugador CPU
showIconCpu = (human, num) => {
    const arrayBusy = cells.filter(cell => cell.selected == true && cell.selectedFor == num);
    let numRandomBusy = Math.floor(Math.random() * arrayBusy.length);
    const arrayFree = cells.filter(cell => cell.selected == false && cell.position !== numRandomBusy);
    let numRandomFree = Math.floor(Math.random() * arrayFree.length);
    const arrayJ = cells.filter(cell => cell.selectedFor == num);
    if (human == false) {

        setTimeout(() => {
            if (arrayJ.length <= 2) {
                arrayFree[numRandomFree].selected = true;
                arrayFree[numRandomFree].selectedFor = num;
                positionRandom = arrayFree[numRandomFree].position
                showHideIcon('block', positionRandom)

                validateWinningOptions(1, 2, 3);
                validateWinningOptions(4, 5, 6);
                validateWinningOptions(7, 8, 9);
                validateWinningOptions(3, 6, 9);
                validateWinningOptions(2, 5, 8);
                validateWinningOptions(1, 4, 7);
                validateWinningOptions(3, 5, 7);
                validateWinningOptions(1, 5, 9);

                turn = turn === 1 ? 2 : 1;
            } showInformation();
        }, 1000)
    }

};

hideIconCpu = (human, num) => {
    const arrayBusy = cells.filter(cell => cell.selected == true && cell.selectedFor == num);
    let numRandomBusy = Math.floor(Math.random() * arrayBusy.length);
    const arrayFree = cells.filter(cell => cell.selected == false && cell.position !== numRandomBusy);
    let numRandomFree = Math.floor(Math.random() * arrayFree.length);
    const arrayJ = cells.filter(cell => cell.selectedFor == num);
    if (human == false) {
        setTimeout(() => {
            if (arrayJ.length >= 3) {

                positionRandom = arrayBusy[numRandomBusy].position
                console.log(positionRandom)
                arrayBusy[numRandomBusy].selected = false;
                arrayBusy[numRandomBusy].selectedFor = undefined;
                showHideIcon('none', positionRandom)

                arrayFree[numRandomFree].selected = true;
                arrayFree[numRandomFree].selectedFor = num;
                positionRandom = arrayFree[numRandomFree].position
                showHideIcon('block', positionRandom)

                validateWinningOptions(1, 2, 3);
                validateWinningOptions(4, 5, 6);
                validateWinningOptions(7, 8, 9);
                validateWinningOptions(3, 6, 9);
                validateWinningOptions(2, 5, 8);
                validateWinningOptions(1, 4, 7);
                validateWinningOptions(3, 5, 7);
                validateWinningOptions(1, 5, 9);
                turn = turn === 1 ? 2 : 1;
            }
            showInformation();
        }, 1000)

    }

};

if (humanJ1 == false && humanJ2 == true) {

    showIconCpu(humanJ1, 1)
};

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
                const textWinner = document.getElementById('text-winner');
                textWinner.innerHTML = `${nameP1} ha sido ganador/a de la partida actual.`
                showPopup();
                hideIcons();

            } else {
                const textWinner = document.getElementById('text-winner');
                textWinner.innerHTML = `${nameP2} ha sido ganador/a de la partida actual.`
                showPopup();
                hideIcons();
            }
        }
    }

};

/// Pop-up del ganador
let popup = document.querySelector('.popup');
let close = document.querySelector('.close');
let confe = document.querySelector('#my-canvas');

const showPopup = () => {
    popup.classList.add('active')
    confe.classList.add('active')

    hiddenPopup()
};
const hiddenPopup = () => {
    close.addEventListener('click', () => {
        popup.classList.remove('active')
        confe.classList.remove('active')
    })
};

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

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


showInformation();

