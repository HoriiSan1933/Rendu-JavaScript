let combattant1 = {   // création premier combattant
    nom: 'Lucas',
    vie: 100,
    precision: 0.7,
    attaque : 1.5,
}

function testerPrecision(precision){
return Math.random() < this.precision;
}

function attaquerAdversaire(adversaire2) {
 if (this.testerPrecision()) {                           // Si la précision est bonne l'attaque touche
 console.log(this.nom + " touche " + adversaire2.nom);
adversaire2.vie -= this.attaque;
console.log(adversaire2.nom + " perd " + this.attaque + " points de vie");
} else {                                                 // sinon elle rate 
 console.log(this.nom + " rate son attaque");}
};

let combattant2 = {   // création second combattant
    nom: 'JavaScript',
    vie: 150,
    precision: 0.3,
    attaque : 2,
}

function testerPrecision(precision) {  // tester la precision du second combattant
 return Math.random() < this.precision;};

function attaquerAdversaire(adversaire1) {
if (this.testerPrecision()) {
console.log(this.nom + " touche " + adversaire1.nom);
adversaire.vie -= this.attaque;
console.log(adversaire1.nom + " perd " + this.attaque + " points de vie"); } else {
console.log(this.nom + " rate son attaque");
 }
};


while (combattant1.vie > 0 && combattant2.vie > 0) { // boucle tant que 1 des deux n'a pas 0 PV

console.log("------ Nouveau tour ------"); // annonce de tour si objectif toujours pas atteint

combattant1.attaquerAdversaire(adversaire2); 
 if (combattant2.vie <= 0) {
break; } // le combattant 2 va attaquer si il lui reste toujours des pv 
combattant2.attaquerAdversaire(adversaire1); 

console.log("Vie de " + combattant1.nom + " : " + combattant1.vie); // affichage des pv 
console.log("Vie de " + combattant2.nom + " : " + combattant2.vie);

if (combattant1.vie > 0) {
console.log(combattant1.nom + " a gagné le combat !");   // annonce des gagnants en fonctions 
} else {
console.log(combattant2.nom + " a gagné le combat !");
}
};