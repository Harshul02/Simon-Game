var gamePattern=[];

var buttonColours = ["red", "blue", "green", "yellow"];

var randomNumber;

function nextSequence(){
    randomNumber=Math.floor(Math.random()*4);
    // console.log(randomNumber);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}
nextSequence();
// console.log(randomChosenColour);
