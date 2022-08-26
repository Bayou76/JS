class Rectangle{
    longueur;
    largeur

    constructor(longueur,largeur){
        this.longueur= longueur;
        this.largeur = largeur;
    }

    surfPeri(){
        return `la surface du rectangle est ${this.longueur * this.largeur}cm² et son périmètre est de ${(this.largeur*2) + (this.longueur*2)}cm `; 
    }

}