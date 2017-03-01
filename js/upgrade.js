document.querySelector('.upgrade').addEventListener("click", Heroupone);

function Heroupone() {
	currentHero = heroes[0];

	if (money > currentHero.cost[currentHero.level+1]) {
		money -= currentHero.cost[currentHero.level+1];
		idleDamage -= currentHero.dps[currentHero.level];
		idleDamage += currentHero.dps[currentHero.level+1];
		currentHero.level++;
	}
	else {
		alert("Brak środków!");
	}

	document.getElementById('hero1lvl').innerHTML = "Obecny poziom to " + currentHero.level;
	document.getElementById('currentdps').innerHTML = "Obecny dps to " + currentHero.dps[currentHero.level];
	document.getElementById('futuredps').innerHTML = "Przyszły dps to " + currentHero.dps[currentHero.level+1];
	document.getElementById('levelcost').innerHTML = "Koszt za awans to " + currentHero.cost[currentHero.level+1]
}