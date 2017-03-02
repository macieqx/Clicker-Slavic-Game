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

//function to check current level

function Levelcheck() {

    console.log(totalDamage);

    if (totalDamage < bosses[currentLevel].totalhp) {
        currentLevel = 0;
    }
    else {
        currentLevel++;
        document.querySelector('.monsters').style.backgroundImage = "url('img/boss" + currentLevel + ".jpg')";
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