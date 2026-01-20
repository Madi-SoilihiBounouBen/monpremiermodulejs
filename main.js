// J'importe la fonction depuis generateHeure.js
import generateHeure from "./generateHeure.js";

// Je récupère les 3 spans dans le HTML pour afficher l'heure
let heureActuelle = document.querySelector("#heure");
let minutesActuelle = document.querySelector("#minutes");
let secondeActuelle = document.querySelector("#seconde");

// J'appelle la fonction pour récupérer l'heure
let temps = generateHeure.monHeure();

// J'affiche l'heure dans les spans
heureActuelle.textContent = temps.heure + "h ";
minutesActuelle.textContent = temps.minute + "m ";
secondeActuelle.textContent = temps.seconde + "s";

// J'affiche aussi dans la console
console.log("Heure complète :", temps.heure + "h " + temps.minute + "m " + temps.seconde + "s");


// J'importe l'objet utilisateur depuis user.js
import utilisateur from "./user.js";

// Je récupère les 4 spans dans le HTML pour afficher les infos
let nomUtilisateur = document.querySelector("#nomUtilisateur");
let prenomUtilisateur = document.querySelector("#prenomUtilisateur");
let emailUtilisateur = document.querySelector("#emailUtilisateur");
let motDePasseUtilisateur = document.querySelector("#motDePasseUtilisateur");

// J'affiche les informations de l'utilisateur dans les spans
nomUtilisateur.textContent = utilisateur.nom;
prenomUtilisateur.textContent = utilisateur.prenom;
emailUtilisateur.textContent = utilisateur.email;
motDePasseUtilisateur.textContent = utilisateur.motDePasse;