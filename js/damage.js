document.querySelector('.sword').addEventListener("click", Clicking); //event for clicking on moster display function

function Clicking() {  //main function

    document.querySelector('.sword').style.transform = "skewX(-3deg)";

    clickCount++;  //add click number

    isCritical = Math.random()*100;  //generate random number for critical hit

    if (isCritical < criticalHitChance) {
        actualHit = clickDamage  * valueOfCriticalHit;
    }
    else {
        actualHit = clickDamage;
    }


    if (actualHit < currentHP) {  //If you can't kill do damage
        totalDamage += actualHit;
        currentHP -= actualHit;
        console.log("opcja1");
    }
    else {  //If you can kill deal damage equal to currentHP and change level
        totalDamage += currentHP;
        currentHP = 0;
        Levelcheck();
        currentHP = bosses[currentLevel].hp;
        console.log("opcja2");
    }

    money += Math.round(Math.random() * bosses[currentLevel].money * actualHit);  //add money equal to monster money * click damage
}

function Displayer() {

    widthForBar = currentHP / bosses[currentLevel].hp * 100;  //bar for displaying hp of boss
    document.getElementById('currentLevelText').innerHTML = "Obecny poziom to " + currentLevel;  //change display of level
    document.getElementById('currentMoneyText').innerHTML = "Stan konta : " + money;  //change display of money
    document.getElementById('monsterText').innerHTML = bosses[currentLevel].name + " | type: " + bosses[currentLevel].type; //Change display of boss
    document.getElementById('healthText').innerHTML = currentHP + "/" + bosses[currentLevel].hp; //change display of currentHP
    document.getElementById('clickDamageText').innerHTML = "Pojedyncze udrzenie zabiera " + clickDamage + " HP";
    document.getElementById('criticalHitChanceText').innerHTML = "Masz " + criticalHitChance + "% szans na udrzenie krytyczne";
    document.getElementById('criticalHitMultiplierText').innerHTML = "Uderzenie krytyczne zabiera " + valueOfCriticalHit + "x więcej obrażeń";
    document.getElementById('idleDamageText').innerHTML = "Twoi wojowie zabierają na sekundę " + idleDamage + " HP na sekundę";
    document.getElementById('healthText').style.width = widthForBar + '%';  //change bar width
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
    else if (totalDamage < bosses[7].totalhp) {
        currentLevel = 7;
        document.querySelector('.monsters').style.backgroundImage = "url('img/boss7.jpg')";
    }
    else if (totalDamage < bosses[8].totalhp) {
        currentLevel = 8;
        document.querySelector('.monsters').style.backgroundImage = "url('img/boss8.jpg')";
    }
    else if (totalDamage < bosses[9].totalhp) {
        currentLevel = 9;
        document.querySelector('.monsters').style.backgroundImage = "url('img/boss9.jpg')";
    }
    else if (totalDamage < bosses[10].totalhp) {
        currentLevel = 10;
        document.querySelector('.monsters').style.backgroundImage = "url('img/boss10.jpg')";
    }
    else if (totalDamage < bosses[11].totalhp) {
        currentLevel = 11;
        document.querySelector('.monsters').style.backgroundImage = "url('img/boss11.jpg')";
    }
    else if (totalDamage < bosses[12].totalhp) {
        currentLevel = 12;
        document.querySelector('.monsters').style.backgroundImage = "url('img/boss12.jpg')";
    }
    else if (totalDamage < bosses[13].totalhp) {
        currentLevel = 13;
        document.querySelector('.monsters').style.backgroundImage = "url('img/boss13.jpg')";
    }
    else if (totalDamage < bosses[14].totalhp) {
        currentLevel = 14;
        document.querySelector('.monsters').style.backgroundImage = "url('img/boss14.jpg')";
    }
    else if (totalDamage < bosses[15].totalhp) {
        currentLevel = 15;
        document.querySelector('.monsters').style.backgroundImage = "url('img/boss15.jpg')";
    }
    else if (totalDamage < bosses[16].totalhp) {
        currentLevel = 16;
        document.querySelector('.monsters').style.backgroundImage = "url('img/boss16.jpg')";
    }
    else if (totalDamage < bosses[17].totalhp) {
        currentLevel = 17;
        document.querySelector('.monsters').style.backgroundImage = "url('img/boss17.jpg')";
    }
    else {
        return false;
    }
}

function IdleClick() {
     if (idleDamage < currentHP) {  //If you can't kill do damage
        totalDamage += idleDamage;
        currentHP -= idleDamage;
        console.log("opcja1");
    }
    else {  //If you can kill deal damage equal to currentHP and change level
        totalDamage += currentHP;
        currentHP = 0;
        Levelcheck();
        currentHP = bosses[currentLevel].hp;
        console.log("opcja2");
    }
    money += Math.round(Math.random() * bosses[currentLevel].money * idleDamage);
}

function Idle() {
    setInterval(IdleClick, 1000);
    setInterval(Displayer, 100);
}

Idle();