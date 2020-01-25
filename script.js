// fonction compte à rebours
function compte_a_rebours() {
  var compte_a_rebours = document.getElementById("compte_a_rebours");

  var date_actuelle = new Date();
  var date_evenement = new Date("Jan 1 00:00:00 2020");   // choix de la date et l'heure à laquelle on souhaite que ça s'arrête
  var total_secondes = (date_evenement - date_actuelle) / 1000;

  var prefixe = "Ressources disponible dans ";
  if (total_secondes < 0) {
    prefixe = "Ressources disponible dans "; 
    total_secondes = Math.abs(total_secondes); // On ne garde que la valeur absolue
  }

  if (total_secondes > 0) {
    var jours = Math.floor(total_secondes / (60 * 60 * 24));
    var heures = Math.floor(   // heures
      (total_secondes - jours * 60 * 60 * 24) / (60 * 60)
    );
    var minutes = Math.floor( // minutes
      (total_secondes - (jours * 60 * 60 * 24 + heures * 60 * 60)) / 60
    );
    var secondes = Math.floor( // secondes
      total_secondes - (jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)
    );

    var et = "et";
    var mot_jour = "jours,";
    var mot_heure = "heures,";
    var mot_minute = "minutes,";
    var mot_seconde = "secondes";

    if (jours == 0) {
      jours = "";
      mot_jour = "";
    } else if (jours == 1) {
      mot_jour = "jour,";
    }

    if (heures == 0) {
      heures = "";
      mot_heure = "";
    } else if (heures == 1) {
      mot_heure = "heure,";
    }

    if (minutes == 0) {
      minutes = "";
      mot_minute = "";
    } else if (minutes == 1) {
      mot_minute = "minute,";
    }

    if (secondes == 0) {
      secondes = "";
      mot_seconde = "";
      et = "";
    } else if (secondes == 1) {
      mot_seconde = "seconde";
    }

    if (minutes == 0 && heures == 0 && jours == 0) {
      et = "";
    }

    compte_a_rebours.innerHTML =
      prefixe +
      jours +
      " " +
      mot_jour +
      " " +
      heures +
      " " +
      mot_heure +
      " " +
      minutes +
      " " +
      mot_minute +
      " " +
      et +
      " " +
      secondes +
      " " +
      mot_seconde;
  } else {
    compte_a_rebours.innerHTML = "Compte à rebours terminé."; // stoper le compte à rebours
  }

  var actualisation = setTimeout("compte_a_rebours();", 1000);
}
compte_a_rebours();




// changer la taille de texte id ecriture
function myFunction() {
  var x = document.getElementById("ecriture");
  x.style.fontSize = "18px"; // changement taille  
  x.style.color = "#75808d"; // changement couleur

}

// mouseover page d'acceuil
function mOver(obj) {
  obj.innerHTML = "Bienvenue dans notre monde."; // ce qui s'affiche quand on survole

}

// function pour mot de passe
function passWord() {
  var testV = 1;
  var pass1 = prompt("Entrer le mot de passe", " ");
  while (testV < 3) {
    if (!pass1) history.go(-1);
    if (pass1.toLowerCase() == "letmein") {
      alert("Bienvenue"); // si on met le bon, on a une alerte
      window.open("accueil.html", "_self", false); // et on gagne accès au site
      break;
    }
    testV += 1;
    var pass1 = prompt("Mot de passe incorrect", "Password"); // sinon, tant pis
  }
  if ((pass1.toLowerCase() != "password") & (testV == 3)) history.go(-1);
  return " ";
}

// function clock
var clockID = 0;
//La fonction updateClock permet de mettre à jour l'horloge, c'est une fonction récursive
function UpdateClock() {
  // On récupère l'ID du précédent appel de UpdateClock pour stopper le timer avec clearTimeout() afin d'éviter d'en lancer plusieurs en même temps
  if (clockID) {
    clearTimeout(clockID);
    clockID = 0;
  }
  // La fonction Date() permet de récupérer la date actuelle (Date + heure)
  var tDate = new Date();
  // On modifie la valeur de la balise s'appelant "theTime" et ayant pour parent la balise s'appelant "theClock" avec le texte suivant:
  document.theClock.theTime.value =
    "" + tDate.getHours() + ":" + tDate.getMinutes() + ":" + tDate.getSeconds();
  //permet de récupérer l'heure, les minutes et les secondes
  /* La fonction setTimeout permet d'appeler une fonction après un nombre de millisecondes spécifié. Elle renvoie un ID qui peut être utilisé en paramètre de clearTimeout afin de stopper le timer.
   */
  clockID = setTimeout("UpdateClock()", 1000); // On met à jour l'horloge en appelant la fonction UpdateClock après 1000 millisecondes (1 seconde)
}
/* La fonction StartClock() est appelée lors du chargement de la balise <body> cf index.html.
Elle permet de lancer l'horloge.
*/
// La fonction KillClock est appelée lors du déchargement de la balise <body> cf index.html. Cela permet d'arrêter l'horloge
function KillClock() {
  if (clockID) {
    clearTimeout(clockID);
    clockID = 0;
  }
}


// fonction mouseover pour changer le texte avec id contact
document.getElementById("contact").addEventListener("mouseover", mouseOver);
document.getElementById("contact").addEventListener("mouseout", mouseOut);


function mouseOver() {
  document.getElementById("contact").style.color = "#73808f";
  // choix de la couleur au survole

}

function mouseOut() {
  document.getElementById("contact").style.color = "black";
    // choix de la couleur quand c'est plus survolé

}



