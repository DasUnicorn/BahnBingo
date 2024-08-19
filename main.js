const delayOptions = [
  "Polizeieinsatz",
  "Feuerwehreinsatz auf der Strecke",
  "ärztliche Versorgung eines Fahrgastes",
  "unbefugtes Ziehen der Notbremse",
  "Personen im Gleis",
  "Notarzteinsatz auf der Strecke",
  "Streikauswirkungen",
  "Tiere auf der Strecke",
  "Unwetter",
  "Warten auf ein verspätetes Schiff",
  "Pass- und Zollkontrolle",
  "technischer Defekt am Bahnhof",
  "Beeinträchtigung durch Vandalismus",
  "Entschärfung einer Fliegerbombe",
  "Beschädigung einer Brücke",
  "umgestürzter Baum auf der Strecke",
  "Unfall an einem Bahnübergang",
  "Warten auf Anschlussreisende",
  "Witterungsbedingte Beeinträchtigungen",
  "Verspätung im Ausland",
  "Bereitstellung weiterer Wagen",
  "Abhängen von Wagen",
  "Gegenstände auf der Strecke",
  "Ersatzverkehr mit Bus ist eingerichtet",
  "Bauarbeiten",
  "Unterstützung beim Ein- und Ausstieg",
  "Reparatur an der Oberleitung",
  "Reparatur an einem Signal",
  "Streckensperrung ",
  "Reparatur am Zug",
  "Reparatur an der Strecke",
  "defektes Stellwerk",
  "technischer Defekt an einem Bahnübergang",
  "vorübergehend verminderte Geschwindigkeit auf der Strecke",
  "Verspätung eines vorausfahrenden Zuges",
  "Warten auf einen entgegenkommenden Zug",
  "Vorfahrt eines anderen Zuges",
  "verspätete Bereitstellung des Zuges",
  "Verspätung aus vorheriger Fahrt",
  "kurzfristiger Personalausfall",
  "kurzfristige Erkrankung von Personal",
  "verspätetes Personal aus vorheriger Fahrt",
  "Streik",
  "Unwetterauswirkungen",
  "Verfügbarkeit der Gleise derzeit eingeschränkt",
  "technischer Defekt an einem anderen Zug",
  "Warten auf Anschlussreisende",
  "zusätzlicher Halt zum Ein- und Ausstieg",
  "Umleitung des Zuges",
  "Schnee und Eis",
  "Witterungsbedingt verminderte Geschwindigkeit",
  "Defekte Tür",
  "Behobener technischer Defekt am Zug",
  "Technische Untersuchung am Zug",
  "Reparatur an der Weiche",
  "Erdrutsch",
  "Hochwasser",
  "Behördliche Maßnahme",
  "hohes Fahrgastaufkommen verlängert Ein- und Ausstieg",
  "Zug verkehrt mit verminderter Geschwindigkeit",
  "WLAN nicht verfügbar",
  "Info-/Entertainment nicht verfügbar",
  "1. Klasse fehlt",
  "Mehrzweckabteil fehlt",
  "andere Reihenfolge der Wagen",
  "defekte fahrzeuggebundene Einstiegshilfe",
  "Zug verkehrt richtig gereiht",
  "ein Wagen fehlt",
  "defekte Reservierungsanzeige",
  "kein gastronomisches Angebot",
  "Fahrradmitnahme nicht möglich",
  "Eingeschränkte Fahrradbeförderung",
  "behindertengerechte Einrichtung fehlt",
  "Universal-WC fehlt",
  "Toilette defekt",
  "Klimaanlage ausgefallen",
  "Verzögerungen im Betriebsablauf",
  "Auf falsche Strecke geleitet",
  "Umleitung",
  "Zu kurzer Bahnsteig",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getNumberOfRandomReasons(number) {
  var currentReasonList = JSON.parse(JSON.stringify(delayOptions));
  var resultList = [];
  for (let i = 0; i < number; i++) {
    var randomInt = getRandomInt(delayOptions.length - i);
    var randomReason = currentReasonList[randomInt];
    resultList.push(randomReason);
    currentReasonList.splice(randomInt, 1);
  }
  return resultList;
}

function setUpBingo() {
  const bingoContainer = document.querySelector("#bingo-container");
  bingoContainer.innerHTML = ""; // Clear any previous content

  const bingoFields = getNumberOfRandomReasons(16);

  const table = document.createElement("table");
  bingoContainer.appendChild(table);

  for (let i = 0; i < 4; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 4; j++) {
      const cell = document.createElement("td");
      const p = document.createElement("p");
      p.textContent = bingoFields[i * 4 + j];
      p.classList.add("box-text");
      cell.appendChild(p);
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}
