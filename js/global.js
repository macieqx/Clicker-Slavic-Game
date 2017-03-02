//Global variables on start

var clickDamage = 1;            // Base click damage
var criticalHitChance = 0.01;      // Base critical hit chance
var valueOfCriticalHit = 2;     // Multiplier of Critical hit
var actualHit = 0;              // Actual hit for loop purpose
var idleDamage = 0;             // Total damage while idle
var clickCount = 0;             // Number of total clicks
var money = 0;                  // Money on start
var totalDamage = 0;            // Total damage as no.clicks * damage atm
var currentLevel = 0;           // Base level
var currentBoss = bosses[0];    // Current boss equals to boss[currentlevel]
var bossHP = currentBoss.hp;    // BossHP = currentBoss.hp
var currentHP = 10;             // Base currentHP
var isCritical;                 // Declaration for critical hit to be checked
var widthForBar;                // Calculations for Barwidth    