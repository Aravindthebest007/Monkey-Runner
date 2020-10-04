
var monkey , monkey_running
var banana ,bananaImage, obstacleImage;
var FoodGroup, obstacleGroup
var score, survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600, 400);
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(450, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  console.log("Ground's x position = "+ ground.x);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
  var survivalTime = 0;
  
}


function draw() {
  
  background("lightgreen");
  
  stroke("black");
  textSize(16);
  fill("black");
  text("Survival Time: " + survivalTime, 400, 50);
  
  survivalTime = Math.ceil(frameCount / frameRate());
  
  console.log("Monkey's y position = "+ monkey.y);
 
  if(ground.x < 450) {
    
    ground.x = ground.width / 2;
  }
  
  if(keyDown("space") && monkey.y >= 314) {
      
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(ground);
  
  food();
  spawn_obstacle();
  
  drawSprites();
}


function food() {
  
  if(frameCount % 80 === 0) {
    
    randNum = Math.round(random(200, 280));
    
    banana = createSprite(600, randNum, 10, 15);
    banana.addImage("banana", bananaImage);
    banana.scale = 0.09;
    banana.velocityX = -4;
    banana.lifetime = 150;
    
    monkey.depth = banana.depth;
    monkey.depth = monkey.depth + 1;
    
    FoodGroup.add(banana);
  }
}

function spawn_obstacle() {
  
  if(frameCount % 150 === 0) {
    
    var obstacle = createSprite(600, 319, 10, 15);
    obstacle.addImage("obstacle", obstacleImage);
    obstacle.scale = 0.150; 
    obstacle.velocityX = -4;
    obstacle.lifetime = 150;
    
    obstacleGroup.add(obstacle);
  }
}  

