//kyle simpson
function pipe(...fns) {
  return arg => fns.reduce((v,fn) => fn(v),arg) 
}

function pipe(...fns) { return arg => fns.reduce((v,fn) => fn(v),arg) }
