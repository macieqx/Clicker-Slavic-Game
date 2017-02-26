//Global variables on start

var clickDamage = 1;
var idleDamage = 0;
var criticalHitChance = 0;
var clickCount = 0;
var money = 0;
var totalDamage = 0;
var currentLevel = 0;
var currentBoss = bosses[0];

//Clicking on monster do something

document.querySelector('.monsters').addEventListener("click", Killing);

//function onclick

function Killing() {
    "use strict";

    clickCount++;
    totalDamage += clickDamage;
    money += bosses[currentLevel].money;
    Levelcheck();
    console.log(clickCount);
    console.log(totalDamage);
    console.log(currentLevel);
    console.log(money);
    document.getElementById('currentLevelText').innerHTML = "Obecny poziom to " + currentLevel;
}

//function to check current level

function Levelcheck() {

    "use strict";

    if (totalDamage < bosses[0].hp) {
        currentLevel = 0;
    }
    else if (totalDamage < bosses[1].hp) {
        currentLevel = 1;
        document.querySelector('.monsters').style.backgroundImage="url('img/boss1.jpg')";
    }
    else if (totalDamage < bosses[2].hp) {
        currentLevel = 2;
        document.querySelector('.monsters').style.backgroundImage="url('img/boss2.jpg')";
    }
    else if (totalDamage < bosses[3].hp) {
        currentLevel = 3;
        document.querySelector('.monsters').style.backgroundImage="url('img/boss3.jpg')";
    }
    else if (totalDamage < bosses[4].hp) {
        currentLevel = 4;
        document.querySelector('.monsters').style.backgroundImage="url('img/boss4.jpg')";
    }
    else if (totalDamage < bosses[5].hp) {
        currentLevel = 5;
        document.querySelector('.monsters').style.backgroundImage="url('img/boss5.jpg')";
    }
    else if (totalDamage < bosses[6].hp) {
        currentLevel = 6;
        document.querySelector('.monsters').style.backgroundImage="url('img/boss6.jpg')";
    }
    else {
        currentLevel = 7;
        document.querySelector('.monsters').style.backgroundImage="url('img/boss7.jpg')";
    }
}

function Upgrading(){
	console.log(clickDamage);
}; //to be written