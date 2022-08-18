function carre() {
    let nombre = document.getElementById("nbr").value;
    let cal = nombre * nombre;
    alert(cal);
    let h1 = document.createElement('h1');
    h1.innerHTML = "Le carré de " + nbr + " est " + cal ;
	document.querySelector('body').appendChild(h1);
}
