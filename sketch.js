const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bg;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
score = 0;
  box1 = new BlueBox(500,360,20,30);
  box2 = new BlueBox(520,360,20,30);
  box3 = new RedBox(540,360,20,30);
  box4 = new RedBox(560,360,20,30);
  box5 = new RedBox(580,360,20,30);
  box6 = new BlueBox(600,360,20,30);

  box7 = new RedBox(510,330,20,30);
  box8 = new BlueBox(530,330,20,30);
  box9 = new BlueBox(550,330,20,30);
  box10 = new RedBox(570,330,20,30);
  box11 = new RedBox(590,330,20,30);

  box12 = new BlueBox(520,310,20,30);
  box13 = new BlueBox(540,310,20,30);
  box14 = new RedBox(560,310,20,30);
  box15 = new RedBox(580,310,20,30);

  box16 = new BlueBox(530,280,20,30);
  box17 = new RedBox(550,280,20,30);
  box18 = new RedBox(570,280,20,30);

  box19 = new BlueBox(540,250,20,30);
  box20 = new RedBox(560,250,20,30);

  box21 = new RedBox(550,220,20,30);

  box22 = new RedBox(500,135,20,30);
  box23 = new BlueBox(520,135,20,30);
  box24 = new BlueBox(540,135,20,30);
  box25 = new RedBox(560,135,20,30);
  box26 = new RedBox(580,135,20,30);
  box27 = new BlueBox(600,135,20,30);

  box28 = new BlueBox(510,105,20,30);
  box29 = new RedBox(530,105,20,30);
  box30 = new BlueBox(550,105,20,30);
  box31 = new RedBox(570,105,20,30);
  box32 = new RedBox(590,105,20,30);

  box33 = new BlueBox(520,75,20,30);
  box34 = new BlueBox(540,75,20,30);
  box35 = new RedBox(560,75,20,30);
  box36 = new RedBox(580,75,20,30);
  
  box37 = new BlueBox(530,45,20,30);
  box38 = new BlueBox(550,45,20,30);
  box39 = new RedBox(570,45,20,30);

  ball = new Ball(0,0,50);

  spring = new Rope(ball.body,{x:200,y:200});

  ground = new Ground(400,390,800,20);

  groundHovering = new Ground(550,160,200,20);

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();

  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();

  box12.score();
  box13.score();
  box14.score();
  box15.score();

  box16.score();
  box17.score();
  box18.score();

  box19.score();
  box20.score();

  box21.score();

  box22.score();
  box23.score();
  box24.score();
  box25.score();
  box26.score();
  box27.score();

  box28.score();
  box29.score();
  box30.score();
  box31.score();
  box32.score();

  box33.score();
  box34.score();
  box35.score();
  box36.score();

  box37.score();
  box38.score();
  box39.score();
  
}

function draw() {
  Engine.update(engine); 
  background("red") 
  text("SCORE: "+score,700,40);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();

  box12.display();
  box13.display();
  box14.display();
  box15.display();

  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();

  box21.display();

  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();

  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();

  box33.display();
  box34.display();
  box35.display();
  box36.display();

  box37.display();
  box38.display();
  box39.display();

  ball.display();
  spring.display();
  ground.display();
  groundHovering.display();

}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  spring.release();
}

function keyPressed(){
  if(keyCode === 32){
    spring.attach(ball.body);
  }

}
/*async function getTime(){
  var time = await fetch("http://worldtimeapi.org/api/timezone/asia/kolkata");
  var timeJSON = await time.json();
  var date = timeJSON.datetime;
  var hour = date.slice(11,13);
  if(hour>=06 && hour<=18){

  }
}
*/
