/**
 * Ici, je réunirai tous les modules de mon projet
 */

// J'importe le module depuis le fichier generateHeure.js
import generateHeure from "./generateHeure.js";

// Je récupère les éléments HTML pour afficher l'heure, minutes et secondes
let heureActuelle = document.querySelector("#heure");

// Je récupère l'élément HTML avec l'id "minutes"
let minutesActuelle = document.querySelector("#minutes");

// Je récupère l'élément HTML avec l'id "seconde"
let secondeActuelle = document.querySelector("#seconde");

// J'appelle la fonction monHeure() pour récupérer l'heure, minute et seconde actuelles
let temps = generateHeure.monHeure();

// J'affiche chaque valeur dans son span
heureActuelle.textContent = temps.heure + "h ";
// J'affiche les minutes dans le span "minutes"
minutesActuelle.textContent = temps.minute + "m ";
// J'affiche les secondes dans le span "seconde"
secondeActuelle.textContent = temps.seconde + "s";

// J'affiche un message dans la console avec l'heure complète
console.log("Main - mon heure : ", `${temps.heure}h ${temps.minute}m ${temps.seconde}s`);