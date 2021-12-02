var playernames = document.querySelector(".playernames");
var allboxes = document.querySelectorAll(".box");
var box = document.querySelector(".box");
var resetBtn = document.querySelector(".reset-btn");
var player1 = document.querySelector(".playerone");
var player2 = document.querySelector(".playertwo");

var Xclick = "X";
var Oclick = "O";

for (var i = 0; i < allboxes.length; i++) {
  box.addEventListener("click", handleClick, { once: true });
}

function handleClick(event) {
  let theOneTheUserClickedOn = event.target;
}
