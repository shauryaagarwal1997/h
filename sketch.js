var bg1,bg1I;
var appState=0;
var startBut;

function preload(){
bg1=loadImage("whitte.jpeg");
}
  function setup(){
createCanvas(displayWidth-20,displayHeight-300);
startBut=createButton('LET\'S START')
startBut.size(200,70);
startBut.style('background','yellow')
}
function draw(){
if(appState===0){
  background(bg1);
  startBut.position(width/2-200,height/2-100);
}
}