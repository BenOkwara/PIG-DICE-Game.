var Benson="";
var Jackton="";

var playTime = function() {
  return Math.floor(Math.random() * 6) + 1;
}
function Player (turn, hisName) {
  this.roll = 0;
  this.turnscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.hisName = hisName;
}

Player.prototype.rollonce= function() {
  if (this.roll === 1) {
    this.turnscore = 0;
    alert("Oops!!" + this.hisName + ", I am Sorry but your score is 1, Start Again.")

  } else {
    this.turnscore += this.roll;
  }
}
