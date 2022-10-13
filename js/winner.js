const saveWinner = () => {
    let textWinner = document.getElementById('text-winner');
    let nameWinnerP = JSON.parse(sessionStorage.getItem("WINNER"));
    textWinner.innerHTML = `${nameWinnerP} ha ganado la partida`
};

saveWinner();

/// Confeti del ganador
let confe = document.querySelector('#my-canvas');

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();