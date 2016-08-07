var spacesAlreaduUsed = [];

function getRandomNumber() {
    return Math.floor(Math.random() * (9 - 1 + 1)) + 1;
}
$('.container').on('click', 'div', function(){
  var theirNumber = $(this).attr('id');
  theirNumber = parseInt(theirNumber);
  console.log(theirNumber);
  spacesAlreaduUsed.push(theirNumber);
  console.log(spacesAlreaduUsed);
  $(this).append('<p>X</p>');
  getNextMove();

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
}
