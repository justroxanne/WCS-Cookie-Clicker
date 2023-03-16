//Declaration des variables pour le DOM du header
let header = document.querySelector("header");
let counterList = document.createElement("div");
let paramContainer = document.createElement("div");
let moulaPerSecond = document.createElement("div"); //credit genere automatiquement
let moulaPerManuelclick = document.createElement("div"); //credit genere au clic
let laMoulaTotal = document.createElement("div"); //credit total
let manualCounter = document.querySelector("footer");

//Positionnement des div counter-container et param-container dans le header
header.appendChild(counterList);
header.appendChild(paramContainer);

//Dimensionnement des divs counter-container et param-container
counterList.classList.add("counter-container");

//Dimensionnement du bouton des parametres via une classe
paramContainer.classList.add("param-container");

//Positionnement des 3 counters dans la div counter-poisition
counterList.appendChild(moulaPerSecond);
counterList.appendChild(moulaPerManuelclick);
counterList.appendChild(laMoulaTotal);

//boucle d'attribution de la classe  counter-size a tous les counters
let allCounter = document.querySelectorAll(".counter-container > div");
for (let i = 0; i < allCounter.length; i++) {
  allCounter[i].classList.add("counter-size");
  allCounter[i].classList.add("counter-style");
  allCounter[i].setAttribute("id", `counter-${i + 1}`);
  let libele = allCounter[i].appendChild(document.createElement("p"));
  if (allCounter[i].id === "counter-1") {
    libele.innerText = "Credit / second :";
  } else if (allCounter[i].id === "counter-2") {
    libele.innerText = "Credit / clic :";
  } else {
    libele.innerText = "Bank :";
  }
}

// Image Death Star dans paramButton
console.log(
  (paramContainer.innerHTML =
    '<img src="./FinalImages/deathStar.png" alt="deathStar kawaii" width="70%">')
);

// Application du style au compteur manuel
manualCounter.classList.add("counter-style");

//creation du boutton settings

//creation de la fonction du counter clic/second
let number = 0;
function increase() {
  for (let i = 0; i < 1; i++) {
    moulaPerSecond.innerHTML = number += 5;
  }
}

setInterval(increase, 1000);
