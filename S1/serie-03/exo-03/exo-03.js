function tableMultiplication(nbr) {
    nbr = prompt("Entrez le nombre de la table que vous souhaitez : ");
    for(let i = 0; i<=10;i++){

       
        let result = nbr*i;
        let li = document.createElement('li');
        li.innerHTML = i + " * " + nbr + " = " + result;
        document.querySelector('body').appendChild(li);
        

    }
    
}
        