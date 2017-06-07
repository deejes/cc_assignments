function add(a,b){
  const total = a + b ;
  return total
}

function increment(a){
  return a + 1
}

let random = function(n){
  return Math.floor((Math.random() * n))
}

let insult = function(name){
  insults = ["doofus","moron","choot","bastard","fool","idiot"]
  return `${name}, you ${insults[random(insults.length)]}`
}

let repeat = function(inputString,n){
  result = ""
  while (n > 0){
    result += inputString + " "
    n --
  }
  return result.slice(0,-1)
}
