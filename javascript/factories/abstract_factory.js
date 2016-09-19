(function(){
  function RedCircle(){}
  RedCircle.prototype.create = function() {
		this.color = 'red';
		this.shape = 'circle';
		return this;
	};

  function BlueCircle(){}
  BlueCircle.prototype.create = function() {
		this.color = 'blue';
		this.shape = 'circle';
		return this;
	};

  function GreenCircle(){}

  var ShapeFactory = function(){
    this.types = {};
    this.create = function(type){
      return new this.types[type]().create()
    }
    this.register = function(type, cls){ //cls is class
      if(cls.prototype.create){
        this.types[type] = cls;
      }
      else{console.error(type + ' doesnt have create on prototype')}
    }
  }

  var shapeFactory = new ShapeFactory();
  shapeFactory.register('red', RedCircle);
  shapeFactory.register('blue', BlueCircle);
  shapeFactory.register('green', GreenCircle);
  console.log('shape fact', shapeFactory);
  var blueCircle = shapeFactory.create('blue');
  console.log(blueCircle);
}())
