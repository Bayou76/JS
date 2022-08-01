let tab = [3,4,3,2];
let tab2 = [ 1,2,3,4,5];


function croissant(tab){
    for (let i = 0; i < tab.length; i++) {
        
        if (tab[i] > tab[i+1] ) {
            return false;
        }
    }
    return true;
}

console.log(croissant(tab));
console.log(croissant(tab2));