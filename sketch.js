var garden, rabbit, apple, leaf;
var gardenImg, rabbitImg, appleImg, leafImg;
var select_sprites;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png");
}

function setup(){
createCanvas(400,400);
// Moving background
garden = createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.addImage(rabbitImg);
rabbit.scale =0.05;
select_sprites = 1;
}

function draw() {
  background("blue");

  edges = createEdgeSprites();
  rabbit.collide(edges);

  if(frameCount % 80 == 0){
    if(select_sprites == 1){
      createApples();
    }
      else {
        createLeaves();    
    }
  }
    

 rabbit.x = World.mouseX;
 rabbit.y = World.mouseY;
if(mouseIsOver(apple)){
  apple.destroy();
}
if(mouseIsOver(leaf)){
leaf.destroy();
}


 drawSprites();   
}

function createApples() {
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(appleImg);
  apple.scale = 0.04;
  apple.velocityY = 5;
  //lifetime
  apple.lifetime=200;
  select_sprites=2;
}

function createLeaves() {
  leaf = createSprite(random(75, 300),30, 10, 10);
  leaf.addImage(leafImg);
  leaf.scale = 0.04;
  leaf.velocityY = 5;
  //lifetime
  leaf.lifetime = 200;
  select_sprites=1;
}