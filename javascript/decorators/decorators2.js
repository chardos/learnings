//Superclass
function Animal(){
  this.legs = 4;
  this.walk = function(){
    console.log(this.type + ' walking.');
  }
}
Animal.prototype.sing = function(){
  console.log(this.type + ' singing.');
}

function jumpingDecorator(obj){
  obj.jump = function(){
    console.log(this.type + ' jumping.');
  }
}

//Subclass
function Frog(){
  this.type = 'Frog'
  Animal.call(this); //This gives the proeprties and methods from inside the class.
}
Frog.prototype = Object.create(Animal.prototype) // This gives properties and methods from the Animal prototype

//Subclass
function Dog(){
  this.type = 'Dog'
  Animal.call(this);
}

var frog = new Frog();
jumpingDecorator(frog)
console.log(frog.walk());
console.log(frog.jump());

var dog = new Dog();
