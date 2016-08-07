var spacesAlreaduUsed = [];
var numberOfMoves = 0;
function getRandomNumber() {
    return Math.floor(Math.random() * (9 - 1 + 1)) + 1;
}
$('.container').on('click', 'div', function(numberOfMoves){
  numberOfMoves+= 1;
  alert(numberOfMoves);
  if (numberOfMoves === 8){
    checkForWin();
    alert('TIE!');
    resetGame();
  }
  else if ($(this).children().length <= 0){
    var theirNumber = $(this).attr('id');
    theirNumber = parseInt(theirNumber);
    spacesAlreaduUsed.push(theirNumber);
    $(this).append('<p>X</p>');
    getNextMove();
  }
  else {alert('tile taken')};
});

$('#reset').on('click', function(){
  resetGame();
});

function getNextMove(){
  do {
    var ourNextMove = getRandomNumber();
    var checkIfUsed = $.inArray(ourNextMove, spacesAlreaduUsed);
  }
  while(checkIfUsed !== -1);
  spacesAlreaduUsed.push(ourNextMove);
  numberOfMoves++;
  var divToInsert = '#'+ourNextMove;
  $(divToInsert).append('<p>O</p>');
  if (numberOfMoves >= 6){
  checkForWin();
}
}

function winner(whoWon){
  alert(whoWon +" " + 'WINS');
  resetGame();
}

function checkForWin() {
  var topLeft = $('.top-left p').html();
  var topMid = $('.top-mid p').html();
  var topRight = $('.top-right p').html();
  var midLeft = $('.mid-left p').html();
  var midMid = $('.mid-mid p').html();
  var midRight = $('.mid-right p').html();
  var bottomLeft = $('.bottom-left p').html();
  var bottomMid = $('.bottom-mid p').html();
  var bottomRight = $('.bottom-right p').html();
  if ((topLeft === topMid) && (topRight === topMid)) {
    winner(topLeft);
  }
  else if ((topLeft === midMid) && (midMid === bottomRight)){
    winner(topLeft);
  }
  else if ((midLeft === midMid) && (midMid === midRight)){
    winner(midLeft);
  }
  else if ((bottomLeft === bottomMid) && (bottomMid === bottomRight)){
    winner(bottomLeft);
  }
  else if ((topMid === midMid) && (midMid === bottomMid)){
    winner(topMid);
  }
  else if ((topRight === midRight) && (midRight === bottomRight)){
    winner(topRight);
  }
  else if ((topRight === midMid) && (midMid === bottomLeft)){
    winner(topRight);
  }
  else if ((topLeft === midLeft) && (midLeft === bottomLeft)){
    winner(topLeft);
  }
}

function resetGame() {
  spacesAlreaduUsed = [];
  numberOfMoves = 0;
  var templateForReset = "<div class = 'top-left' id = '1'></div><div class = 'top-mid' id = '2'></div><div class = 'top-right' id = '3'></div><div class = 'mid-left' id = '4'>" +
  "</div><div class = 'mid-mid' id = '5'></div><div class = 'mid-right' id = '6'></div><div class = 'bottom-left' id = '7'></div><div class = 'bottom-mid' id = '8'></div><div class = 'bottom-right' id = '9'></div>";
  $('.container').html(templateForReset);
}
