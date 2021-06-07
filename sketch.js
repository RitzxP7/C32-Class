/*
var number = 100;
console.log(number);
var string = "Ritesh"
console.log(string);
var boolean = false;
console.log(boolean)
var object = null;
console.log(object);
var object1
console.log(object1);

var array1 = [1, 10, 46, 20, 2];
console.log(array1);
var array2 = ["Ritesh", false, 10, null, 393]
console.log(array2);
console.log(array1.length);
var array3 = [[4, 3, 531], array1, array2,["Ritesh", "Seven", "phone"]];
console.log(array3[2][3]);
array1.push(10);
console.log(array1)
array2.pop();
console.log(array2);

*/

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1, platform;
var backgroundImg;
var newLog, slingshot;
var score = 0;

function preload() {
    // backgroundImg = loadImage("sprites/bg.png");
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);


    bird = new Bird(200,50);

    slingshot = new Slingshot(bird.body, {x: 200, y: 50});

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    textSize(35);
    fill("white")
    text("Score: " + score, width - 300, 50 )
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    platform.display();

    bird.display();

    slingshot.drawLine();

    
    

}

function mouseDragged() {
    if(bird.body.position.x < 400) {
    Matter.Body.setPosition(bird.body, {x: mouseX, y: mouseY});
    }
}

function mouseReleased() {
    slingshot.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.setPosition(bird.body, {x: 200, y: 50});
        slingshot.attach(bird.body);
    }
}

async function getTime() {
    var response = await fetch('http://worldtimeapi.org/api/timezone/America/New_York');
    var responsej = await response.json();
    var dateTime = responsej.datetime;

   var hour = dateTime.slice(11, 13);
   if(hour >= 07 && hour <=19) {
       bg = "sprites/bg.png";
   } else {
       bg = "sprites/bg2.jpg";
   }
   backgroundImg = loadImage(bg);
}