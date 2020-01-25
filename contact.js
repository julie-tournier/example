// fonction calendrier pour page contact, à mettre en bas de la page

function calendrier() {
  var date = new Date(); // Création d'un objet Date avec la date du jour

  var jour = date.getDate(); // On récupère le jour (numéro) exemple 19 pour 19 décembre
  var mois = date.getMonth(); // On récupère le mois
  var annee = date.getFullYear(); // On récupère l'année

  var mois_array = new Array(
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre"
  );
  var date_aujourdui = jour + " " + mois_array[mois] + " " + annee; // Variable texte écrivant la date du jour
  console.log(date_aujourdui);

  var jours_dans_moi = new Array(
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  );

  if (annee % 4 == 0 && annee != 1900) {
    jours_dans_moi[1] = 29;
  }

  var total = jours_dans_moi[mois];
  var dep_j = new Date();

  dep_j.setDate(1);

  dep_j = dep_j.getDay();

  document.write(
    '<table class="cal_calendrier" ><tbody id="cal_body"><tr><th colspan="7">' +
      date_aujourdui +
      "</th></tr>"
  );

  document.write(
    '<tr class="cal_j_semaines"><th>Dim</th><th>Lun</th><th>Mar</th><th>Mer</th><th>Jeu</th><th>Ven</th><th>Sam</th></tr><tr>'
  );

  var sem = 0;

  // glitch m'a donné des erreurs car i n'était pas initialisé
  var i;
  for (i = 1; i <= dep_j; i++) {
    if (mois > 0) {
      document.write(
        '<td class="cal_jours_av_ap">' +
          (jours_dans_moi[mois - 1] - dep_j + i) +
          "</td>"
      );
    } else {
      document.write(
        '<td class="cal_jours_av_ap">' +
          (jours_dans_moi[11] - dep_j + i) +
          "</td>"
      );
    }
    sem++;
  }
  for (i = 1; i <= total; i++) {
    if (sem == 0) {
      document.write("<tr>");
    }
    if (jour == i) {
      document.write('<td class="cal_aujourdhui">' + i + "</td>");
    } else if (sem == 0 || sem == 6) {
      document.write("<td>" + i + "</td>");
    } else {
      document.write('<td class="cal_jours_semaine">' + i + "</td>"); 
      // ce qui ajoute les jours de la semaine, que l'on style en css plus tard !
    }
    sem++;

    if (sem == 7) {
      document.write("</tr>");
      sem = 0;
    }
  }
  for (i = 1; sem != 0; i++) {
    document.write('<td class="cal_jours_av_ap">' + i + "</td>");
    sem++;
    if (sem == 7) {
      document.write("</tr>");
      sem = 0;
    }
  }
  document.write("</tbody></table>");

  return true;
}
