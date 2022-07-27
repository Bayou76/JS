function saluer(event)
{
    // bloquer l'événement par défaut, on peut récupérer les informations de l'événement
    // grâce au paramètre event qui est rempli automatiquement par le listener.
    event.preventDefault();
    document.querySelector('#error').innerHTML="";
    document.querySelector('#message').style.display='block';

    // vérifier les trois classes
    // test de garde 

    if ((getNombreClasse()==0)||getNombreClasse()>3)
    {
        document.querySelector('#message').style.display='none';
        document.querySelector('#classes').innerHTML="";
        document.querySelector('#error').innerHTML = `Vous ne pouvez pas avoir ${getNombreClasse()} classe(s): entre 1 et 3 maximum.`;
    return;
    }

    // génération du message et des emotes
    let message = genererMessageSalutation();

    let emoteRaciale = genererEmoteRaciale();

    let emoteSociale = genererEmoteSociale();


    let classes = listerLesClasses();

    document.querySelector('#emotes').innerHTML=`<ul><li>${emoteRaciale}</li><li>${emoteSociale}</li></ul>`;
    document.querySelector('#salutations').innerHTML= message;
    document.querySelector('#classes').innerHTML = classes;


}




function genererEmoteSociale() {
    let rang = document.querySelector('input[name=rank]:checked').value;
    let emote2 = "";
    switch (rang) {
        case 'royal':
            emote2 = emoteroyaute();
            break;
        case 'noble':
            emote2 = emotenoblesse();
            break;
        default:
            emote2 = emoteroture();
            break;
    }
    return emote2;
}

function genererEmoteRaciale() {
    let race = document.querySelector('#race').value;
    let emote = "";
    switch (race) {
        case 'elf':
            emote = emoteElfe();
            break;
        case 'ork':
            emote = emoteOrque();
            break;

        default:
            emote = emoteHumain();
            break;
    }
    return emote;
}

function genererMessageSalutation() {
    let prenom = document.querySelector('#prenom').value;
    let nom = document.querySelector('#nom').value;
    // construction du message
    let message = "";
    if (prenom.length == 0 && nom.length == 0)
        message = "Bonjour, illustre inconnu(e)";

    else
        message = `Bonjour ${prenom} ${nom}`;
    return message;
}

function emoteHumain()
{
    return "l'ordinateur observe la personne qui approche.";
}
function emoteElfe()
{
    return "l'ordinateur observe la personne, totalement subjugé par la grâce elfique.";
}
function emoteOrque()
{
    return "l'ordinateur observe la personne difforme et repoussante, plissant le nez.";
}

function emoteroture()
{
    return "Le garde fait un signe de tête. ";
}
function emotenoblesse()
{
    return "Le garde s’incline respectueusement.";
}
function emoteroyaute()
{
    return "Le garde, ainsi que toutes les personnes présentes s’inclinent profondément.";
}


function getNombreClasse()
{
    let classes= document.querySelectorAll('.classe:checked');
    return classes.length;
}
function listerLesClasses()
{
    let classes= document.querySelectorAll('.classe:checked');
    let message = "<ul>";
    classes.forEach(classe => {
        message+=`<li>${classe.name}</li>`;
    });
    return message; 
}




