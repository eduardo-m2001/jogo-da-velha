import { GAME } from "./module/variables.js";
import { Profile, isDraw, endGame, setHoverEffect, markCell, swapTurns } from "./module/helper.js";
import { checkWin, WIN_COMBINATIONS } from './module/win.js';
import { resetScoreboard } from "./module/helper.js";

GAME.startBtn.addEventListener("click", startGame);
GAME.restartBtn.addEventListener("click", startGame);
GAME.drawBtn.addEventListener("click", startGame);
const resetButton = document.getElementById('reset-scoreboard');
resetButton.addEventListener('click', resetScoreboard);

Profile()

function startGame() {
    if (!GAME.players['1'] || !GAME.players['2']) {
        alert("Selecione um personagem!");
        return;  // Se algum dos jogadores não tiver selecionado um personagem, pare a execução aqui.
    }

    GAME.X_CLASS = GAME.players['1'];
    GAME.Y_CLASS = GAME.players['2'];

    setHoverEffect();

    GAME.blockElements.forEach(cell => {
        cell.classList.remove(GAME.X_CLASS, GAME.Y_CLASS, "win", "player-1", "player-2", "female-1", "female-2", "male-1", "male-2");
        cell.removeAttribute("data-player");
        cell.removeEventListener("click", handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    })

    GAME.startWindow.classList.add("hide");
    GAME.winEl.classList.remove("show");
    GAME.drawEl.classList.remove("show");
    if (GAME.winnerImg.children.length) GAME.winnerImg.removeChild(GAME.winner);
}

function handleClick(e) {
    const cell = e.target;
    const currentClass = GAME.turn ? GAME.Y_CLASS : GAME.X_CLASS;
    
    markCell(cell, currentClass);

    let flag = checkWin(currentClass, GAME.blockElements).filter((win, index) => {
        if (win) {
            WIN_COMBINATIONS[index].map(i => {
                GAME.blockElements[i].classList.add('win');
            })
            GAME.winner = GAME.blockElements[WIN_COMBINATIONS[index][0]].cloneNode(true);
            return win !== false;
        }
    });

    if (flag.length) {
        endGame(false, GAME.winEl, GAME.drawEl);
        GAME.winnerImg.append(GAME.winner);
    } else if (isDraw()) {
        endGame(true, GAME.winEl, GAME.drawEl);
    }

    GAME.turn = !GAME.turn;  // Certifique-se de que a alternância esteja correta.
    setHoverEffect();
}