function Displayer() {

    widthForBar = currentHP / bosses[currentLevel].hp * 100;  //bar for displaying hp of boss
    document.getElementById('currentLevelText').innerHTML = "Obecny poziom to " + currentLevel;  //change display of level
    document.getElementById('currentMoneyText').innerHTML = "Stan konta : " + money;  //change display of money
    document.getElementById('monsterText').innerHTML = bosses[currentLevel].name + " | type: " + bosses[currentLevel].type; //Change display of boss
    document.getElementById('healthText').innerHTML = currentHP + "/" + bosses[currentLevel].hp; //change display of currentHP
    document.getElementById('clickDamageText').innerHTML = "Pojedyncze udrzenie zabiera " + clickDamage + " HP";
    document.getElementById('criticalHitChanceText').innerHTML = "Masz " + criticalHitChance + "% szans na udrzenie krytyczne";
    document.getElementById('criticalHitMultiplierText').innerHTML = "Uderzenie krytyczne zabiera " + valueOfCriticalHit + "x więcej obrażeń";
    document.getElementById('idleDamageText').innerHTML = "Twoi wojowie zabierają " + idleDamage + " HP na sekundę";
    document.getElementById('healthText').style.width = widthForBar + '%';  //change bar width
}



function Idle() {
    setInterval(IdleClick, 1000);
    setInterval(Displayer, 100);
}

Idle();