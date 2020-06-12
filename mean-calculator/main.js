function meanCalculator(numbersArray) {

  var meanTotal = 0;

  for (var i = 0; i <= numbersArray.length - 1; i++) {
    meanTotal += numbersArray[i];
  }

  return meanTotal / numbersArray.length;
}
