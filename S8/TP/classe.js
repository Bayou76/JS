class Classe {
    intitule;
    listeStagiaire;
    dateDebut;
    dateFin;

    ajouterStagiaire(){
        return this.listeStagiaire.push(stagiaires);
    }

    constructor(intitule){
        this.intitule = intitule;
        this.listeStagiaire = new Array();
    }

}