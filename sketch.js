var snake;
var food;
var sWidth,sHeight;
let size = 20;
var score = 0,hscore = 0;

function setup()
{
    createCanvas(400,400);
    snake = new Snake();
    sWidth = Math.round(width/size);
    sHeight = Math.round(height/size);
    frameRate(4);
    spawnFood();
}

function draw()
{
  scale(size);
  background("green");

  if(snake.eat(food))
    {
        spawnFood();
        score++;
    }

    fill("red");
    noStroke();
    rect(food.x,food.y,1,1);

    snake.update();
    snake.display();

    if(snake.gameOver())
    {
      background("red");
      text("Game Over",7,9);
      noLoop();
    }
    else
    {
      textSize(1);
      fill(255,255,255);
      text("Score: "+score,15,1);
    }
}

function keyPressed() 
{
    if (keyCode === LEFT_ARROW) 
    {
      snake.setVelocity(-1, 0);
    } 
    else if (keyCode === RIGHT_ARROW) 
    {
      snake.setVelocity(1, 0);
    } 
    else if (keyCode === DOWN_ARROW) 
    {
      snake.setVelocity(0, 1);
    } 
    else if (keyCode === UP_ARROW) 
    {
      snake.setVelocity(0, -1);
    }
}

function spawnFood()
{
    var foodX = Math.round(random(sWidth-1));
    var foodY = Math.round(random(sHeight-1));
    food = createVector(foodX,foodY);
}