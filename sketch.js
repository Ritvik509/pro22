var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var fairy
function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairs = loadImage("images/fairyImage1.png");
	fairyAnimation = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairySound = loadSound("sound/JoyMusic.mp3");
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);
    fairySound.play();
	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
	fairy = createSprite(200,500);
    fairy.addAnimation("fairyflying",fairyAnimation);
	fairy.scale = 0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	
	
	Engine.run(engine);
}


function draw() {
  background(bgImg);
  
  star.x= starBody.position.x 
  star.y= starBody.position.y 



  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() { if(keyCode === RIGHT_ARROW){ fairy.x = fairy.x + 20; } if(keyCode === LEFT_ARROW){ fairy.x = fairy.x - 20; } if (keyCode === DOWN_ARROW) { Matter.Body.setStatic(starBody,false); } }
