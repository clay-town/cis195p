console.log("hello week 2!");

function Dog() {
  var sound = "bark";

  this.type = "dog";
  this.legs = 4;
  this.size = "medium";
  this.speak = function() { console.log(this.sound); };
}

  Dalmation.prototype = new Dog();
function Dalmation() {
  this.color = "white with black spots";
}

  SmallDog.prototype = new Dog();
function SmallDog(){
  this.size = "small";
}

  MiniDalmation.prototype = new Dalmation();
  SmallDog.call(MiniDalmation.prototype);
function MiniDalmation(){
  }
