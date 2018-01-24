// Business

// Player Constructor
function Player(name, roll, total) {
  this.name = name
  this.diceRolls = roll
  this.total = total
}
// Random dice engine
function diceRoll(Player, active) {
  if (active) {
    var dice = Math.floor(Math.random() * (6)+1);
    if (dice === 1) {
      Player.diceRolls = [];
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
  Player.total += Player.diceRolls.reduce(function(a,b){
    return a + b;
  });
  Player.diceRolls = [];
  active = false;
}

// function cyclePlayer(players) {
//   for (i=0; i = false; i++) {
//
//       $("#roll").click(function() {
//         diceRoll(players[i]);
//       });
//       $("#hold").click(function() {
//           hold(players[i]);
//           console.log(players[i]);
//           break;
//       });
//   }
// }
// function playerChange(activePlayer) {
//   activePlayer =
// }

// User
$(document).ready(function() {
var players = [];
var active = true;
var turnNum = 0;


$("#newPlayer").submit(function (event) {
  event.preventDefault();
  var newPlayer = new Player("", [], 0);
  newPlayer.name = $("#playerName").val();
  players.push(newPlayer)
  console.log(players);

});

$("#roll").click(function() {
  diceRoll(players[turnNum], active);
  // playerChange(activePlayer);
  console.log(players[turnNum]);
});

$("#hold").click(function() {
  hold(players[turnNum], active, turnNum);
  console.log(players[turnNum]);
  turnNum++;
  // playerChange(activePlayer);

  console.log(turnNum);
});



});
