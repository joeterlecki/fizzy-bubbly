function getNumbers() {
  let startNumber = document.getElementById("startNumber").value;
  let endNumber = document.getElementById("endNumber").value;

  startNumber = parseInt(startNumber);
  endNumber = parseInt(endNumber);

  if (Number.isInteger(startNumber) && Number.isInteger(endNumber)) {
    let numbers = generateNumberArray(startNumber, endNumber);

    let fizzBuzzNumbers = calculateFizzBuzz(numbers);

    displayFizzBuzzNumbers(fizzBuzzNumbers);
  }

}

function generateNumberArray(startNumber, endNumber) {
  let numberArray = [];

  for (let number = startNumber; number <= endNumber; number++) {
    numberArray.push(number);
  }

  return numberArray;
}

function calculateFizzBuzz(numberArray) {
  fizzBuzzArray = [];
  for (let number = 0; number < numberArray.length; number++) {
    if (number % 3 == 0 && number % 5 == 0) {
      fizzBuzzArray.push('FIZZBUZZ');
    } else if (number % 3 == 0) {
      fizzBuzzArray.push('FIZZ');
    } else if (number % 5 == 0) {
      fizzBuzzArray.push('BUZZ');
    } else {
      fizzBuzzArray.push(number.toString());
    }
  }

  return fizzBuzzArray;
}

function displayFizzBuzzNumbers(fizzBuzzArray) {
  let tableBody = document.getElementById("results");
  let tableTemplate = document.getElementById("fizzBuzzTemplate");

  tableBody.innerHTML = "";

  for (let number = 0; number < fizzBuzzArray.length; number += 5) {
    let tableRow = document.importNode(tableTemplate.content, true);

    let rowColumns = tableRow.querySelectorAll("td");


    rowColumns[0].textContent = fizzBuzzArray[number];
    rowColumns[1].textContent = fizzBuzzArray[number + 1];
    rowColumns[2].textContent = fizzBuzzArray[number + 2];
    rowColumns[3].textContent = fizzBuzzArray[number + 3];
    rowColumns[4].textContent = fizzBuzzArray[number + 4];

    tableBody.appendChild(tableRow)
  }
}