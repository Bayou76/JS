let tab = [2, 3,4,5,6,7];
let som = 0;

function somme(tab){
    for (let i = 0; i < tab.length; i++) {
       som += tab[i];
    }
    return som;
}

console.log(somme(tab));