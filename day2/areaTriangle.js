let number1 = (parseInt(prompt("enter the first side")))
let number2 = (parseInt(prompt("enter the second side")))
let number3 = (parseInt(prompt("enter the third side")))
let perimeter = (number3 + number2 + number1);
let hP = perimeter/2
console.log((hP*(hP-number1)*(hP-number2)*(hP-number3)) ** (1/2))
console.log(perimeter)
