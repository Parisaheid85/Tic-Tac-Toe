// selectors
var allboxes = document.querySelectorAll("div");
var resetBtn = document.querySelector(".resetbtn");
var playerOneScore = document.querySelector("#player1");
var playerTwoScore = document.querySelector("#player2");
var draw = document.querySelector(".draw");

// score of the game information
var scores = {
  player1: 0,
  player2: 0,
  games: 0,
  draw: 0,
};

var winningConditions = [
  ["box-1", "box-2", "box-3"],
  ["box-4", "box-5", "box-6"],
  ["box-7", "box-8", "box-9"],
  ["box-1", "box-4", "box-7"],
  ["box-2", "box-5", "box-8"],
  ["box-3", "box-6", "box-9"],
  ["box-1", "box-5", "box-9"],
  ["box-3", "box-5", "box-7"],
];

// saving what each player clicked on
var playerOneClicked = [];
var playerTwoClicked = [];

var currentPlayer = "player1";

// switching players & returning clicks
function getCurrentPlayer(boxName) {
  if (currentPlayer === "player1") {
    playerOneClicked.push(boxName);
    currentPlayer = "player2";
    return playerOneClicked;
  } else {
    playerTwoClicked.push(boxName);
    currentPlayer = "player1";
    return playerTwoClicked;
  }
}

// function to choose the winner
var playerOneWinner = function () {
  for (i = 0; i < winningConditions.length; i++) {
    var counter = 0;
    for (k = 0; k < winningConditions[i].length; k++) {
      for (j = 0; j < playerOneClicked.length; j++) {
        if (winningConditions[i][k] === playerOneClicked[j]) {
          counter++;
          if (counter === 3) {
            return true;
          }
        }
      }
    }
  }
};

var playerTwoWinner = function () {
  for (i = 0; i < winningConditions.length; i++) {
    var counter = 0;
    for (k = 0; k < winningConditions[i].length; k++) {
      for (j = 0; j < playerTwoClicked.length; j++) {
        if (winningConditions[i][k] === playerTwoClicked[j]) {
          counter++;
          if (counter === 3) {
            return true;
          }
        }
      }
    }
  }
};

// updaing the score of the game and announcing the winner
function announceWinner() {
  if (playerOneWinner()) {
    playerOneClicked = [];
    playerTwoClicked = [];
    scores.player1++;
    playerOneScore.textContent = scores.player1;
    document.querySelectorAll("div").forEach(function (item) {
      item.classList.remove("cross");
      item.classList.remove("circle");
    });
  } else if (playerTwoWinner()) {
    playerOneClicked = [];
    playerTwoClicked = [];
    scores.player2++;
    playerTwoScore.textContent = scores.player2;
    document.querySelectorAll("div").forEach(function (item) {
      item.classList.remove("cross");
      item.classList.remove("circle");
    });
  } else if (document.querySelectorAll(".cross").length === 5) {
    playerOneClicked = [];
    playerTwoClicked = [];
    scores.draw++;
    draw.textContent = scores.draw;
    document.querySelectorAll("div").forEach(function (item) {
      item.classList.remove("cross");
      item.classList.remove("circle");
    });
  }
}

var handleClick = function (event) {
  if (currentPlayer === "player1") {
    event.target.classList.toggle("cross");
  } else {
    event.target.classList.toggle("circle");
  }

  // Pushing up class name of clicked boxes
  getCurrentPlayer(event.target.classList[0]);
  announceWinner();
};

// function to add the clicks on tiles and allowing to be clicked only once
allboxes.forEach(function (box) {
  box.addEventListener("click", handleClick);
});
