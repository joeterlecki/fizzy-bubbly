function getNumbers() {
  let startNumber = document.getElementById("startNumber").value;
  let endNumber = document.getElementById("endNumber").value;

  startNumber = parseInt(startNumber);
  endNumber = parseInt(endNumber);

  if (Number.isInteger(startNumber) && Number.isInteger(endNumber)) {
    displayFizzBuzzNumbers(startNumber, endNumber);
  }

}

function displayFizzBuzzNumbers(startNumber, endNumber) {
  const url = `https://api.joeterlecki.io/fizzy-bubbly?start_number=${startNumber}&end_number=${endNumber}`
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let fizzBuzzArray = data["number_list"];
      let tableBody = document.getElementById("results");
      let tableTemplate = document.getElementById("fizzBuzzTemplate");

      tableBody.innerHTML = "";

      for (let number = 0; number < fizzBuzzArray.length; number += 5) {
        let tableRow = document.importNode(tableTemplate.content, true);

        let rowColumns = tableRow.querySelectorAll("td");
        rowColumns[0].classList.add(fizzBuzzArray[number]);
        rowColumns[0].textContent = fizzBuzzArray[number];

        rowColumns[1].classList.add(fizzBuzzArray[number + 1]);
        rowColumns[1].textContent = fizzBuzzArray[number + 1];

        rowColumns[2].classList.add(fizzBuzzArray[number + 2]);
        rowColumns[2].textContent = fizzBuzzArray[number + 2];

        rowColumns[3].classList.add(fizzBuzzArray[number + 3]);
        rowColumns[3].textContent = fizzBuzzArray[number + 3];

        rowColumns[4].classList.add(fizzBuzzArray[number + 4]);
        rowColumns[4].textContent = fizzBuzzArray[number + 4];

        tableBody.appendChild(tableRow)
      }
    })
}