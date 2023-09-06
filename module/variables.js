export let GAME = {
    X_CLASS : 'female-1',
    Y_CLASS : 'male-1',
    turn : undefined,
    winner : null,
    selectedProfile : document.querySelectorAll(".img .id"),
    blockElements : document.querySelectorAll('[data-cell]'),
    boardElement : document.getElementById("board"),
    startBtn : document.getElementById("startBtn"),
    startWindow : document.querySelector(".start-game"),
    winEl: document.querySelector(".winner-msg"),
    drawEl : document.querySelector(".draw-msg"),
    winnerImg : document.querySelector(".winner-msg .winner"),
    restartBtn : document.getElementById("restartBtn"),
    drawBtn : document.getElementById("drawBtn"),
    players: {
        '1': null,  // armazenará a seleção do jogador 1
        '2': null   // armazenará a seleção do jogador 2
    }
}
