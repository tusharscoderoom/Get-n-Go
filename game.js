var level = 0;
var btnColors = ['red', 'blue', 'yellow', 'green'];
var gamePattern = [];           //what the game patter is
var userClickedPatter = [];     //what user in entering
var levelTitle = $('.levels');
//starting of the game
// if(level === 0)
// {
  $(document).on('keypress', function() {
    if(level === 0)
      nextSequence();
  })
// }
// else {
//   level++;
//   nextSequence();
// }

//button click handler
$(".tap-btn").on('click', function () {
  // nextSequence();
  var userChosenColor = $(this).attr('id');
  userClickedPatter.push(userChosenColor);

  animatePress(userChosenColor);
  playSound(userChosenColor);

  console.log(userClickedPatter);
  //checking the answer is correct or not
  checkAnswer(userClickedPatter.length-1);
});

//check answer with current level(index)
function checkAnswer(currentLevel) {
  if(gamePattern[currentLevel] === userClickedPatter[currentLevel]) {
    console.log("success");

    if(gamePattern.length === userClickedPatter.length)
    setTimeout( function () {
      nextSequence();
    }, 1000);

  }
  else {
    console.log("failed");
    level = 0;
    playSound('wrong');
    animatePress('wrong');
    levelTitle.text("'Oh-oh!...You Missed!");
    setTimeout(function(){
      levelTitle.text("Press Any Key to 'Restart'!")
    }, 1800);
    gamePattern = [];
  }
  // for(int i=0; i<gamePattern.length; i++) {
  //
  // }
}

//function to get and play sounds
function nextSequence() {
  userClickedPatter = [];
  level++;
  levelTitle.text('Level: '+ level);
  randomNumber = Math.floor(Math.random()*4);
  randomChosenColor = btnColors[randomNumber];
  gamePattern.push(randomChosenColor);
  console.log(gamePattern);
  animatePress(randomChosenColor);
  $("."+randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}

//playSound function
function playSound(color) {
  switch(color) {
    case 'red': var red = new Audio("sounds/red.mp3");
      red.play(); break;
    case 'yellow': var yellow = new Audio("sounds/yellow.mp3");
      yellow.play(); break;
    case 'green': var green = new Audio("sounds/green.mp3");
      green.play(); break;
    case 'blue': var blue = new Audio("sounds/blue.mp3");
      blue.play(); break;
    case 'wrong': var wrong = new Audio("sounds/wrong.mp3");
      wrong.play(); break;
  }
}

//animation function
function animatePress(currentColor) {
  if(currentColor === 'wrong') {
    $('body').addClass('wrongBtn');
    setTimeout(function () {
      $('body').removeClass('wrongBtn');
    }, 240);
  }
  else {
    $('#'+currentColor).addClass('pressed');
    setTimeout(function () {
      $('#'+currentColor).removeClass('pressed');
    }, 240);
  }
}
