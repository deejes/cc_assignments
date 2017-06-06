/*document.write("A Message")
console.log('Welcome!');
alert("You are being watched")
let name = prompt("what is your name?")
alert(`Hello ${name}!` )

const pwL = (prompt("Enter a password")).length
if (pwL > 12){
  alert("Too Long!");
}
else if (pwL < 8){
  alert("TOo short!")
}
else{
  alert("Just  right!")
}


let x = 1
while (x < 101){
  if (x%2 === 0){
    console.log(x)
  }
  x++
}


let number = 100
while (number > 0){
  if (number === 1){
    console.log(`
  ${number} bottles of beer on the wall
  ${number} bottles of beer
  Take one down, pass it around, no more bottles of beer on the wall!
      `)
  }
  else{
  console.log(`
    ${number} bottles of beer on the wall
    ${number} bottles of beer
    Take one down, pass it around, ${number - 1} bottles of beer on the wall.
    `)
  number --
}
}
*/

const userInput = prompt("enter a word svp?")
let outputString = ''
let i = 0
while (i < userInput.length){
    if (i %2 == 0){
      outputString = outputString + userInput[i].toUpperCase()
    }
    else {
      outputString = outputString + userInput[i]
    }
    i++
}
console.log(outputString)
