const player = 'boby';
let experience = 100;
let wizardLevel = false;

if(experience > 90) {
    let wizardLevel  = true;
    console.log('inside',wizardLevel);
}

const obj = {
    player : 'bobby',
    experience : 50,
    wizardLevel:true
}

const person = "sali";
const age = 34;
const pet = "horse"

// const greeting = "hello" + name + "you seems to be doing" + greeting
const greetingBest = `hello ${person} you seems to be ${age-10}. what a lovely ${pet} you have`

const playername = obj.player;
const experiences = obj.experience;

console.log('player',playername);

console.log('outside',wizardLevel);
console.log(obj.experience = 10,obj);
console.log(greetingBest);