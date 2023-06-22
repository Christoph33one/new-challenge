const startButton = document.getElementById("startBnt");
const playText = document.getElementById("playText");
const boxes = Array.from(document.getElementsByClassName("box"));
const restartBtn = document.getElementById("restartBtn");
const spaces = [];
const PLAYER_ONE = "O";
const PLAYER_TWO = "X";
let currentPlayer;

document.addEventListener("DOMContentLoaded", function () {
  startButton.addEventListener("click", enterGame);
  restartBtn.addEventListener("click", restart);
});

function enterGame() {
  startButton.classList.add("hide");
  playText.innerText = "Let's play";
  restartBtn.classList.remove("hide");
  drawBoard();
}

const drawBoard = () => {
  /* Positioning game board */
  boxes.forEach((box, index) => {
    let styleString = "";
    if (index < 3) {
      styleString += `border-bottom: 6px solid var(--red);`;
    }
    if (index % 3 == 0) {
      styleString += `border-right: 6px solid var(--red);`;
    }
    if (index % 3 == 2) {
      styleString += `border-left: 6px solid var(--red);`;
    }
    if (index > 5) {
      styleString += `border-top: 6px solid var(--red);`;
    }
    box.style = styleString;
    box.addEventListener("click", boxClicked);
  });
};

const boxClicked = (e) => {
  const id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (playerHasWon()) {
      playText.innerText = `${currentPlayer} has won!`;
      return;
    }
    currentPlayer = currentPlayer == PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE;
  }
};

const playerHasWon = () => {
  if (spaces[0] == currentPlayer) {
    if (spaces[1] == currentPlayer && spaces[2] == currentPlayer) {
      console.log(`${currentPlayer} wins up top`);
      return true;
    }
    if (spaces[3] == currentPlayer && spaces[6] == currentPlayer) {
      console.log(`${currentPlayer} wins on the left`);
      return true;
    }
    if (spaces[4] == currentPlayer && spaces[8] == currentPlayer) {
      console.log(`${currentPlayer} wins diagonal`);
      return true;
    }
  }
  if (spaces[8] == currentPlayer) {
    if (spaces[2] == currentPlayer && spaces[5] == currentPlayer) {
      console.log(`${currentPlayer} wins on the right`);
      return true;
    }
    if (spaces[6] == currentPlayer && spaces[7] == currentPlayer) {
      console.log(`${currentPlayer} wins on the bottom`);
      return true;
    }
  }
  if (spaces[4] == currentPlayer) {
    if (spaces[1] == currentPlayer && spaces[7] == currentPlayer) {
      console.log(`${currentPlayer} wins vertically in the middle`);
      return true;
    }
    if (spaces[3] == currentPlayer && spaces[5] == currentPlayer) {
      console.log(`${currentPlayer} wins horizontally in the middle`);
      return true;
    }
    if (spaces[2] == currentPlayer && spaces[6] == currentPlayer) {
      console.log(`${currentPlayer} wins on the bottom`);
      return true;
    }
  }
};

const restart = () => {
  spaces.forEach((space, index) => {
    spaces[index] = null;
  });
  boxes.forEach((box) => {
    box.innerText = "";
  });
  playText.innerText = "Let's play";
  currentPlayer = PLAYER_ONE;
  restartBtn.classList.add("hide");
  startButton.classList.remove("hide");
};

restart();
