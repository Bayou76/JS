let tabfr = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
let taben = ["january","february","march","april","may","june","july","august","september","october","november","december"];
let tabes = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

function traduction(tab,tab2,tab3){

    for (let i = 0; i < tab.length; i++){

        let li = document.createElement('li');
        li.innerHTML = tab[i] + tab2[i] + tab3[i] + "<br>" ;
        document.getElementById('liste').appendChild(li);
    }
}

console.log(traduction(tabfr,taben,tabes));