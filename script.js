const boy = document.getElementById('boy');
const obstacle = document.getElementById('obstacle');
const scoreDisplay = document.getElementById('score');
const message = document.getElementById('message');

let isJumping = false;
let score = 0;

function jump() {
    if (!isJumping) {
        isJumping = true;
        boy.classList.add('jump');
        setTimeout(() => {
            boy.classList.remove('jump');
            isJumping = false;
        }, 500);
    }
}

function checkCollision() {
    const boyBottom = parseInt(window.getComputedStyle(boy).getPropertyValue('bottom'));
    const obstacleRight = parseInt(window.getComputedStyle(obstacle).getPropertyValue('right'));
    const obstacleLeft = 500 - obstacleRight;

    if (obstacleLeft > 50 && obstacleLeft < 100 && boyBottom <= 20) {
        message.innerText = 'Game Over! Press SPACE to Restart!';
        clearInterval(gameInterval);
        document.removeEventListener('keydown', handleKeyPress);
    } else if (obstacleLeft < 50) {
        score++;
        scoreDisplay.innerText = score;
    }
}

function handleKeyPress(e) {
    if (e.code === 'Space') {
        jump();
    }
}

document.addEventListener('keydown', handleKeyPress);

const gameInterval = setInterval(checkCollision, 50);