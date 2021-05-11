// Snack2:
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:
// nome,punti fatti,falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// Create an array that contains several objects "footballTeams" with the following properties: name, goals scored and fouls suffered
const footballTeams = [
    {
        name: 'F.C. Juventus',
        goalsScored: 0,
        foulsSuffered: 0
    },
    {
        name: 'Prescritti Inter',
        goalsScored: 0,
        foulsSuffered: 0
    },
    {
        name: 'Salernitana Lazio',
        goalsScored: 0,
        foulsSuffered: 0
    },
    {
        name: 'A.C. Milan',
        goalsScored: 0,
        foulsSuffered: 0
    },
];

// Generate random numbers for goals scored and fouls suffered properties. 
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let i = 0; i < footballTeams.length; i++) {
    footballTeams[i].goalsScored = getRandomNumber(0, 10);
    footballTeams[i].foulsSuffered = getRandomNumber(0, 30); 
}

// Create a new array. Elements of this array contain names and fouls suffered only.
const namesAndFouls = [];

for (let i = 0; i < footballTeams.length; i++) {
    let {name, foulsSuffered} = footballTeams[i];
    namesAndFouls.push({name, foulsSuffered});
}

console.log('Football teams:');
console.log(footballTeams);

console.log('This is the array containing the football teams names and fouls suffered only:');
console.log(namesAndFouls); 