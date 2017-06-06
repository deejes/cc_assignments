let isLeap = function(year){
  if( year % 4 == 0){
    if (year % 100 == 0 && !(year % 400 == 0)){
    return(false)
    }
    else{
      return true
    }
  }
  else {
    return(false)
  }
}


let firstDay = 2
for (let i = 2014; i <= 2050; i ++){
  if (isLeap(i-1)){
    firstDay += 2
  }
  else{
    firstDay+= 1
  }
  firstDay = firstDay % 7
  if(firstDay === 0){
    document.write(i)
    document.write("\n")
  }
  console.log(i,firstDay)
}
