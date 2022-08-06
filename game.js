var gamePattern=[];

var buttonColours = ["red", "blue", "green", "yellow"];

var randomNumber;

function nextSequence(){
    randomNumber=Math.floor(Math.random()*4);
    console.log(randomNumber);
}
nextSequence();
var randomChosenColour=buttonColours[randomNumber];
// console.log(randomChosenColour);
gamePattern.push(randomChosenColour);