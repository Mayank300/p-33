 
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 
var engine, world;
var particles = [];
var divisions = [];
var plinko = [];
var divisionHeight = 300;
var score = 0;

function preload() {
    backgroundImg = loadImage("bg.png");
}

function setup(){
   var canvas = createCanvas(480,800);
   engine = Engine.create();
   world = engine.world;
   ground = new Ground(width/2,800,480,20);
  
    for(var i = 0; i <= width; i = i+96){
        divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight))
    }

     for(var j = 50; j <= width; j = j+50){
        plinko.push(new Plinko(j,350))
    }

    for(var k = 15; k <= width; k = k+50){
        plinko.push(new Plinko(k,300))
    }

    for(var l = 50; l <= width; l = l+50){
        plinko.push(new Plinko(l,250))
    } 

    for(var m = 15; m <= width; m = m+50){
        plinko.push(new Plinko(m,200))
    } 

    for(var n = 50; n <= width; n = n+50){
        plinko.push(new Plinko(n,150))
    }

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    ground.display();
    textSize(30);
    fill("white"); 
    text("500",24,550);
    text("500",510,550);
    text("200",120,550);
    text("200",410,550);
    text("100",214,550);
    text("100",310,550);
    text("SCORE : "+score,175,50);

    for(var i = 0; i < divisions.length; i++){
         divisions[i].display();
    }

    for(var a = 0; a < particles.length; a++){
        particles[a].display();
    }

    for(var j = 0; j < plinko.length; j++){
        plinko[j].display();
    }
    
    for(var k = 0; k < plinko.length; k++){
        plinko[k].display();
    }

    for(var n = 0; n < plinko.length; n++){
        plinko[n].display();
    }

    for(var l = 0; l < plinko.length; l++){
        plinko[l].display();
    }

    for(var m = 0; m < plinko.length; m++){
        plinko[m].display();
    }
}

function mousePressed(){
    particles.push( new Particles(mouseX,10,10,10));
}
 

 
































 