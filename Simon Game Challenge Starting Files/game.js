`use strict`;

// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// var started = false;
// var level = 0;

// $(document).keypress(function () {
//   if (!started) {
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     started = true;
//   }
// });

// $(".btn").click(function () {
//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   playSound(userChosenColour);
//   animatePress(userChosenColour);

//   //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
//   checkAnswer(userClickedPattern.length - 1);
// });

// //1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
// function checkAnswer(currentLevel) {
//   //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
//   if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
//     console.log("success");

//     //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
//     if (userClickedPattern.length === gamePattern.length) {
//       //5. Call nextSequence() after a 1000 millisecond delay.
//       setTimeout(function () {
//         nextSequence();
//       }, 1000);
//     }
//   } else {
//     console.log("wrong");
//   }
// }

// function nextSequence() {
//   //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
//   userClickedPattern = [];

//   level++;
//   $("#level-title").text("Level " + level);

//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour)
//     .fadeIn(100)
//     .fadeOut(100)
//     .fadeIn(100);
//   playSound(randomChosenColour);
// }

// function playSound(name) {
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function animatePress(currentColor) {
//   $("#" + currentColor).addClass("pressed");
//   setTimeout(function () {
//     $("#" + currentColor).removeClass("pressed");
//   }, 100);
// }

var newGamePatern = [];
var buttoncolors = ["red", "blue", "green", "yellow"];
var userClickedPatern = [];
var started = false;
var level = 0;

$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
  checkAnswer(userClickedPatern.length - 1);
});

//understand  the game patern
function checkAnswer(currentLevel) {
  if (newGamePatern[currentLevel] === userClickedPatern[currentLevel]) {
    console.log("Success!");

    //check if palyer finished and gote the right answer
    if (userClickedPatern.length === newGamePatern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("Error!");

    //game over
    $("body").addClass("game-over");
    playSound("wrong");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 300);
    $("h1").text("Game Ovr!🚫\n Press Any Key to Restart...👇🏾");
    $("h1").css("font-size", "5rem");
    RestartGame();
  }
}

//Event hadler
$(".btn").click(function () {
  var userChosenColoure = $(this).attr("id");
  userClickedPatern.push(userChosenColoure);
  // console.log(userClickedPatern);

  playSound(userChosenColoure);

  animatesPress(userChosenColoure);
});

const nextSequence = function () {
  userClickedPatern = [];
  level++;
  $("#level-title").text("Level " + level);

  var random = Math.round(Math.random() * 3);
  // console.log(random);

  var randomChosenColour = buttoncolors[random];

  //push to the array
  newGamePatern.push(randomChosenColour);
  // console.log(randomChosenColour);

  //animate the color
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();

  playSound(randomChosenColour);
};

// nextSequence();

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
  // console.log("Check!", name);
}

function animatesPress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 200);
}

//restart the game
function RestartGame() {
  level = 0;
  started = false;
  newGamePatern = [];
  // checkAnswer();
}

/**
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
} */
