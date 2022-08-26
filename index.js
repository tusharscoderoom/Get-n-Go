var levelText = $(".levels");
var flag = 0;
// input to start the game
if(flag===0)
$(document).on("keypress", function() {
  levelText.text(" ");
  flag = 1;
  start();
});
else playSound('wrong');

//starting the game
function start() {
  var random;
  var seq = [];
  var clickedBtn;   //which button is clicked
  var level = 1;    //level indicator

  levelText.text('Round: '+level);  //setting the levels

  random = Math.ceil(Math.random()*4);
  clickedBtn = numToBtn(random);
  seq.push(clickedBtn);
  playSound(clickedBtn);

  for(var i=0; i<seq.length; i++) {

    $(".tap-btn").on("click", function () {
      clickedBtn = $(this).attr('id');
      playSound(clickedBtn);
      if(clickedBtn != seq[i])
      {
        clickedBtn = 'wrong';
        playSound(clickedBtn);
        return;
      }
      else
      {
        level++;
        levelText.text('Round: '+level);
      }
    });
    // start();
    // random = Math.ceil(Math.random()*4);
    // clickedBtn = numToBtn(random);
    // seq.push(clickedBtn);
    // playSound(clickedBtn);
  }

}

function playSound(btn) {

  switch(btn) {
    case 'red' : var red = new Audio("sounds/red.mp3"); red.play();
      switchClass('red');
      // $("#red").setTimeout($("#red").removeClass("pressed"), 100);
      break;
    case 'blue' : var blue = new Audio("sounds/blue.mp3"); blue.play();
      switchClass('blue');
      // $("#blue").setTimeout($("#blue").removeClass("pressed"), 100);
      break;
    case 'yellow' : var yellow = new Audio("sounds/yellow.mp3"); yellow.play();
      switchClass('yellow');
      // $("#yellow").setTimeout($("#yellow").removeClass("pressed"), 100);
      break;
    case 'green' : var green = new Audio("sounds/green.mp3"); green.play();
      switchClass('green');
      // $("#green").setTimeout($("#green").removeClass("pressed"), 100);
      break;
    default : var wrong = new Audio("sounds/green.mp3"); wrong.play();
      switchClass('wrong');
    // default: alert("error occured!");
  }
}

function numToBtn(num) {
  var btn;

  switch(num)
  {
    case 1: btn = 'red'; break;
    case 2: btn = 'yellow'; break;
    case 3: btn = 'blue'; break;
    case 4: btn = 'green'; break;
    default: btn = 'wrong';
  }

  return btn;
}

function switchClass(btn) {
  if(btn === 'wrong')
  {
    $("#"+btn).addClass("wrongBtn");
    setTimeout(function() { $('#'+btn).removeClass("wrongBtn"); }, 180);
  } else
  {
    $("#"+btn).addClass("pressed");
    setTimeout(function() { $('#'+btn).removeClass("pressed"); }, 180);
  }
}
