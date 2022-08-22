function receivesAFunction(spy) {
  spy();
}
function returnsANamedFunction() {
  return function hi() {};
}
function returnsAnAnonymousFunction() {
  return function () {};
}
