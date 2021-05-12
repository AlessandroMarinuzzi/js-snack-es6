// Snack 3:
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
//  Usiamo i nuovi metodi degli array foreach o filter.

function getRangeOfValues (array, a, b) {
    return array.filter((element, index) => {
        if (index > a && index < b) {
            return true;
        } else {
            return false;
        }
    });
}

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const footballTeams = ['Juventus', 'Milan', 'Prescritti Inter', 'Salernitana Lazio', 'Roma'];
const bicycles = ['Cannondale', 'Bianchi', 'Alchemy', 'Colnago']

console.log(getRangeOfValues(numbers, 3, 7));
console.log(getRangeOfValues(footballTeams, 1, 4));
console.log(getRangeOfValues(bicycles, 0, 3));