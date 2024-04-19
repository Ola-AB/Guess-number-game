"use strict";
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number! 🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
	document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);
	console.log(guess, typeof guess);

	document.querySelector(".again").addEventListener("click", function () {
		score = 20;
		secretNumber = Math.trunc(Math.random() * 20 + 1);

		document.querySelector(".number").textContent = "?";
		document.querySelector(".score").textContent = score;
		displayMessage("Start guessing...");
		document.querySelector(".guess").value = "";

		document.querySelector("body").style.backgroundColor = "#222";
		document.querySelector(".number").style.width = "15rem";
	});

	// when there is no input
	if (!guess) {
		displayMessage("⛔No number");

		// when player win
	} else if (guess === secretNumber) {
		displayMessage("Correct number!🎉");

		document.querySelector(".number").textContent = secretNumber;

		document.querySelector("body").style.backgroundColor = "#60b347";
		document.querySelector(".number").style.width = "30rem";

		if (score > highscore) {
			highscore = score;
			document.querySelector(".highscore").textContent = highscore;
		}

		// when guess is wrong
	} else if (guess != secretNumber) {
		if (score > 1) {
			displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			displayMessage("You lost the game! 😣");
			document.querySelector(".score").textContent = 0;
		}
	}
});
