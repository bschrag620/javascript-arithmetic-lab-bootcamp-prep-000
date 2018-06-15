function add(a,b){
  return a+b
}

function subtract(a,b){
  return a-b
}

function multiply(a,b){
  return a*b
}

function divide(a,b){
  return a/d
}

function inc(n){
  return n++
}

function dec(n){
  return n--
}

function makeInt(n){
  if (isNaN(parseInt(n,10))){
    return false
  }
  else {
    return parseInt(n,10)
  }
}

function preserveDecimal(n){
  if (isNaN(parseFloat(n,10))){
    return false
  }
  else {
    return parseFloat(n,10)
  }
}