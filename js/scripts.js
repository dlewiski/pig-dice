// Business

// Player Constructor
function Player(name, roll, total) {
  this.name = name;
  this.diceRolls = [];
  this.total = 0;
  this.id = "Current" + name;
  this.die = {
    one:  '<img class="die" src="img/die1.png">',
    two:  '<img class="die" src="img/die2.png">',
    three:'<img class="die" src="img/die3.png">',
    four: '<img class="die" src="img/die4.png">',
    five: '<img class="die" src="img/die5.png">',
    six:  '<img class="die" src="img/die6.png">'
  }
}
// Dice generator, add to turn, check for a "1" roll
function diceGen(){
    var dice = Math.floor(Math.random() * (6)+1);
    return dice;
  }

Player.prototype.hello = function () {
  alert("hello world!");

};


Player.prototype.rollDice = function(playerArr, myTurnNum, dice) {
    if (dice === 1) {
      $("#" + this.name + "Rolls").append(this.die.one);
      this.diceRolls = [];
      $("#" + this.name + "Rolls").text("");
      if (myTurnNum < (playerArr.length - 1)){
        myTurnNum++;
        return myTurnNum;
      } else {
        myTurnNum = 0;
        return myTurnNum;
      }
    } else {
      this.diceRolls.push(dice);
      if (dice === 2) {
        $("#" + this.name + "Rolls").append(this.die.two);
      } else if (dice === 3) {
        $("#" + this.name + "Rolls").append(this.die.three);
      } else if (dice === 4) {
        $("#" + this.name + "Rolls").append(this.die.four);
      } else if (dice === 5) {
        $("#" + this.name + "Rolls").append(this.die.five);
      } else if (dice === 6) {
        $("#" + this.name + "Rolls").append(this.die.six);
      }

      return myTurnNum;
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
    "<div class='well' id='" + newPlayer.id + "'><h3>" + newPlayer.name + "</h3>" + "<p>Rolls: <span id='" + newPlayer.name + "Rolls'></p>" +
    "<p>Your score is: <span id='" + newPlayer.name + "'>" + newPlayer.total + "</p></div>")
}
function currentPlayer(playerArr, Player, turnNum) {
  if (playerArr.indexOf(Player) === turnNum) {
    $("#" + Player.id).addClass("currentPlayer");
  } else {
    $("#" + Player.id).removeClass("currentPlayer");
  }
}

// User
$(document).ready(function() {

  $("#pigRain").makeItRain();

  var players = [];
  var turnNum = 0;
  var die = {
    one:  '<img class="die" src="img/die1.png">',
    two:  '<img class="die" src="img/die2.png">',
    three:'<img class="die" src="img/die3.png">',
    four: '<img class="die" src="img/die4.png">',
    five: '<img class="die" src="img/die5.png">',
    six:  '<img class="die" src="img/die6.png">'
  }

  $("#newPlayer").submit(function (event) {
    event.preventDefault();
    var newPlayer = new Player($("#playerName").val());

    console.log(newPlayer);
    playerScoreCard(newPlayer);
    players.push(newPlayer);
    $("#playerName").val("");
    console.log(players);


  $("#roll").click(function() {
    diceGen();
    //newPlayer.hello();

    turnNum = newPlayer.rollDice(players, 0, diceGen());
    // console.log(newPlayer.rollDice(players, 0));
    players.forEach(function(newPlayer) {
      currentPlayer(players, newPlayer, turnNum);
    });
    console.log(players[turnNum]);
  });
  $("#hold").click(function() {
    hold(players[turnNum]);
    totalCheck(players[turnNum]);
    turnNum = turnCheck(players, turnNum);
    players.forEach(function(newPlayer) {
      currentPlayer(players, newPlayer, turnNum);
    });

    console.log(players[turnNum]);


    console.log(turnNum);
  });
  });
});
