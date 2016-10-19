(function(){

  function clone(src, out){
    for(var attr in src.prototype){
      out.prototype[attr] = src.prototype[attr]
    }
  }

  function Circle(){
    this.shape = 'circle';
    this.color = 'red';
    this.sides = 'Infinite';
  }
  Circle.prototype.setColor = function(color){
		this.color = color;
	}
  Circle.prototype.setSides = function(sides){
		this.sides = sides;
	}

  function Rect(){
    this.shape = 'rectangle';
    this.color = 'yellow'
  }

  clone(Circle, Rect);
  var circle = new Circle();
  circle.setColor('blue')

  var rect = new Rect();
  rect.setColor('green');
  console.log(rect.color);
  console.log(rect.shape);

}())
