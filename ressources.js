// javascript pour page ressources

var action2 = function() {
  var image = document.getElementById("monImage"); // selectionner l'image
  image.src = "https://zupimages.net/up/19/46/jmyg.jpg"; // lien de l'image changé
};

var setupListeners = function() {
  var image = document.getElementById("monImage");
  image.addEventListener("mouseover", action2); // quand la souris passe sur l'image monImage
};

window.addEventListener("load", setupListeners); // quand la page se charge

function myFunction() { 
  document.getElementById("texte").innerHTML =
    "Les ressources administratives sont actuellement indisponible."; // texte qui apparait lorsque les individus click
}
