let stagiaire1 = ['Martin','DUPONT'];
let stagiaire2 = ['Vincent','MARTIN'];
let stagiaires1 = [stagiaire1,stagiaire2];
console.log(stagiaires1);
console.log(stagiaires1[1][0]);

let StagiaireA = new Stagiaire();
StagiaireA.nom = "DUPONT";
StagiaireA.prenom = "Martin";

let StagiaireB = new Stagiaire();
StagiaireB.nom ="MARTIN";
StagiaireB.prenom = "Vincent"

let stagiaires = [StagiaireA,StagiaireB];

console.log(stagiaires);
console.log(stagiaires[1].prenom);

console.log(stagiaires[0].salutation());

let anotherStagiaire = new Stagiaire("Lucette","ANDERSON");

console.log(anotherStagiaire);


let classe = new Classe("DWWM-14");
classe.ajouterStagiaire(stagiaires);
let option = {weekday:'long', year:'numeric', month:'long',day:'numeric'};
classe.dateDebut = new Date(2022,05,07).toLocaleDateString("fr-FR",option);
classe.dateFin = new Date(2023,02,17).toLocaleDateString("fr-FR",option);
console.log(classe);

var stage;

function crerStage() {
    let dateDebut = document.querySelector('dateDebut').value;
    console.log(new Date(dateDebut).toString());
}

crerStage()

function afficherStage(){
 }