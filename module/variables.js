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
        '1': null,
        '2': null,
        '1Score': 0,
        '2Score': 0
    },
    score1: document.getElementById('player1-score'),
    score2: document.getElementById('player2-score'),
}
