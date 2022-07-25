let alea = parseInt(Math.random(1)*100);
console.log(alea);

let result = parseInt(prompt("choisissez un nombre entre 0 et 100"));

   
while (alea != result) {
 
    // Si il n'y a qu'une seule instruction, on peut omettre les accolades {}
 
    if (result < alea)
        alert("plus grand");
    else
        alert("plus petit");
 
    result = prompt("choisissez un nombre entre 0 et 100");
}
 
alert("vous avez trouvé le bon chiffre bravo !");