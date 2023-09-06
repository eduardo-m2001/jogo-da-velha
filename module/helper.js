
import { GAME } from "./variables.js";

export function Profile() {
    const playerSections = document.querySelectorAll(".player-selection");
    
    playerSections.forEach(section => {
        section.addEventListener("click", e => {
            if (e.target.matches(".id")) {
                const playerId = section.dataset.player;
                const characterId = e.target.dataset.id;

                if (playerId === '1' && GAME.players['2'] === characterId) return;
                if (playerId === '2' && GAME.players['1'] === characterId) return;

                GAME.players[playerId] = characterId;

                if (playerId === '1') {
                    GAME.X_CLASS = characterId;
                } else if (playerId === '2') {
                    GAME.Y_CLASS = characterId;
                }
                
                const currentSelected = section.querySelector(".selected");
                if (currentSelected) {
                    currentSelected.classList.remove("selected");
                }

                e.target.classList.add("selected");
            }
        });
    });
}

export function setHoverEffect() {
    GAME.boardElement.classList.remove(GAME.X_CLASS, GAME.Y_CLASS, "player-1", "player-2", "female-1", "female-2", "male-1", "male-2");
    
    if (GAME.turn) {
        GAME.boardElement.classList.add("player-2", GAME.Y_CLASS);
    } else {
        GAME.boardElement.classList.add("player-1", GAME.X_CLASS);
    }
}

export function markCell(cell, currentClass) {
    cell.classList.add(currentClass);
    if (currentClass === GAME.X_CLASS) {
        cell.classList.add('player-1', GAME.players['1']);
    } else if (currentClass === GAME.Y_CLASS) {
        cell.classList.add('player-2', GAME.players['2']);
    }
}

export function swapTurns(turn){
    return turn =! turn;
}

export function endGame(draw, winEl, drawEl){
    if (!draw){
        winEl.classList.add("show");
        if (GAME.winner.classList.contains(GAME.X_CLASS)) {
            GAME.players['1Score'] += 1;
            GAME.score1.textContent = GAME.players['1Score'];
        } else {
            GAME.players['2Score'] += 1;
            GAME.score2.textContent = GAME.players['2Score'];
        }
    } else {
        drawEl.classList.add("show");
    }
}

export function isDraw() {
    return [...GAME.blockElements].every(cell => {
        return cell.classList.contains(GAME.X_CLASS) || cell.classList.contains(GAME.Y_CLASS);
    });
}

export function resetScoreboard() {
    GAME.players['1Score'] = 0;
    GAME.players['2Score'] = 0;
    GAME.score1.textContent = GAME.players['1Score'];
    GAME.score2.textContent = GAME.players['2Score'];
}