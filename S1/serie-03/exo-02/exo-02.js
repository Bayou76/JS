function nbJours() {
    


    let mois = parseInt(prompt("Numéros du mois ? "));
    let annee = parseInt(prompt("l'année ? "));
    let nbJours = 0;

    switch (mois) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            nbJours = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            nbJours = 30;
            break;
        case 2:
            if ( ((annee % 4 == 0) && !(annee % 100 == 0)) || (annee % 400 == 0) ) {
                nbJours = 29;                
            }
            else
                nbJours = 28;
            break;
    }


    let h1 = document.createElement('h1');
    h1.innerHTML = "Le mois numéro " + mois + " à " + nbJours + " jours " ;
	document.querySelector('body').appendChild(h1);
}