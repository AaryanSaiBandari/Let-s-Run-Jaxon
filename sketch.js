var jaxon, jaxon_running, edges;
var path, path_Image;
var left_boundary;
var right_boundary;

function preload(){
  //pre-load images
  jaxon_running=loadAnimation("Runner-1.png", "Runner-2.png");
  path_Image=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,300);
  path.addImage(path_Image);
  path.scale=0.5;
  path.velocityY=4;
  
  jaxon=createSprite(200,320,30,30);
  jaxon.addAnimation("jaxon_running", jaxon_running);
  jaxon.scale=0.09;

  left_boundary=createSprite(0,0,100,800);
  left_boundary.visible=false;

  right_boundary=createSprite(400,0,100,800);
  right_boundary.visible=false;
}

function draw() {
  background("black");

  path.velocityY=4;
  jaxon.x=World.mouseX;

  if (path.y >400) {
    path.y=height/2;
  }

  edges=createEdgeSprites();

  jaxon.collide(edges[3]);
  jaxon.collide(left_boundary);
  jaxon.collide(right_boundary);
  drawSprites();
}
