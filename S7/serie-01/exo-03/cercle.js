class Cercle {

    rayon;

    constructor(prayon){
        this.rayon = prayon;
    }

    calculerSurface(){
        return `Le cercle de rayon ${this.rayon}cm àpour surrface ${(Math.PI * Math.pow(this.rayon,2)).toFixed(2)}cm².`;
    }

    calculerPerimetre(){
        return `Son périmètre est de ${(2 * Math.PI * this.rayon).toFixed(2)}cm`;
    }
}