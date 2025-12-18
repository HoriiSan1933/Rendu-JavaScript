let joueur1 = {
    name: "Lucas",
    vie: 100,
    attaque: 15,
    precision: 0.6
}

let joueur2 = {
    name: "Javascript",
    vie: 125,
    attaque : 27,
    precision:0.2,
}

// Vérifie si l'attaque touche
function verifierPrecision(precision) {
    return Math.random() < precision  // vérif si le nombre aléatoire inférieure à la precision
}


// Fonction pour faire l'attaque
function attaque(joueur1,joueur2) {
    if (verifierPrecision(joueur1.precision)) {
        joueur2.vie -= joueur1.attaque;
        console.log(joueur1.name + "frappe" + joueur2.name + "et retire" + joueur1.attaque + "de vie");
    } else {
        console.log(joueur1.name + "rate son attaque");
        
    }
}


// Boucle pour les tours 

while (joueur1.vie > 0 && joueur2.vie > 0) {
    console.log("Nouveau tour");

    attaque(joueur1, joueur2);
    console.log("Vie de" + joueur2.name + ":" + joueur2.vie);

    if (joueur2.vie <= 0) {
        console.log(joueur1.name + " a gagné le combat !");
        break

    }
    
   attaque(joueur2,joueur1)
   console.log("Vie de" + joueur1.name + ":" + joueur1.vie);

   if (joueur1.vie <= 0){
    console.log(joueur2.name + "a gagné le combat ! ");
    break
   }
}