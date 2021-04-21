const heal = function (p) {
    this.HP += this.HP * (p / 100);
    this.HP = parseInt(this.HP);
    if (this.HP > 100)
        this.HP = 100;
};
const arena = function (p) {
    this.HP -= this.HP * (p / 100);
    this.HP = parseInt(this.HP);
}
const randomInt = (min = 1, max = 98) => parseInt(Math.random() * (max - min) + min);
const human = {
    name: 'Bill',
    HP: 100
}
const orc = {
    name: 'Рексар',
    HP: 100
}
const fightHuman = arena.bind(human);
const amountFight = randomInt(1, 5);
for (let i = 0; i < amountFight; i++) {
    const p = randomInt();
    fightHuman(p);
}
heal.call(human, 50);
console.log(human);