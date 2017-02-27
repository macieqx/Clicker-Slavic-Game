//Global variables on start

var clickDamage = 1;
var idleDamage = 0;
var criticalHitChance = 90;
var clickCount = 0;
var money = 0;
var totalDamage = 0;
var currentLevel = 0;
var currentBoss = bosses[0];
var bossHP = currentBoss.hp;
var currentHP = 10;
var isCritical;

//Clicking on monster do something

document.querySelector('.monsters').addEventListener("click", Killing);

//function onclick

function Killing() {

    clickCount++;

    isCritical = Math.random()*100;

    if (clickDamage < currentHP) {
        totalDamage += clickDamage;
        currentHP -= clickDamage;
        console.log("opcja1");
    }
    else if (clickDamage === currentHP) {
        totalDamage += clickDamage;
        currentHP -= clickDamage;
        Levelcheck();
        currentHP = bosses[currentLevel].hp;
        console.log("opcja2");
    }
    else {
        totalDamage += currentHP;
        Levelcheck();
        currentHP = bosses[currentLevel].hp;
        console.log("opcja3");
    }

    console.log(currentHP);

    var widthForBar = currentHP / bosses[currentLevel].hp * 100;

    document.getElementById('currentLevelText').innerHTML = "Obecny poziom to " + currentLevel;
    document.getElementById('currentMoneyText').innerHTML = "Stan konta : " + money;
    document.getElementById('monsterText').innerHTML = bosses[currentLevel].name + " | type: " + bosses[currentLevel].type;
    document.getElementById('currentMoneyText').innerHTML = "Stan konta : " + money;
    document.getElementById('healthText').innerHTML = currentHP + "/" + bosses[currentLevel].hp;
    document.getElementById('healthText').style.width = widthForBar + '%';

    money += bosses[currentLevel].money * clickDamage;
}


//function to check current level

function Levelcheck() {

    console.log(totalDamage);

    if (totalDamage < bosses[0].totalhp) {
        currentLevel = 0;
    }
    else if (totalDamage < bosses[1].totalhp) {
        currentLevel = 1;
        document.querySelector('.monsters').style.backgroundImage = "url('img/boss1.jpg')";
    }
    else if (totalDamage < bosses[2].totalhp) {
        currentLevel = 2;
        document.querySelector('.monsters').style.backgroundImage = "url('img/boss2.jpg')";
    }
    else if (totalDamage < bosses[3].totalhp) {
        currentLevel = 3;
        document.querySelector('.monsters').style.backgroundImage = "url('img/boss3.jpg')";
    }
    else if (totalDamage < bosses[4].totalhp) {
        currentLevel = 4;
        document.querySelector('.monsters').style.backgroundImage = "url('img/boss4.jpg')";
    }
    else if (totalDamage < bosses[5].totalhp) {
        currentLevel = 5;
        document.querySelector('.monsters').style.backgroundImage = "url('img/boss5.jpg')";
    }
    else if (totalDamage < bosses[6].totalhp) {
        currentLevel = 6;
        document.querySelector('.monsters').style.backgroundImage = "url('img/boss6.jpg')";
    }
    else {
        currentLevel = 7;
        document.querySelector('.monsters').style.backgroundImage = "url('img/boss7.jpg')";
    }
}
