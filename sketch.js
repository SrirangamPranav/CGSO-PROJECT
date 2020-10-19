var car1,car2,car3,wall;
var border1,border2,border3;
var speed,weight,speed2,weight2,speed3,weight3;
var deformation,deformation2,deformation3;
var bulletRightEdge,wallLeftEdge;
function setup() {
  createCanvas(1600,400);
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  speed2 = Math.round(random(55,90));
  weight2 = Math.round(random(400,1500));
  speed3 = Math.round(random(55,90));
  weight3 = Math.round(random(400,1500));
  deformation = 0.5*weight*speed*speed/22500;
  deformation2 = 0.5*weight2*speed2*speed2/22500;
  deformation3 = 0.5*weight3*speed3*speed3/22500;

  wall = createSprite(1200,70,55,90);
  wall.shapeColor = "white";

  wall2 = createSprite(1200,210,55,90);
  wall2.shapeColor = "white";

  wall3 = createSprite(1200,350,55,90);
  wall3.shapeColor = "white";

  border1 = createSprite(800,140,1600,20);
  border2 = createSprite(800,280,1600,20);
  
  car1 = createSprite(50,65,30,30);
  car1.shapeColor = "white";

  car2 = createSprite(50,210,30,30);
  car2.shapeColor = "white";

  car3 = createSprite(50,350,30,30);
  car3.shapeColor = "white";

}

function draw() {
  background("black"); 
  car1.velocityX = speed;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  if(isTouching(car1,wall)){
    
    car1.velocityX=0;
    if(deformation<100){
        car1.shapeColor = color(0,255,0);
        stroke("green");
        strokeWeight("green");
        text("deformation is less",600,100,textSize(50));
    }
    if(deformation<180 && deformation>100){
      car1.shapeColor = color(230,230,0);
      stroke("yellow");
      strokeWeight("yellow");
      text("deformation is average",600,100,textSize(50));
    }
    if(deformation>180){
    car1.shapeColor = color(255,0,0);
    stroke("red");
    strokeWeight("red");
    text("deformation is high",600,100,textSize(50));
    }
  }

  if(isTouching(car2,wall2)){
    
    car2.velocityX=0;
    
    if(deformation2<100){
        car2.shapeColor = color(0,255,0);
        stroke("green");
        strokeWeight("green");
        text("deformation is less",600,230,textSize(50));
    }
    if(deformation2<180 && deformation2>100){
      car2.shapeColor = color(230,230,0);
      stroke("yellow");
      strokeWeight("yellow");
      text("deformation is average",600,230,textSize(50));
    }
    if(deformation2>180){
    car2.shapeColor = color(255,0,0);
    stroke("red");
    strokeWeight("red");
    text("deformation is high",600,230,textSize(50));
    }
  }

  if(isTouching(car3,wall3)){
    
    car3.velocityX=0;
    
    if(deformation3<100){
        car3.shapeColor = color(0,255,0);
        stroke("green");
        strokeWeight("green");
        text("deformation is less",600,350,textSize(50));
    }
    if(deformation3<180 && deformation3>100){
      car3.shapeColor = color(230,230,0);
      stroke("yellow");
      strokeWeight("yellow");
      text("deformation is average",600,350,textSize(50));
    }
    if(deformation3>180){
    car3.shapeColor = color(255,0,0);
    stroke("red");
    strokeWeight("red");
    text("deformation is high",600,350,textSize(50));
    }
  }
  drawSprites();
}
function isTouching(object1,object2){
   if(object1.x-object2.x<object2.width/2+object1.width/2 
    && object2.x-object1.x<object2.width/2+object1.width/2
    &&object1.y-object2.y<object2.height/2+object1.height/2 
    && object2.y-object1.y<object2.height/2+object1.height/2 )
   {
     object1.x=object2.x
   return true;
   }
   else{
   return false;
   }
  }