const cvs = document.getElementById('game');
const ctx = cvs.getContext('2d');

const ground = new Image();
ground.src = "img/ground.png";

const foodImg = new Image();
foodImg.src = "img/penis.png";
foodImg.style.width = '32px';
foodImg.style.height = '32px';

let box = 32;
let score = 0;


let snake = [];
snake[0] = {
	x: 9 * box,
	y: 10 * box
};


let food = {
    x: Math.floor(Math.random()*17+1) * box,
    y: Math.floor(Math.random()*15+3) * box
};


let dir;

function direction(event){
    if(event.keyCode == 37 && event.keyCode != "right"){
        dir = "left";
    }
    if(event.keyCode == 38 && event.keyCode != "down"){
        dir = "up";
    }
    if(event.keyCode == 39 && event.keyCode != "left"){
        dir = "right";
    }
    if(event.keyCode == 40 && event.keyCode != "up"){
        dir = "down";
    }
}

document.addEventListener('keydown', direction);


function eatTail(head, arr) {
	for(let i = 0; i < arr.length; i++) {
		if(head.x == arr[i].x && head.y == arr[i].y){
            clearInterval(game);
        }
	}
}


function drawGame() {
    ctx.drawImage(ground, 0, 0);
    ctx.drawImage(foodImg, food.x, food.y);

    for(let i = 0; i<snake.length; i++){
        ctx.fillStyle = i == 0 ? "green" : "red";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = 'white';
    ctx.font = "50px Arial";
    ctx.fillText(score, box * 2.5, box * 1.7);

    let snakeX = snake[0].x;
	let snakeY = snake[0].y;

    if(snakeX == food.x && snakeY == food.y) {
        score++;
        food = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
			y: Math.floor((Math.random() * 15 + 3)) * box
        };
    } else {
        snake.pop();
    }

    if(snakeX < box || snakeX > box*17 || snakeY < 3*box || snakeY > 17*box){
        clearInterval(game);
    }
    if(dir == "left") {
        snakeX -= box;
    }
	if(dir == "right") {
        snakeX += box;
    }
	if(dir == "up") {
        snakeY -= box;
    }
	if(dir == "down") {
        snakeY += box;
    }
    let newHead = {
		x: snakeX,
		y: snakeY
	};

    eatTail(newHead, snake);

    snake.unshift(newHead);
}

let game = setInterval(drawGame, 200);