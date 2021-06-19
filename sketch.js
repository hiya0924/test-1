var hypnoticBall, database;
var position;
var game,player,form;
var gameState = 0;
var playerCount = 0 ;

function setup(){
  database = firebase.database();
  game = new Game;
  game.getState();
  game.start();
  
}

function draw(){
  background("white");
  
  
    drawSprites();
  
}

