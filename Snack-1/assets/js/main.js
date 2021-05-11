// Snack 1:
// Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
// nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

// Let's create an array to contain several objects "bicycle"
const bicycles = [
    {
        name: 'Cannondale',
        weight: 7.3
    },

    {
        name: 'Alchemy',
        weight: 8.6
    },

    {
        name: 'Bianchi',
        weight: 7.5
    },

    {
        name: 'Colnago',
        weight: 6.9
    }
];
// Print lightest bicycle using destructuring and template literals
let lightestBicycle = bicycles[0];
for (let i = 0; i < bicycles.length; i++) {
    let {weight: currentBicycleWeight} = bicycles[i];
    
    if (lightestBicycle.weight > currentBicycleWeight) {
        lightestBicycle = bicycles[i];
    }
}
console.log(`The lightest bicycle is the ${lightestBicycle.name}, and its weight is ${lightestBicycle.weight} kg.`);