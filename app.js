// SCORE KEEPER
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');
const scoreDisplay1 = document.querySelector('#scoreDisplay1');
const scoreDisplay2 = document.querySelector('#scoreDisplay2');
const bestOf = document.querySelector('#bestOf');

let score1 = 0;
let score2 = 0;
let winningScore;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        score1 += 1;
        if (score1 === winningScore) {
            isGameOver = true;
        }
        scoreDisplay1.textContent = score1;
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        score2 += 1;
        if (score2 === winningScore) {
            isGameOver = true;
        }
        scoreDisplay2.textContent = score2;
    }
})

resetButton.addEventListener('click', function () {
    isGameOver = false;
    score1 = 0;
    score2 = 0;
    scoreDisplay1.textContent = 0;
    scoreDisplay2.textContent = 0;
})