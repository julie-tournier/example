// fonction qui met un effet survole sur element id contact, à mettre en bas de la page :)

document.getElementById("contact").addEventListener("mouseover", mouseOver);
document.getElementById("contact").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("contact").style.color = "#73808f";
}

function mouseOut() {
  document.getElementById("contact").style.color = "black";
}

// commentaires dans scripts