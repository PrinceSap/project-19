var PLAY=1;
var END=0;
var gameState=1; 

var monsterImage, fruitGroup, score, r ,randomFruit, position;
var knifeImage, fruit1, fruit2, fruit3, fruit4, humanImage , gameOverImage;


function preload(){

    knifeImage = loadImage("fruit1.png");
    fruit1= loadImage("fruit2.png");
    fruit2 = loadImage("fruit3.png");
    fruit3 = loadImage("fruit4.png");
    monsterImage = loadImage("mosterImage.png");
    gameOverImage = loadImage("gameOverImage.jpeg");
}









function setup() {
 createCanvas(600,600);

 monster=createSprite(40,200,20,20);
 monster.addImage(monsterImage);
 monster.scale=0.8;


monster.setCollider("rectange",0,0,40,40);

score=0;
fruitGroup=createGroup();



   
}

function draw() {
 background("darkblue");

 if(gameState===PLAY){


fruits();


monster.y=World.mouseY;
monster.x=World.mouseX;
 }

if(fruitGroup.isTouching(monster)){
    fruitGroup.destroyEach()


score=+score2;





drawSprites();

textSize(25);
text("Score  : " + score,250,50);
}




function Monster(){
    if(World.frameCount%200===0){
      monster=createSprite(400,200,20,20);
      monster.addAnimation("moving", monsterImage);
      monster.y=Math.round(random(100,550));
      monster.velocityX=-(8+(score/10));
      monster.setLifetime=50;
      
      monsterGroup.add(monster);
    }
  }
  


  function Monster(){
    if(World.frameCount%200===0){
      monster=createSprite(400,200,20,20);
      monster.addAnimation("moving", monsterImage);
      monster.y=Math.round(random(100,550));
      monster.velocityX=-(8+(score/10));
      monster.setLifetime=50;
      
      monsterGroup.add(monster);
    }
  }
  
  function fruits(){
  }
    if(World.frameCount%80===0){
      fruit=createSprite(400,200,20,20);
      fruit.x = 0    

  
        fruit.velocityX= (7+(score/4));
       
       
      fruit.scale=0.2;
     
       r=Math.round(random(1,4));
      if (r == 1) {
        fruit.addImage(fruit1);
      } else if (r == 2) {
        fruit.addImage(fruit2);
      } else if (r == 3) {
        fruit.addImage(fruit3);
      } else {
        fruit.addImage(fruit4);
      }
      
      fruit.y=Math.round(random(50,550));
     
      
      fruit.setLifetime=100;
      
      fruitGroup.add(fruit);
    }
    }