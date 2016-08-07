var spacesAlreaduUsed = [];

function getRandomNumber() {
    return Math.floor(Math.random() * (9 - 1 + 1)) + 1;
}
$('.container').on('click', 'div', function(){
  if ($(this).children().length <= 0){
    var theirNumber = $(this).attr('id');
    theirNumber = parseInt(theirNumber);
    spacesAlreaduUsed.push(theirNumber);
    $(this).append('<p>X</p>');
    checkForWin();
    getNextMove();
  }
  else {alert('tile taken')};

});

function getNextMove(){
  do {
    var ourNextMove = getRandomNumber();
    var checkIfUsed = $.inArray(ourNextMove, spacesAlreaduUsed);
  }
  while(checkIfUsed !== -1);
  spacesAlreaduUsed.push(ourNextMove);
  var divToInsert = '#'+ourNextMove;
  $(divToInsert).append('<p>O</p>');
  checkForWin();
}

function winner(whoWon){
  alert(whoWon +" " + 'WINS');
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
}
