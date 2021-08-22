

//const pipe = (...fns) => fns.reduce((f, g) => (arg) => g(f(arg)))
function pipe(...fns) {
  return arg => fns.reduce((v,fn) => fn(v),arg) 
}

const minusFive = v => v - 5
const addFour = v => v + 4
const multiplyByTen = v => v * 10


const f = pipe( minusFive, addFour, multiplyByTen, Math.abs)


  
console.log(f(0))

//const _reduced = (f, g) => (arg) => g(f(arg));
//const pipe = (...fns) => fns.reduce(_reduced);
//const validationPipe = (...fns) => (...args) => fns.reduce((res, func) => func(...args), ...args);
//const pipe = (...fns) => fns.reduce((f, g) => (arg) => g(f(arg)));

//kyle simpson
//function pipe(...fns) { return arg => fns.reduce((v,fn) => fn(v),arg) }

