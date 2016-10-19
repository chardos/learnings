(function(){
  var RedCircle = function(){
    this.color = 'red'
    this.shape = 'circle'
  }
  var BlueCircle = function(){
    this.color = 'blue'
    this.shape = 'circle'
  }
  var ShapeFactory = function(){
    this.create = function(color){
      if (color == 'red') return new RedCircle()
      if (color == 'blue') return new BlueCircle()
    }
  }

  var circle = new ShapeFactory().create('blue');
  console.log(circle);
}())
