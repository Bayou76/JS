
function calculeMoyenne() {

    let som = 0;
    let nb_note = parseInt(prompt("nombre de notes ?"));

    for (let i = 1; i <= nb_note; i++) {
        note = parseInt(prompt("Entrez la note : "));
        som += note;
        console.log(som);
    }

    moyenne = (som/nb_note);
    let h1 = document.createElement('h1');
    h1.innerHTML = "la moyenne est de : " + moyenne ;
	document.querySelector('body').appendChild(h1);


}