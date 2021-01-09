var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(800,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  //movingRect.velocityX = 5;
  //fixedRect.velocityX = -5;
  object1 = createSprite(100,100,50,50);
  object1.shapeColor = "red";
  object2 = createSprite(200,100,50,50);
  object2.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.y - fixedRect.y)
   
 if( isTouching(movingRect,object1)){
   movingRect.shapeColor = "blue";
   fixedRect.shapeColor = "blue";
 }
 else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
 } 
 


 /* function draw() {
    background(0,0,0);  
   
    //movingRect.y = World.mouseY;
    console.log(movingRect.y - fixedRect.y)
    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
        && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){
    movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);  
    
    
      
    }*/
    
  drawSprites();
}

function isTouching(subject1,subject2){
  if(subject1.x - subject2.x < subject2.width/2 + subject1.width/2
    && subject2.x - subject1.x < subject2.width/2 + subject1.width/2
    &&  subject1.y - subject2.y > -(subject2.height/2 +subject1.height/2)
     && subject1.y - subject2.y < subject2.height/2 + subject1.height/2 ){

    


  return true;
}
else {
  return false;
}


}



