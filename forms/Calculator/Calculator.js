let name = ""



btnAdd.onclick=function(){
  firstNumber = inptNum1.value
  secondNumber = inptNum2.value
  name = inptName.value
  let answer = parseInt(firstNumber) + parseInt(secondNumber)
  lblAnswer.value = `${name}, the answer is ${answer}`
}

btnMult.onclick=function(){
  firstNumber = inptNum1.value
  secondNumber = inptNum2.value
  name = inptName.value
  let answer = parseInt(firstNumber) * parseInt(secondNumber)
  lblAnswer.value = `${name}, the answer is ${answer}`
}

btnClear.onclick=function(){
  inptName.value = ""
  inptNum1.value = ""
  inptNum2.value = ""
  lblAnswer.value = ""
}