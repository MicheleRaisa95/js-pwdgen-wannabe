//mette un freno a js per costringerlo ad usare delle best practices
'use strict';

let currentElement = document.getElementById('password');
let currentText = currentElement.innerHTML;

//prompt nome-salvo in una variabile userName
const userName = prompt('Inserisci il tuo nome');

//prompt cognome-salvo in una variabile userLastName
const userLastName = prompt('Inserisci il cognome');

//prompt colore-salvo in una variabile userFavoriteColor
const userFavoriteColor = prompt ('Inserisci colore preferito');

//Bonus2 Random number
let userRondomNumber = Math.floor((Math.random() * 100) + 1);

currentText = `${currentText}${userName}${userLastName}${userFavoriteColor}${userRondomNumber}`;

//Scrivo nel browser
currentElement.innerHTML = currentText;

// Bonus1 Scrivo nel browser

console.log(currentText);



