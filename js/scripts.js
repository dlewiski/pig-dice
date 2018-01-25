// Business

// Player Constructor
function Player(name, roll, total) {
  this.name = name
  this.diceRolls = []
  this.total = 0
}
// Random dice engine
function diceRoll(Player, active) {
  if (active) {
    var dice = Math.floor(Math.random() * (6)+1);
    if (dice === 1) {
      Player.diceRolls = [];
      return;

    } else {
      Player.diceRolls.push(dice);
      return Player;
    }
  } else {
    return;
  }
}
// Add total for dice
function hold (Player, active){
  Player.total = Player.total + Player.diceRolls.reduce(function(a,b){
    return a + b;
  });
  Player.diceRolls = [];
  active = false;
}

function turnCheck(playerArr, turnNum) {
  if (turnNum < (playerArr.length - 1)){
    console.log(playerArr.length + "  " + turnNum)
    turnNum++
  } else {
    turnNum = 0;
  }
  return turnNum;
}

// User
$(document).ready(function() {
var players = [];
var active = true;
var turnNum = 0;


$("#newPlayer").submit(function (event) {
  event.preventDefault();

  var newPlayer = new Player($("#playerName").val());

  players.push(newPlayer)
  console.log(players);

});

$("#roll").click(function() {
  diceRoll(players[turnNum], active);
  // playerChange(activePlayer);
  console.log(players[turnNum]);
});

$("#hold").click(function() {
  hold(players[turnNum], active);
  turnNum = turnCheck(players, turnNum);
  // if (turnNum < (players.length - 1)){
  //   console.log(players.length + "  " + turnNum)
  //   turnNum++
  // } else {
  //   turnNum = 0;
  // }
  console.log(players[turnNum]);


  // playerChange(activePlayer);

  console.log(turnNum);
});



});
