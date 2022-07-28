let tab = [2, 3,4,3,2];

function palindrome(tab){
    for (let i = 0; i < tab.length; i++) {
       if(tab[i] !== tab[tab.length - 1 -i]){
            return false;
       }
    }
    return true;
}

console.log(palindrome(tab));