var bosses;

var Tutorial = {
    name: "Demo",
    hp: 10,
    money: 0.1,
    type: "without"
};

var Bagiennik = {
    name: "Bagiennik",
    hp: 100,
    money: 1,
    type: "water"
};

var BabaYaga = {
    name: "Baba Yaga",
    hp: 350,
    money: 1,
    type: "forest"
};

bosses = [Tutorial, Bagiennik, BabaYaga];
console.log(bosses[0]);
console.log(bosses[1]);
console.log(bosses[0].hp);
console.log(bosses[1].type);