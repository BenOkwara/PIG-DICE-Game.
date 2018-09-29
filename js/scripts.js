var Benson="";
var Jackton="";

var playTime = function() {
  return Math.floor(Math.random() * 6) + 1;
}
function Player(turn, hisName) {
  this.roll = 0;
  this.turnscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.hisName = hisName;
}

Player.prototype.rollonce= function() {
  if (this.roll === 1) {
    this.turnscore = 0;
    alert("Oops!!" + this.hisName + ", I am Sorry but your score is 0, Start Again.")

  } else {
    this.turnscore += this.roll;
  }
}

Player.prototype.Pass= function () {
  this.totalscore += this.turnscore;
  this.turnscore = 0;

  // ===========this.turnover ();==============>
  alert(this.hisName + "Hey you, handover to the next player. Your turn is over!")
}

Player.prototype.victor = function () {
  if (this.totalscore >=45) {
    alert(this.hisName + "BUMBA!! You the Winner!");
  }
}

Player.prototype.newGame = function () {
  this.roll = 0;
  this.turnscore = 0;
  this.totalscore = 0;
  this.hisName = "";
}

var clearFields = function() {
  $(".ben").val("");
  $(".Jac").val("");
}


// ===========U I ==============>

$(document).ready(function)() {
  $("#start").click(function(event){
    Benson = 1 Player (true);
    Jackton = 2 Player (false);
    $(".player-console").show();
    // $(".start-board").hide();

    player1.hisName = Benson;
    player2.hisName = Jackton;

    
  })

}
