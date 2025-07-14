var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "images/dice" + randomNumber1 + ".png";

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

var image1 = document.querySelector(".img1"); 
image1.setAttribute("src", randomDiceImage);

var image2 = document.querySelector(".img2");
image2.setAttribute("src", randomDiceImage2);

var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  heading.textContent = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  heading.textContent = "Player 2 Wins!🚩";
} else {
  heading.textContent = "Draw!";
}