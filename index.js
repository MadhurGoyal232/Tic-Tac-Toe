let element = document.querySelectorAll(".lines");
let reset = document.querySelector(".reset");
let winn = document.querySelector(".winnerName");

let count = 0;

element.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerHTML === "") {
      count % 2 === 0 ? (box.innerHTML = "X") : (box.innerHTML = "O");
      count += 1;
    }

    checkWinner();
  });
});

function checkWinner() {
  if (
    (element[0].innerHTML === "X" || element[0].innerHTML === "O") &&
    element[0].innerHTML === element[1].innerHTML &&
    element[1].innerHTML === element[2].innerHTML
  ) {
    disableAllButtons();
    displayWinner();
  } else if (
    (element[3].innerHTML === "X" || element[3].innerHTML === "O") &&
    element[3].innerHTML === element[4].innerHTML &&
    element[4].innerHTML === element[5].innerHTML
  ) {
    disableAllButtons();
    displayWinner();
  } else if (
    (element[6].innerHTML === "X" || element[6].innerHTML === "O") &&
    element[6].innerHTML === element[7].innerHTML &&
    element[7].innerHTML === element[8].innerHTML
  ) {
    disableAllButtons();
    displayWinner();
  } else if (
    (element[0].innerHTML === "X" || element[0].innerHTML === "O") &&
    element[0].innerHTML === element[4].innerHTML &&
    element[4].innerHTML === element[8].innerHTML
  ) {
    disableAllButtons();
    displayWinner();
  } else if (
    (element[2].innerHTML === "X" || element[2].innerHTML === "O") &&
    element[2].innerHTML === element[4].innerHTML &&
    element[4].innerHTML === element[6].innerHTML
  ) {
    disableAllButtons();
    displayWinner();
  } else if (
    (element[0].innerHTML === "X" || element[0].innerHTML === "O") &&
    element[0].innerHTML === element[3].innerHTML &&
    element[3].innerHTML === element[6].innerHTML
  ) {
    disableAllButtons();
    displayWinner();
  } else if (
    (element[1].innerHTML === "X" || element[1].innerHTML === "O") &&
    element[1].innerHTML === element[4].innerHTML &&
    element[4].innerHTML === element[7].innerHTML
  ) {
    disableAllButtons();
    displayWinner();
  } else if (
    (element[2].innerHTML === "X" || element[2].innerHTML === "O") &&
    element[2].innerHTML === element[5].innerHTML &&
    element[5].innerHTML === element[8].innerHTML
  ) {
    disableAllButtons();
    displayWinner();
  }
}

function disableAllButtons() {
  element.forEach((box) => {
    box.setAttribute("disabled", true);
  });
}

// Assuming 'reset' and 'element' are properly defined references
reset.addEventListener("click", () => {
  winn.innerHTML = "";
  element.forEach((box) => {
    box.removeAttribute("disabled");

    box.innerHTML = "";
  });


  count = 0;
});

function displayWinner() {
  count % 2 === 1
    ? (winn.innerHTML = "Player(X) Wins")
    : (winn.innerHTML = "Player(O) Wins");
}
