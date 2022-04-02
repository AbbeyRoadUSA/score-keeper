// SCORE KEEPER
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');
const scoreDisplay1 = document.querySelector('#scoreDisplay1');
const scoreDisplay2 = document.querySelector('#scoreDisplay2');
const bestOfSelect = document.querySelector('#bestOf');
const pleaseSelect = document.querySelector('.pleaseSelect');

let score1 = 0;
let score2 = 0;
let winningScore = bestOfSelect;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        score1 += 1;
        if (score1 === winningScore) {
            isGameOver = true;
            scoreDisplay1.classList.add('has-text-success');
            scoreDisplay2.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        scoreDisplay1.textContent = score1;
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        score2 += 1;
        if (score2 === winningScore) {
            isGameOver = true;
            scoreDisplay1.classList.add('has-text-success');
            scoreDisplay2.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        scoreDisplay2.textContent = score2;
    }
})

bestOfSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    score1 = 0;
    score2 = 0;
    scoreDisplay1.textContent = 0;
    scoreDisplay2.textContent = 0;
    scoreDisplay1.classList.remove('has-text-success', 'has-text-danger');
    scoreDisplay2.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}