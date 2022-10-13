// Función para jugador CPU
showIconCpu = (human, num) => {
    const arrayBusy = cells.filter(cell => cell.selected == true && cell.selectedFor == num);
    let numRandomBusy = Math.floor(Math.random() * arrayBusy.length);
    const arrayFree = cells.filter(cell => cell.selected == false && cell.position !== numRandomBusy);
    let numRandomFree = Math.floor(Math.random() * arrayFree.length);
    const arrayJ = cells.filter(cell => cell.selectedFor == num);
    let arrayTurn = cells.filter(cell => cell.selectedFor == 1 || cell.selectedFor == 2);
    if (human == false) {

        setTimeout(() => {
            if (arrayTurn.length <= 5) {
                counter++
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
    let arrayTurn = cells.filter(cell => cell.selectedFor == 1 || cell.selectedFor == 2);
    if (human == false) {
        setTimeout(() => {
            if (arrayTurn.length >= 6) {

                positionRandom = arrayBusy[numRandomBusy].position
                arrayBusy[numRandomBusy].selected = false;
                arrayBusy[numRandomBusy].selectedFor = undefined;
                showHideIcon('none', positionRandom)

                counter++
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