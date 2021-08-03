var garden,rabbit;
var gardenImg,rabbitImg;
var appleImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png")
  redImage = loadImage("redImage.png");
  greenImage = loadImage("leaf.png")


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


function draw() {
  background(0);
  rabbit.x=mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var num= Math.round(random(1,3))
  if(frameCount%80===0){
  if (num===1){
    createApples()
  }
if (num===2){
  createred()
}
if (num===3){
  creategreen()
}
  } 
  drawSprites();

}
function createApples(){
  var apple= createSprite(random(50,300),40)
  apple.addImage(appleImage)
  apple.scale= 0.1
  apple.velocityY= 5
  apple.lifetime=100
  
}
function createred(){
  var red = createSprite(random(59,300),40)
red.addImage(redImage)
red.scale= 0.1
red.velocityY=3
red.lifetime=75

}
function creategreen(){
  var green = createSprite(random(50,300),40)
  green.addImage(greenImage)
  green.scale=0.1
  green.velocityY= 4
  green.lifetime=75
}