const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var ground, stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15,
box16, box17;

var box1, boxII, boxIII, boxIV, boxV, boxVI, boxVII, boxVIII, boxIX, boxX;
var polygon

function setup() {
  createCanvas(1350,700);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,695,width,10 );
  stand1 = new Ground(600,620, 400, 10 );
  stand2 = new Ground(1050, 350, 300, 10);
 
  box1 = new Box(471, 546, 50, 50);
  box2 = new Box(523, 546, 50, 50);
  box3 = new Box(575, 546, 50, 50);
  box4 = new Box(627, 546, 50, 50);
  box5 = new Box(679, 546, 50, 50);
  box6 = new Box(731, 546, 50, 50);
  box7 = new Box(505, 494, 50, 50);
  box8 = new Box(557, 494, 50, 50);
  box9 = new Box(609, 494, 50, 50);
  box10 = new Box(661, 494, 50, 50);
  box11 = new Box(713, 494, 50, 50);
  box12 = new Box(553, 442, 50, 50);
  box13 = new Box(605, 442, 50, 50);
  box14 = new Box(657, 442, 50, 50);
  box15 = new Box(579, 390, 50, 50);
  box16 = new Box(631, 390, 50, 50);
  box17 = new Box(601, 338, 50, 50);

  boxI = new Box(972, 310, 50, 50);
  boxII = new Box(1024, 310, 50, 50);
  boxIII = new Box(1076, 310, 50, 50);
  boxIV = new Box(1128, 310, 50, 50);
  boxV = new Box(1000, 260, 50, 50);
  boxVI = new Box(1052, 260, 50, 50);
  boxVII = new Box(1104, 260, 50, 50);
  boxVIII = new Box(1026, 210, 50, 50);
  boxIX = new Box(1078, 210, 50, 50);
  boxX = new Box(1047,160, 50,50);

  polygon = new Holder();
  sling = new SlingShot(polygon.bodies, {x:180, y:200});

}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display();
  stand1.display();
  stand2.display();
 
 fill("pink");
  box1.display();
  fill("pink");
  box2.display();
  fill("pink");
  box3.display();
  fill("pink");
  box4.display();
  fill("pink");
  box5.display();
  fill("pink");
  box6.display();
  fill("pink");
  box7.display();
  fill("pink");
  box8.display();
  fill("pink");
  box9.display();
  fill("pink");
  box10.display();
  fill("pink");
  box11.display();
  fill("pink");
  box12.display();
  fill("pink");
  box13.display();
  fill("pink");
  box14.display();
  fill("pink");
  box15.display();
  fill("pink");
  box16.display();
  fill("pink");
  box17.display();
  fill("pink");

  boxI.display(255, 185, 200);
  boxII.display(255, 185, 200);
  boxIII.display(255, 185, 200);
  boxIV.display(255, 185, 200);
  boxV.display(255, 120, 240);
  boxVI.display(255, 120, 240);
  boxVII.display(255, 120, 240);
  boxVIII.display(190, 55, 155);
  boxIX.display(190, 55, 155);
  boxX.display(150, 230, 255);

  polygon.display();
  sling.display();

  drawSprites();

  strokeWeight(1);
  fill("orange");
  textSize(30);
  text("DRAG & HIT THE BLOCKS. PRESS SPACE TO BRING THE STRIKER BACK.", 100, 50) ;
}
function mouseDragged(){
  Matter.Body.setPosition(polygon.bodies, {x: mouseX, y: mouseY});
}
function mouseReleased(){
  sling.fly();
}
function keyPressed(){
	if(keyCode === 32){
		launcher = {x:90, y:550}
		Matter.Body.setPosition(polygon.bodies, {x:90, y:550});
		sling.attach(polygon.bodies);

	}
}