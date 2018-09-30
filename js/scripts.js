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

Player.prototype.Victor = function () {
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
  $(".Benson").val("");
  $(".Jackton").val("");
}


// ===========U I ==============>

$(document).ready(function() {
  
  $("#start").click(function(event){
    Benson = new Player (true);
    Jackton = new Player (false);
    $(".player-console").show();
    // $(".start-board").hide();

    Benson.hisName = Benson;
    Jackton.hisName = Jackton;

    var Benson = $(".Benson").val();
    $("#ben").text(Benson); // checking /

    var Jackton = $(".Jackton").val();
    $("#Jac").text(Jackton); //checking //

    Benson = new Player (true, Benson)
  });
  
  $("button#new-game").click(function(event) {
    $(".player-console").hide();
    clearFields();
    Benson.newGame();
    Jackton.newGame();

    $("#roll-1").empty();
    $("#total-round-1").empty();
    $("#total-score-1").empty();

    $("#roll-2").empty();
    $("#total-round-2").empty();
    $("#total-score-2").empty();
    // $(".start-board").show();//

  });

  $("button#ben-roll").click(function(event) {
    Benson.roll = spindice();
    $("roll-1").text(Benson.roll);
    Benson.rollonce();
    $("#total-round-1").text(Benson.turnscore);
  });

  $("button#Jac-roll").click(function(event) {
    Jackton.roll = spindice();
    $("roll-2").text(Jackton.roll);
    Jackton.rollonce();
    $("#total-round-2").text(Jackton.turnscore);
  });




}
