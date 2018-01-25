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
      $("#" + Player.name + "Rolls").text("");
      if (turnNum < (playerArr.length - 1)){
        turnNum++
        return turnNum;
      } else {
        turnNum = 0;
        return turnNum;
      }
    } else {
      Player.diceRolls.push(dice);
      $("#" + Player.name + "Rolls").append(dice);
      return turnNum;
    }
}
// Add total for dice
function hold (Player){
  Player.total = Player.total + Player.diceRolls.reduce(function(a,b){
    return a + b;
  });
  Player.diceRolls = [];
  $("#" + Player.name + "Rolls").text("");
  $("#" + Player.name).text(Player.total);
  console.log(Player.total);
}

function totalCheck(Player) {
  if (Player.total >= 100) {
    $(".gameBoard").hide();
    $("#pigRain").show();
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

function playerScoreCard(newPlayer) {
  $(".scoreOutput").append(
    "<div class='well'><h3>" + newPlayer.name + "</h3>" + "<p>Rolls: <span id='" + newPlayer.name + "Rolls'></p>" +
    "<p>Your score is: <span id='" + newPlayer.name + "'>" + newPlayer.total + "</p></div>")
}

// User
$(document).ready(function() {

  $("#pigRain").makeItRain();

  var players = [];
  var turnNum = 0;


  $("#newPlayer").submit(function (event) {
    event.preventDefault();
    var newPlayer = new Player($("#playerName").val());
    playerScoreCard(newPlayer);
    players.push(newPlayer)
    console.log(players);
});

  $("#roll").click(function() {
    turnNum = diceRoll(players[turnNum], players, turnNum);
    console.log(players[turnNum]);
  });

  $("#hold").click(function() {
    hold(players[turnNum]);
    totalCheck(players[turnNum]);
    turnNum = turnCheck(players, turnNum);

    console.log(players[turnNum]);


    console.log(turnNum);
  });
});
