function compose() {
  var args = arguments
  var start = args.length - 1;
  return function() {
    var i = start;
    var result = args[start].apply(this, arguments)
    while (i--) result = args[i].call(this, result)
    return result
  }
}
function pipe(...fns) {
  return arg => fns.reduce((v,fn) => fn(v),arg);
}



const minusFive = v => v - 5;
const addFour = v => v + 4;
const multiplyByTen = v => v * 10;
let f = pipe( minusFive, addFour, multiplyByTen, Math.abs,console.log)
f(0)