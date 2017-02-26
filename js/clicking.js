//Global variables on start

var clickDamage = 2;
var criticalHitChance = 0;
var clickCount = 0;
var money = 0;
var totalDamage = 0;
var currentLevel = 0;

//Clicking on monster do something

document.querySelector('.monsters').addEventListener("click", Killing);

//function onclick

function Killing() {
	clickCount++;
	totalDamage += clickDamage;
	Levelcheck();
	console.log(clickCount);
	console.log(totalDamage);
	console.log(currentLevel);
}

//function to check current level

function Levelcheck() {

if (totalDamage < 100) {
	currentLevel = 1;
}
else if (totalDamage <500) {
	currentLevel = 2;
}
else if (totalDamage <1500) {
	currentLevel = 3;
}
else if (totalDamage <3500) {
	currentLevel = 4;
}
else if (totalDamage <6500) {
	currentLevel = 5;
}
else if (totalDamage <10500) {
	currentLevel = 6;
}
else {
	currentLevel = 7;
}
}