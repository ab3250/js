// Library implementation
function* map(src, op) {
  let index = 0;
  for (const value of src) {
    yield op(value, index++);
  }
}

function* filter(src, op) {
  let index = 0;
  for (const value of src) {
    if (op(value, index++)) {
      yield value;
    }
  }
}

function* slice(src, start, finish = Number.MAX_SAFE_INTEGER) {
	let index = 0;
  for (const value of src) {
    if (index >= finish) {
      break;
    }
    if (index >= start) {
      yield value;
    }
    ++index;
  }
}

function head(src) {
  for (const value of src) {
    return value;
  }
}
function tail(src) {
  let value;
  for (value of src) {}
  return value;
}
    
function* reduce(src, op, acc) {
  let index = 0;
  for (const value of src) {
    acc = op(acc, value, index++);
    yield acc;
  }
}
    
function* flat(src, depth = 1) {
  for (const value of src) {
    if (depth > 0 && value[Symbol.iterator])  {
      yield* flat(value, depth - 1);
    } else {
      yield value;      
    }
  }
}
    
function forEach(src, op) {
  let index = 0;
  for (const value of src) {
    if (op(value, index) === false) {
      break;
    }
    ++index;
  }
}
    
function* allKeys(obj = {}) {
  for (const key in obj) {
    yield key;
  }
}

function reverse(src) {
  return [...src].reverse();
}
function sort(src, comp) {
  return [...src].sort(comp);
}

