const delayOptions = [
  "Polizei&shy;einsatz",
  "Feuer&shy;wehr&shy;einsatz auf der Strecke",
  "ärzt&shy;liche Versorgung eines Fahr&shy;gastes",
  "unbefugtes Ziehen der Not&shy;bremse",
  "Personen im Gleis",
  "Notarzt&shy;einsatz auf der Strecke",
  "Streik&shy;auswirkungen",
  "Tiere auf der Strecke",
  "Unwetter",
  "Warten auf ein verspätetes Schiff",
  "Pass- und Zoll&shy;kontrolle",
  "technischer Defekt am Bahnhof",
  "Beein&shy;trächtigung durch Vanda&shy;lismus",
  "Ent&shy;schärfung einer Flieger&shy;bombe",
  "Beschädigung einer Brücke",
  "umgestürzter Baum auf der Strecke",
  "Unfall an einem Bahn&shy;übergang",
  "Warten auf An&shy;schluss&shy;reisende",
  "Witterungs&shy;bedingte Be&shy;einträchti&shy;gungen",
  "Verspätung im Ausland",
  "Bereit&shy;stellung weiterer Wagen",
  "Abhängen von Wagen",
  "Gegen&shy;stände auf der Strecke",
  "Ersatz&shy;verkehr mit Bus ist ein&shy;gerichtet",
  "Bau&shy;arbeiten",
  "Unter&shy;stützung beim Ein- und Aus&shy;stieg",
  "Reparatur an der Ober&shy;leitung",
  "Reparatur an einem Signal",
  "Strecken&shy;sperrung ",
  "Reparatur am Zug",
  "Reparatur an der Strecke",
  "defektes Stell&shy;werk",
  "tech&shy;nischer Defekt an einem Bahn&shy;übergang",
  "vorüber&shy;gehend verminderte Ge&shy;schwindig&shy;keit auf der Strecke",
  "Verspätung eines voraus&shy;fahrenden Zuges",
  "Warten auf einen ent&shy;gegen&shy;kommenden Zug",
  "Vorfahrt eines anderen Zuges",
  "verspätete Bereit&shy;stellung des Zuges",
  "Verspätung aus vorheriger Fahrt",
  "kurz&shy;fristiger Personal&shy;ausfall",
  "kurz&shy;fristige Erkrankung von Personal",
  "verspätetes Personal aus vorheriger Fahrt",
  "Streik",
  "Unwetter&shy;aus&shy;wirkungen",
  "Verfügbar&shy;keit der Gleise derzeit ein&shy;geschränkt",
  "technischer Defekt an einem anderen Zug",
  "Warten auf Anschluss&shy;reisende",
  "zusätzlicher Halt zum Ein- und Ausstieg",
  "Umleitung des Zuges",
  "Schnee und Eis",
  "Witterungs&shy;bedingt verminderte Geschwindig&shy;keit",
  "Defekte Tür",
  "Behobener technischer Defekt am Zug",
  "Technische Unter&shy;suchung am Zug",
  "Reparatur an der Weiche",
  "Erdrutsch",
  "Hochwasser",
  "Behördliche Maßnahme",
  "hohes Fahrgast&shy;aufkommen verlängert Ein- und Ausstieg",
  "Zug verkehrt mit verminderter Geschwindigkeit",
  "WLAN nicht verfügbar",
  "Info-/&shy;Entertainment nicht verfügbar",
  "1. Klasse fehlt",
  "Mehrzweck&shy;abteil fehlt",
  "andere Reihenfolge der Wagen",
  "defekte fahr&shy;zeug&shy;gebundene Einstiegs&shy;hilfe",
  "Zug verkehrt richtig gereiht",
  "ein Wagen fehlt",
  "defekte Reservierungs&shy;anzeige",
  "kein gastronomisches Angebot",
  "Fahrrad&shy;mitnahme nicht möglich",
  "Eingeschränkte Fahrrad&shy;beförderung",
  "behinderten&shy;gerechte Einrichtung fehlt",
  "Universal-WC fehlt",
  "Toilette defekt",
  "Klimaanlage ausgefallen",
  "Verzögerungen im Betriebs&shy;ablauf",
  "Auf falsche Strecke geleitet",
  "Umleitung",
  "Zu kurzer Bahn&shy;steig",
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

  const bingoFields = getNumberOfRandomReasons(25);

  const table = document.createElement("table");
  bingoContainer.appendChild(table);

  for (let i = 0; i < 5; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 5; j++) {
      const cell = document.createElement("td");
      const p = document.createElement("p");
      if (i == 2 && j == 2) {
        p.innerHTML = "JOKER";
        p.classList.add("joker-text");
        cell.classList.add("joker");
      } else {
        p.innerHTML = bingoFields[i * 5 + j];
      }
      console.log(bingoFields);
      p.classList.add("box-text");
      cell.appendChild(p);
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}

function setUpCustomBingoSelection() {
  const numberOfBoxes = 25;
  const selectContainer = document.querySelector("#bingo-selection");
  selectContainer.innerHTML = ""; // Clear any previous content

  for (let i = 0; i < numberOfBoxes; i++) {
    const select = document.createElement("select");
    select.id = "bingoSelect";

    //Set Select-options
    for (var x = 0; x < delayOptions.length; x++) {
      var option = document.createElement("option");
      option.value = delayOptions[x];
      option.text = delayOptions[x];
      select.appendChild(option);
    }

    selectContainer.appendChild(select);
  }
}
