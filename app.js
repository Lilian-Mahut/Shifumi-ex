var choixJoueur = "", imageJoueur = "", scoreJoueur = 0, scoreOrdi = 0;
var boxImageJoueur = document.getElementById("imageJoueur");
var boxScoreJoueur = document.getElementById("compteurJoueur");
var choixOrdi = ["pierre", "feuille", "ciseaux"];
var boxImageOrdi = document.getElementById("imageOrdi");
var boxScoreOrdi = document.getElementById("compteurOrdi");

function change(joueur) {
  choixJoueur = joueur;
  boxImageJoueur.setAttribute("src", "./images/"+joueur+".png");
  var num = Math.floor(Math.random() * choixOrdi.length);
  var ordi = choixOrdi[num];
  boxImageOrdi.setAttribute("src", "./images/"+ordi+".png");
  if  (joueur == ordi) {
    boxScoreJoueur.innerHTML ="Score : " + scoreJoueur;
    boxScoreOrdi.innerHTML ="Score : " + scoreOrdi;
  } else if (joueur == "pierre" && ordi == "ciseaux" || joueur == "ciseaux" && ordi == "feuille" || joueur == "feuille" && ordi == "pierre")  {
    scoreJoueur++;
    boxScoreJoueur.innerHTML ="Score :" + scoreJoueur;
    boxScoreOrdi.innerHTML ="Score :" + scoreOrdi;
  } else {
    scoreOrdi++;
    boxScoreJoueur.innerHTML ="Score :" + scoreJoueur;
    boxScoreOrdi.innerHTML ="Score :" + scoreOrdi;
  }
}