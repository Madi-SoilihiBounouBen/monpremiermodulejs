// Je crée une fonction qui récupère l'heure, les minutes et les secondes
function monHeure() {
  // Je récupère la date et l'heure actuelles
  let date = new Date();
  
  // Je récupère l'heure
  let heure = date.getHours();
  
  // Je récupère les minutes
  let minute = date.getMinutes();
  
  // Je récupère les secondes
  let seconde = date.getSeconds();
  
  // J'affiche l'heure dans la console pour vérifier
  console.log("L'heure actuelle est :", heure, ":", minute, ":", seconde);
  
  // Je retourne un objet avec les 3 informations
  return { heure, minute, seconde };
}

// J'exporte la fonction pour l'utiliser dans d'autres fichiers
export default { monHeure };