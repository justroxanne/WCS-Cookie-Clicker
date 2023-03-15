//Declaration des variables pour le DOM du header
let header = document.querySelector('header');
let counterList = document.createElement('div');
let paramButton = document.createElement('div');
let wookiePerSecond = document.createElement('div');
let wookiePerManuelclick = document.createElement('div');
let laMoula = document.createElement('div');

//Positionnement des div counter-container et param-container dans le header
header.appendChild(counterList);
header.appendChild(paramButton);

//Dimensionnement des divs counter-container et param-container
counterList.classList.add('counter-container');

//Dimensionnement du bouton des parametres via une classe
paramButton.classList.add('param-container');

//Positionnement des 3 counters dans la div counter-poisition
counterList.appendChild(wookiePerSecond);
counterList.appendChild(wookiePerManuelclick);
counterList.appendChild(laMoula);

//boucle d'attribution de la classe  counter-size a tous les counters
let allCounter = document.querySelectorAll('.counter-container > div');
console.log(allCounter);
for (let i = 0; i < allCounter.length; i++) {
  allCounter[i].classList.add('counter-size');
  allCounter[i].setAttribute('id', `counter-${i + 1}`);
  let libele = allCounter[i].appendChild(document.createElement('p'));
  if (allCounter[i].id === 'counter-1') {
    libele.innerText = 'CPT1';
  } else if (allCounter[i].id === 'counter-2') {
    libele.innerText = 'CPT2';
  } else {
    libele.innerText = 'CPT3';
  }
}
