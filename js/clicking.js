var clickDamage = 1;

var clickCount = 0;

document.querySelector('.monsters').addEventListener("click", Killing);

function Killing() {
	clickCount++;
	console.log("Dupa");
}