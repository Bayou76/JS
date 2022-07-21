let nbr = parseInt(prompt("nombre entre 1 et 100"));

while(nbr!=Number(nbr)){
    nbr = parseInt(prompt("nombre entre 1 et 100"));
}

    for (let i = 0; i <= nbr; i++) {
        let li = document.createElement('li');
        li.innerHTML = Math.pow(i,2) ;
        document.getElementById('liste1').appendChild(li);
    }
