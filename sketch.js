var ball;
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,30,30);

}

function draw() 
{
  background("white");
  ball.shapeColor="blue";
drawSprites();
}




