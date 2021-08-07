var garden,rabbit, apple, leaf;
var gardenImg,rabbitImg,appleIMG,leafIMG;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleIMG = loadImage('apple.png');
  leafIMG = loadImage('orangeLeaf.png');
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function createApples(){
  apple = createSprite(random(50, 350),40,10,10);
  apple.addImage(appleIMG);
  apple.scale = 0.1;
  apple.velocityY = 5;
  apple.lifetime = 100;
}

function createLeaves(){
  leaf = createSprite(random(50, 350),40,10,10);
  leaf.addImage(leafIMG);
  leaf.scale = 0.1;
  leaf.velocityY = 5;
  leaf.lifetime = 100;
}


function draw() {
  background(0);
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var rand = Math.round(random(1,2));
  if(frameCount % 80 == 0){
    if(rand == 1){
      createApples();
    }
    else{
      createLeaves();
    }
}

  drawSprites();
}