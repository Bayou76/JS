class Stagiaire{
    nom;
    prenom;

    salutation(){
        return ` Je m'appelle ${this.prenom} ${this.nom} `;
    }

    
constructor(prenom,nom){
    this.prenom = prenom;
    this.nom = nom;
}   
} 
