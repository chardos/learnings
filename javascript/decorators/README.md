function checkPermissionDecorator(f) {
  return function() {
    if (user.isAdmin()) f()
    else alert('Not an admin yet')
  }
}
