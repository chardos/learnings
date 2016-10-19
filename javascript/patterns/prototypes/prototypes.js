function Vehicle(color){
  this.color = color;
}
Vehicle.prototype.wheels = 4
Vehicle.prototype.doors = 2
Vehicle.prototype.damage = 0
Vehicle.prototype.randomizeDamage = function(){
  this.damage = Math.ceil(Math.random()*10);
}

function Car(color) {
  Vehicle.call(this, color);
}
Car.prototype = Object.create(Vehicle.prototype)

function Toyota(color){
  Car.call(this,color)
}
Toyota.prototype = new Car();

function Motorbike(color) {
  Vehicle.call(this, color);
}
Motorbike.prototype = Object.create(Vehicle.prototype)
Motorbike.prototype.wheels = 2;

var car = new Car()

car.wheels // 4
