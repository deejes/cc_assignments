let number1 = (parseInt(prompt("enter your first number")))
let number2 = (parseInt(prompt("enter your second number")))

let product = 1

for( let i = number2; i >0 ; i--){
  product = product * number1
}

console.log(product);
