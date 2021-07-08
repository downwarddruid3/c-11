var boy, track, KaPow
function preload(){
  //pre-load images
track_image=loadImage("path.png")
boy_image=loadAnimation("Runner-1.png","Runner-2.png")
KaPow_image=loadImage("power.png")
}

function setup(){
  createCanvas(400,400);
track=createSprite (200, 200);
track.addImage(track_image)
track.velocityY=4
track.scale=1.32
boy=createSprite (250, 350)
boy.addAnimation("boy",boy_image)
boy.scale=0.06
edges=createEdgeSprites()
}

function draw() {
  background(0);
  if(track.y>400){
    track.y = height/2
  }
  boy.collide(edges)
boy.x=World.mouseX
drawSprites();
}
