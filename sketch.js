var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8;

function setup() {
  createCanvas(displayWidth,displayHeight-200);

  console.log((displayHeight-200)/22);

  wall1 = createSprite(35,95,10,140);

  wall2 = createSprite(displayWidth-35,150,10,245);

  wall3 = createSprite(displayWidth/2,30,displayWidth-60,10);

  wall4 = createSprite(displayWidth/2, displayHeight-230, displayWidth-60, 10);

  wall5 = createSprite(35,375,10,330);

  wall6 = createSprite(displayWidth-35,435,10,210);

  wall7 = createSprite(60,105,10,117);

  wall8 = createSprite(85,117,10,92);

  wall9 = createSprite(85,117,10,92);
}

function draw() {
  background("green");  
  drawSprites();
}