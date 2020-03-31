const calculate = calculationSteps => {
  calculationSteps = calculationSteps.filter(element => element != '')
  for (let i = 0; i < calculationSteps.length; i++) {
    if (calculationSteps[i] === null) {
      calculationSteps[i] === 0
    }
  }

  switch (calculationSteps[1]) {
    case '+':
      return addition(calculationSteps)
    case '-':
      return subtraction(calculationSteps)
    case '*':
      return multiplication(calculationSteps)
    default:
      return NaN
  }
}
const addition = (calculationSteps) => {
  let result = calculationSteps[0] + calculationSteps[2]

  return result
}
const subtraction = (calculationSteps) => {
  let result = calculationSteps[0] - calculationSteps[2]

  return result
}
const multiplication = (calculationSteps) => {
  let result = calculationSteps[0] * calculationSteps[2]

  return result
}

module.exports = calculate
