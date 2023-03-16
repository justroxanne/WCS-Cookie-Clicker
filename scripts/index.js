//Declaration des variables pour le DOM du header
let header = document.querySelector('header');
let counterList = document.createElement('div');
let paramContainer = document.createElement('div');
let moulaPerSecond = document.createElement('div'); //credit genere automatiquement
let moulaPerManuelclick = document.createElement('div'); //credit genere au clic
let laMoulaTotal = document.createElement('div'); //credit total
let manualCounter = document.querySelector('footer');
let settingsPanel = document.querySelector('.settings-panel');
let returnButton = document.querySelector('.return-button');

//Positionnement des div counter-container et param-container dans le header
header.appendChild(counterList);
header.appendChild(paramContainer);

//Dimensionnement des divs counter-container et param-container
counterList.classList.add('counter-container');

//Dimensionnement du bouton des parametres via une classe
paramContainer.classList.add('param-container');

//Positionnement des 3 counters dans la div counter-poisition
counterList.appendChild(moulaPerSecond);
counterList.appendChild(moulaPerManuelclick);
counterList.appendChild(laMoulaTotal);

//boucle d'attribution de la classe  counter-size, counter style a tous les counters

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
// Image Death Star dans paramButton
paramContainer.innerHTML =
  '<img src="./FinalImages/deathStar.png" alt="deathStar kawaii" width="50%" class="deathstar-settings">';

//Recuperation / Declaration ici du bouton des  setings (death star)  cree juste au dessus
let settingsButton = document.querySelector('.deathstar-settings');

// Application du style au compteur manuel
manualCounter.classList.add('counter-style');

//creation du bouton settings
settingsButton.addEventListener('click', function () {
  settingsPanel.style.display = 'flex';
});

//Sortie des settings si on clique sur le death star
//preventDefault pour eviter de reset, verifier si necessaire

returnButton.addEventListener('click', function (e) {
  e.preventDefault;
  settingsPanel.style.display = 'none';
});

// Creation du listener sur le wookie qui permettra d'ajouter des clicks à chaque click

let clickWookie = document.querySelector('.wookie_clicker');
let count = 0; 

const nbClick = clickWookie.addEventListener('click', function() {
  count ++;
  document.querySelector('footer>p').innerText = `${count} clicks`;
})



