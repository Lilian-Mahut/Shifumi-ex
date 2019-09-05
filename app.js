let choixJoueur = "", imageJoueur = "", scoreJoueur = 0, scoreOrdi = 0;
let boxImageJoueur = document.getElementById("imageJoueur");
let boxScoreJoueur = document.getElementById("compteurJoueur");
let choixOrdi = ["pierre", "feuille", "ciseaux"];
let boxImageOrdi = document.getElementById("imageOrdi");
let boxScoreOrdi = document.getElementById("compteurOrdi");

function change(joueur) {
  choixJoueur = joueur;
  boxImageJoueur.setAttribute("src", "./images/"+joueur+".png");
  let num = Math.floor(Math.random() * choixOrdi.length);
  let ordi = choixOrdi[num];
  boxImageOrdi.setAttribute("src", "./images/"+ordi+".png");
  if  (joueur == ordi) {
    return;
  } else if (joueur == "pierre" && ordi == "ciseaux" || joueur == "ciseaux" && ordi == "feuille" || joueur == "feuille" && ordi == "pierre")  {
    scoreJoueur++;
    boxScoreJoueur.innerHTML = scoreJoueur;
  } else {
    scoreOrdi++;
    boxScoreOrdi.innerHTML = scoreOrdi;
  }
}