// Business

// Player Constructor
function Player(name, roll, total) {
  this.name = name
  this.diceRolls = []
  this.total = 0
}
// Dice generator, add to turn, check for a "1" roll
function diceRoll(Player, playerArr, turnNum) {
    var dice = Math.floor(Math.random() * (6)+1);
    if (dice === 1) {
      Player.diceRolls = [];
      if (turnNum < (playerArr.length - 1)){
        turnNum++
        return turnNum;
      } else {
        turnNum = 0;
        return turnNum;
      }
    } else {
      Player.diceRolls.push(dice);
      return turnNum;
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

function totalCheck() {
  if (player.total >= 100) {
    
  }
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
var turnNum = 0;


$("#newPlayer").submit(function (event) {
  event.preventDefault();

  var newPlayer = new Player($("#playerName").val());

  players.push(newPlayer)
  console.log(players);

  $("#playerList").append(newPlayer.name);
});

$("#roll").click(function() {
  turnNum = diceRoll(players[turnNum], players, turnNum);
  console.log(players[turnNum]);
});

$("#hold").click(function() {
  hold(players[turnNum], active);
  turnNum = turnCheck(players, turnNum);

  console.log(players[turnNum]);


  console.log(turnNum);
});



});
