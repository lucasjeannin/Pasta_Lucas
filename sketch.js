var caixa;
function setup() {
  createCanvas(400,400);
  caixa = createSprite(200, 200, 50, 40)
}



function draw() 
{

  background(220);
 
 
  if(keyIsDown(RIGHT_ARROW)){
    caixa.position.x = caixa.position.x +5;
    }
 
  drawSprites()
}
