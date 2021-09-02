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

//morado a amarillo
 var cuadodro1



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


cuadod1=createSprite(75,180,150,90);
cuadrod2=createSprite(75,290,150,90);
cuadrod3=createSprite(75,400,150,90);
cuadrod4=createSprite(75,510,150,90);
cuadrod5=createSprite(75,620,150,90);
cuadrod6=createSprite(75,730,150,90);
cuadrod7=createSprite(75,840,150,90);

cuadodro1=createSprite(200,925,90,150)


}


function draw(){
background("#BFDBAE");  

drawSprites();
}