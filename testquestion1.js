let ballSpeedX = 5;
let ballX = 300;
let ballY = 200;
let ballSize = 50;

function setup(){
    createCanvas(600, 400);
    posX = width/ 2;
    xSpeed = 5;
    fill('limegreen');
}

function draw(){
    background('lightblue')
    circle(ballX, ballY, ballSize);

    ballX = ballX + ballSpeedX;

    if (ballX - ballSize/2 <= 0 || ballX + ballSize/2 >= width) {
        ballSpeedX = ballSpeedX * -1;
    }
}