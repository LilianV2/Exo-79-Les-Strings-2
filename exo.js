let pomme = "Elle est belle ma pomme !";

console.log(pomme.indexOf('pomme'));

document.getElementById('last-index-m').innerHTML = pomme.lastIndexOf('m');


if (pomme.startsWith('Elle')) {
    console.log('Commence bien par : Elle')
}


if (pomme.endsWith('!')) {
    console.log("Termine bien par un point d'exclamation")
}


let pomme2 = pomme.substring(17, 23);
document.getElementById('pomme').innerHTML = pomme2;


for (let i = 0; i < pomme.length; i++){
    document.getElementById('one-line').innerHTML += pomme[i] + '<br>';
}
