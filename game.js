var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern=[];

var userClickedPattern=[];

$(".btn").click(function(){
    var userChosenColor=$(this).attr("id");
    
    userClickedPattern.push(userChosenColor);

    console.log(userClickedPattern);
    playSound(userChosenColor);
});

function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    // audio.play();
    
}

// console.log(randomChosenColour);

function playSound(name)
{
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}
