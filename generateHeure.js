/**
 * generateHeure est module qui permet de générer une heure automatiquement
 */

//Je déclare une fonction qui retourne l'heure
function monHeure() {
    let date = new Date();
    let heure = date.getHours();

    console.log("### Coucou, je passe à la télé à ", heure, "###");
    
    return heure;
}

//Exporter ou exposer la fonction monHeure () parce que je veux rendre la fonction acccessible depuis un autre fichier JS
export default { monHeure };