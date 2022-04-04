var torreImg, torre;
var portasImg, portas, portasGroup;
var gradeImg, grade, gradesGroup;
var fantasma, fantasmaImg;
var gradeinvisivelGroup, gradeinvisivel;
var somAssustador
var gameState = "encerrar"
var gameState = "play"
var score = 0;



function preload(){ 
  torreImg = loadImage("tower.png");
  portasImg = loadImage("door.png");
  gradeImg = loadImage("climber.png");
  fantasmaImg = loadImage("ghost-standing.png");
 somAssustador = loadSound("spooky.wav") ;



}

function setup() {
  createCanvas(600, 600);
  //somAssustador.play();
  torre = createSprite(300,300);
  torre.addImage("torre",torreImg);
  torre.velocityY = 1;
portasGroup = new Group() ;
gradesGroup = new Group() ;
gradeinvisivelGroup = new Group() ;



fantasma = createSprite(200, 200, 50, 50) ;
fantasma.addImage(fantasmaImg) ;
fantasma.scale = 0.4


  
}

function draw() {
  background(200);
  drawSprites() ; 
  if (gameState === "play") {
    score = score + Math.round(frameRate()/60);
    fantasma.velocityY += 1 ;
    if (torre.y > 590) {
      torre.y = 300 ;
    }
  
 if(keyDown("space")){
 fantasma.velocityY = -10 ;
 }
 if (keyDown("right")) {
  fantasma.x += 3
 }
 if (keyDown("left")) {
  fantasma.x -= 3
 }
 if (gradesGroup.isTouching(fantasma)){
   fantasma.velocityY = 0;

 }
 if (gradeinvisivelGroup.isTouching(fantasma)|| fantasma.y > 600) {
 gameState = "encerrar"
 }
 porta();
}

if (gameState == "encerrar") {
  gradesGroup.setVelocityYEach(0);
  portasGroup.setVelocityYEach(0);
  gradeinvisivelGroup.setVelocityYEach(0);
  stroke("yellow");
  fill("yellow") ;
  textSize(30) ;
  text("game over", 230, 250) ;
  text("score: "+score,20,30);
  torre.velocityY = 0;
   }

}



function porta(){
if(frameCount % 240 === 0) {
portas =  createSprite (200, -50) ;
portas.addImage(portasImg) ;
portas.velocityY = 1 ;
portas.x = Math.round(random(120, 400)) ;
portas.lifetime = 800 ;
portasGroup.add(portas) ;
grade = createSprite(200, 10) ;
grade.addImage(gradeImg) ;
grade.velocityY = 1 ;
grade.x = portas.x ;
grade.lifetime = 800 ;
gradesGroup.add(grade) ;
fantasma.depth = portas.depth
fantasma.depth += 1



gradeinvisivel = createSprite(200, 15) ;
gradeinvisivel.width=grade.width;
gradeinvisivel.height = 2 ;
gradeinvisivel.x = portas.x ;
gradeinvisivel.velocityY = 1 ;
gradeinvisivel.visible = false ;
gradeinvisivel.debug = true;
gradeinvisivelGroup.add(gradeinvisivel) ;



} 
}





