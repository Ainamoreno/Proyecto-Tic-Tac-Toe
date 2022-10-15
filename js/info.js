
let cpuP1 = document.getElementById('player1-option2')
let cpuP2 = document.getElementById('player2-option2')
cpuP1.addEventListener('click', () => {
    if (cpuP1.checked) {
        cpuP2 = document.getElementById("player2-option2")
        cpuP2.disabled = true;
    }
});
cpuP2.addEventListener('click', () => {
    if (cpuP2.checked) {
        cpuP1 = document.getElementById("player1-option2")
        cpuP1.disabled = true;
    }
});

// Función datos jugador
const showPlayerData = () => {
    for (check of inputsRadioP1) {
        let inputsRadioP1 = check.checked
        if (!inputsRadioP1) {
            msgError.innerHTML = '*Introduzca el tipo y nombre de ambos jugadores*'
        } else {
            for (check of inputsRadioP2) {
                let inputsRadioP2 = check.checked
                if (!inputsRadioP2 || namePlayer1.value == "" || namePlayer2.value == "") {
                    msgError.innerHTML = '*Introduzca el tipo y nombre de ambos jugadores*'
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
        }
    };
};