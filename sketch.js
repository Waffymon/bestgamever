//grandes


var cuadritodeprueba
var cuadrito2
var cuadrito3
var cuadrito4


//naranja a morado
var cuadrod1
var cuadrod2
var cuadrod3
var cuadrod4
var cuadrod5
var cuadrod6
var cuadrod7

var cuadod11
var cuadrod22
var cuadrod33
var cuadrod44
var cuadrod55
var cuadrod66
var cuadrod77






function preload(){
  
}

function setup(){
   createCanvas(1000,1000);
   cuadritodeprueba=createSprite(75,75,150,150);
   cuadrito2=createSprite(925,75,150,150);
   cuadrito3=createSprite(925,925,150,150);
   cuadrito4=createSprite(75,925,150,150);
   
   cuadritodeprueba.shapeColor="orange";
   cuadrito2.shapeColor="blue";
   cuadrito3.shapeColor="yellow";
   cuadrito4.shapeColor="purple";

//naranja a morado
 cuadod1=createSprite(75,180,150,90);
 cuadrod2=createSprite(75,285,150,90);
 cuadrod3=createSprite(75,390,150,90);
 cuadrod4=createSprite(75,495,150,90);
 cuadrod5=createSprite(75,600,150,90);
 cuadrod6=createSprite(75,705,150,90);
 cuadrod7=createSprite(75,805,150,90);

 //azul a amarillo

 cuadod11=createSprite(925,180,150,90);
 cuadrod22=createSprite(925,285,150,90);
 cuadrod33=createSprite(925,390,150,90);
 cuadrod44=createSprite(925,495,150,90);
 cuadrod55=createSprite(925,600,150,90);
 cuadrod66=createSprite(925,705,150,90);
 cuadrod77=createSprite(925,805,150,90);

 //morado a amarillo
 cuadod111=createSprite(180,925,90,150);
 cuadrod222=createSprite(925,285,150,90);
 cuadrod333=createSprite(925,390,150,90);
 cuadrod444=createSprite(925,495,150,90);
 cuadrod555=createSprite(925,600,150,90);
 cuadrod666=createSprite(925,705,150,90);
 cuadrod777=createSprite(925,805,150,90);




}


function draw(){
background("#BFDBAE");  

drawSprites();
}