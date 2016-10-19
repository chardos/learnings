// ================================================================
// Check admin
// ================================================================


function checkPermissionDecorator(f) {
  return function() {
    if (user.isAdmin) f()
    else alert('Not an admin yet')
  }
}

// Wraps the save function in another function that checks the user is an admin
// before executing.
save = checkPermissionDecorator(save);


// ================================================================
// Doubling Decorator
// ================================================================

function doublingDecorator(f) {
  return function(a,b) {
    return 2 * f(a,b)
  }
}
function sum(a, b) {
  return a + b
}
function product(a, b) {
  return a * b
}
var doubleSum = doublingDecorator(sum);
var doubleProduct = doublingDecorator(product);

doubleSum(2,4) // => 16
doubleProduct(3,3) // => 18
