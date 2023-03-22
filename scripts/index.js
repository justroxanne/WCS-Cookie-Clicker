//Declaration des variables pour le DOM du header
let header = document.querySelector('header');
let counterList = document.createElement('div');
let paramContainer = document.createElement('div');
let perSecondContainer = document.createElement('div'); //credit genere automatiquement
let organicClickContainer = document.createElement('div'); //credit genere au clic
let bankContainer = document.createElement('div'); //credit total
let manualCounter = document.querySelector('footer');
let settingsPanel = document.querySelector('.settings-panel');
let returnButton = document.querySelector('.return-button');
let clickWookie = document.querySelector('.wookie_clicker');
let ewokHelper = document.querySelector(".ewok");
let credPerSecondPower = 0;
let credPerSecondTotal = 0;
let credPerOrganicClickPower = 2;
let credPerOrganicClickTotal = 0;
let OrganicClickTotal = 0;
let bank = 0;

console.log(credPerOrganicClickTotal);



// ---------------------------------------------------------------------------------------------------------------------------style des counters
//Positionnement des div counter-container et param-container dans le header

header.appendChild(counterList);
header.appendChild(paramContainer);

//Dimensionnement des divs counter-container et param-container
counterList.classList.add('counter-container');

//Dimensionnement du bouton des parametres via une classe
paramContainer.classList.add('param-container');

//Positionnement des 3 counters dans la div counter-poisition
counterList.appendChild(perSecondContainer);
counterList.appendChild(organicClickContainer);
counterList.appendChild(bankContainer);

// Application du style au compteur manuel
manualCounter.classList.add('counter-style');

//------------------------------------------------------------------------boucle d'attribution de la classe  counter-size, counter style a tous les counters

let allCounter = document.querySelectorAll('.counter-container > div');
for (let i = 0; i < allCounter.length; i++) {
  allCounter[i].classList.add('counter-size');
  allCounter[i].classList.add('counter-style');
  //attribution d'un ID (=1 par rapport a l'index)
  allCounter[i].setAttribute('id', `counter-${i + 1}`);
  //+ creation des elements p dans chaque div de compteur
  let libele = allCounter[i].appendChild(document.createElement('p'));
  let data = allCounter[i].appendChild(document.createElement('p'));
  data.setAttribute('id', `data-${i + 1}`);
  //attribution du texte selon l'ID
  if (allCounter[i].id === 'counter-1') {
    libele.innerText = 'Credit / second :';
  } else if (allCounter[i].id === 'counter-2') {
    libele.innerText = 'Credit / clic :';
  } else {
    libele.innerText = 'Bank :';
  }
}


// ------------------------------------------------------------------------------------------------//creation de la fonction du counter clic/second


document.querySelector('#data-1').innerHTML = credPerSecondPower;

document.querySelector('#data-2').innerHTML = credPerOrganicClickPower;

document.querySelector('#data-3').innerHTML = bank;

//creation de la fonction du counter clic/second


function increase() {
  for (let i = 0; i < 1; i++) {
    credPerSecondTotal = credPerSecondTotal + credPerSecondPower;
  }
}
setInterval(increase, 1000);

// -------------------------------------------------------------// Creation du listener sur le wookie (et les helpers) qui incremente le nombre de clic manuel et genere des credits par clic

document.querySelector('footer>p').innerText = `${OrganicClickTotal} clicks`;

clickWookie.addEventListener('click', function () {
  OrganicClickTotal++;
  credPerOrganicClickTotal += credPerOrganicClickPower;
  document.querySelector('footer>p').innerText = `${OrganicClickTotal} clicks`;

    //similaire a la fonction par seconde mais plus rapide pour instant MAJ clic manuel + fusion des sous-totaux de clic auto et de clic manuel et incription au dom
    let bank = document.querySelector('#data-3');
    // for (let i = 0; i < 1; i++) {
      bank.innerHTML =
        credPerOrganicClickTotal + credPerSecondTotal;
    //};
  
console.log(bank.innerText);


  //Débloquage du helper ewok avec 5credits/sec en plus pour un cout de 50 credits

    if (bank.innerText >= 5){
      ewokHelper.style.filter = 'none';
      ewokHelper.addEventListener('click', function(e){bank.innerText = bank.innerText - 5;});
      };




console.log(OrganicClickTotal);
console.log(credPerOrganicClickTotal);



// ------------------------------------------------------------------------------------------------------------------------------------------BANK
//similaire a la fonction par seconde mais plus rapide pour
// instant MAJ clic manuel + fusion des sous-totaux de clic auto et de clic manuel et incription au dom

function manuelClicRefresh() {
  for (let i = 0; i < 1; i++) {
    document.querySelector('#data-3').innerHTML =
      credPerOrganicClickTotal + credPerSecondTotal;
  }
}
setInterval(manuelClicRefresh, 1);
});


// --------------------------------------------------------------------------------------------------------------------------------------------parametre
// Image Death Star dans paramButton
paramContainer.innerHTML =
  '<img src="./FinalImages/deathStar.png" alt="deathStar kawaii" width="50%" class="deathstar-settings">';

//Recuperation / Declaration ici du bouton des setings (death star)
let settingsButton = document.querySelector('.deathstar-settings');

//cAu click sur le bouton settings > affichage du panneau des paranetres
settingsButton.addEventListener('click', function () {
  settingsPanel.style.display = 'flex';
});

//Sortie des settings si on clique sur le death star
//preventDefault pour eviter de reset, verifier si necessaire

returnButton.addEventListener('click', function (e) {
  e.preventDefault;
  settingsPanel.style.display = 'none';
});



// -------------------------------------------------------------------------------------------------------------------------creation du pop up click power

clickWookie.addEventListener('click', function (e) {
  function reflect(e) {
    let pointAdded = document.createElement('div');
    pointAdded.innerText = `+${credPerOrganicClickPower}`;
    pointAdded.classList.add('pointAdded', 'unselectable');
    clickWookie.appendChild(pointAdded);
  }
  reflect(e);
});

// --------------------recuperation des positions sur le dom

// let popPosition = clickWookie.getBoundingClientRect();
// let position = {
//   x: e.pageX - popPosition.left,
//   y: e.pageY - popPosition.top,
// };
// --------------------------------position du pop-up

// pointAdded.style.left = position.x + 'px';
// pointAdded.style.top = position.y + 'px';

// let movementInterval = window.setInterval(function () {
//   position.y--;
//   popPosition.style.top = position.y + 'px';
// }, 10);

