function force(event) {

    let number = document.getElementById('force').name;
    let alea = Math.round(Math.random(1) * 20);
    document.querySelector('.caractere').innerHTML = ` ${number} d${alea}`;
    alert(number + " d" + alea);


}
function dex(event) {

    let number = document.getElementById('dex').name;
    let alea = Math.round(Math.random(1) * 20);
    document.querySelector('.caractere').textContent = ` ${number} d${alea}`;
    alert(number + " d" + alea);
}
function con(event) {

    let number = document.getElementById('con').name;
    let alea = Math.round(Math.random(1) * 20);
    document.querySelector('.caractere').innerHTML = ` ${number} d${alea}`;
    alert(number + " d" + alea);

}
function sag(event) {

    let number = document.getElementById('sag').name;
    let alea = Math.round(Math.random(1) * 20);
    document.querySelector('.caractere').innerHTML = ` ${number} d${alea}`;
    alert(number + " d" + alea);

}
function cha(event) {

    let number = document.getElementById('cha').name;
    let alea = Math.round(Math.random(1) * 20);
    document.querySelector('.caractere').innerHTML = number + " d" + alea;
    alert(number + " d" + alea);

}
function int(event) {

    let number = document.getElementById('int').name;
    let alea = Math.round(Math.random(1) * 20);
    document.querySelector('.caractere').innerHTML = number + " d" + alea;
    alert(number + " d" + alea);

}
