(function(){

  // The composite pattern takes an array or hash of items, and gives
  // the grouping a way to perform actions on all of the items using
  // a single method call.

  var numArr = [
    new Num(10),
    new Num(100),
    new Num(1000)
  ];
  var hash = {
    banana: new Num(10),
    apple: new Num(100),
    kiwi: new Num(1000)
  }

  // Create number class
  // ===================================
  function Num(x){
    this.value = x;
  }
  Num.prototype.add = function(x){
    this.value += x;
  }

  // Composite controller
  // ===================================
  function CompositeController(arr){
		this.arr = arr;
	}
  CompositeController.prototype.action = function(action){
    var args = Array.prototype.slice.call(arguments);
    args.shift();

    for(var item in this.arr){
			this.arr[item][action].apply(this.arr[item],args);
		}
  }

  // Create numbers
  // ===================================

  cc = new CompositeController(numArr);
  cc.action('add', 5);
  console.log(numArr);

  cc2 = new CompositeController(hash);
  cc2.action('add', 3);
  console.log(hash);

}())
