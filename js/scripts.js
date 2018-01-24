// Business

// Player Constructor
function Player(name, roll, total) {
  this.name = name
  this.diceRolls = roll
  this.total = total
}
// Random dice engine
function diceRoll(Player) {
  var dice = Math.floor(Math.random() * (6)+1);
  if (dice === 1) {
    Player.diceRolls = [];
  } else {
    Player.diceRolls.push(dice);
    return Player;
  }
}
// Add total for dice
function hold (Player){
  Player.total += Player.diceRolls.reduce(function(a,b){
    return a + b;
  });
}

// User
$(document).ready(function() {
var players = [];



$("#newPlayer").submit(function (event) {
  event.preventDefault();
  var newPlayer = new Player("", [], 0);
  newPlayer.name = $("#playerName").val();
  players.push(newPlayer)
  console.log(players);

});

$("#roll").click(function() {
  diceRoll(players[0]);
  console.log(players[0]);
});

$("#hold").click(function() {
  hold(players[0]);
  console.log(players[0]);
});



});
