
// function to print each line
let lineMaker = function(lineNumber,pyramidNumber){
  let line = ''
  // adds inital empty spaces
  for (let i = 0 ; i < pyramidNumber - lineNumber; i++){
    line = line + (" ");
  }
  // adds # and empty spaces between them
  for( let i = 0; i < lineNumber; i ++){
    line += "# "
  }
  line += "\n"
  return line
}

let pyramidMaker = function (pyramidNumber) {
  resultString = ""
  for (let i = 1; i <= pyramidNumber; i++){
    // calls linemaker for each line, passes the line and pyramid number
    resultString += (lineMaker(i,pyramidNumber));
  }
  console.log(resultString);
}

pyramidMaker(15)
