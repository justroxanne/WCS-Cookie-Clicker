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
let ewokHelper = document.querySelector('.ewok');
let c3poHelper = document.querySelector('.c3po');
let r2d2Helper = document.querySelector('.r2d2');
let yodaHelper = document.querySelector('.yoda');
let xwingHelper = document.querySelector('.xwing');
let falconHelper = document.querySelector('.falcon');
let helpers = document.querySelectorAll('.helper');
let credPerSecondPower = 0;
let credPerSecondTotal = 0;
let credPerOrganicClickPower = 1;
let credPerOrganicClickTotal = 0;
let OrganicClickTotal = 0;
let bank = 0;
// let ewokPrice = 50;
// let c3poPrice = 500;
// let r2d2Price = 1000;
// let yodaPrice = 5000;
// let xwingPrice = 10000;
// let falconPrice = 1000000;
let prices = [5, 10, 15, 20, 25, 30];




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

//Fonction position +1, +2, ...
const plusPointPosition = (posHoriz, posVert) => {
  let pointAdded = document.createElement('div');
  pointAdded.innerText = `+${credPerOrganicClickPower}`;
  pointAdded.classList.add('pointAdded'); //class qui donne le style et l'animation
  clickWookie.appendChild(pointAdded);
  console.log(`${posHoriz}px`)
  pointAdded.style.left = `${posHoriz}px`
  pointAdded.style.top = `${posVert}px`

  //Purge des div crees
  setTimeout(function () {
    pointAdded.remove();
  }, 3000);
}

//Fonction d'increment des totaux de click manuel
const incrementManuelClick = () => {
  OrganicClickTotal++;
  credPerOrganicClickTotal += credPerOrganicClickPower;
  document.querySelector('footer>p').innerText = `${OrganicClickTotal} clicks`;
}

//Fonction increment total et insertion au HTML
const incrementTotalToHtml = () => {
  bank = credPerOrganicClickTotal + credPerSecondTotal;
  document.querySelector('#data-3').innerHTML = bank;
}



/*-----------------------------------------Fonction de débloquage d'un helper---------------*/

function unlockHelper(helperPrice, helper){
  if (bank >= helperPrice){
    helper.style.filter= 'none';
  }
}






// -------------------------------------------------------------// Creation du listener sur le wookie (et les helpers) qui incremente le nombre de clic manuel et genere des credits par clic
document.querySelector('footer>p').innerText = `${OrganicClickTotal} clicks`;


clickWookie.addEventListener('click', function (event) {

  let posX = event.offsetX;
  let posY = event.offsetY;
  
  plusPointPosition(posX, posY)

  incrementManuelClick();

  incrementTotalToHtml();

  for(let i = 0; i < helpers.length; i++){
    unlockHelper(prices[i], helpers[i]);
    }
  }
);









  // ewokHelper.addEventListener('click', function(){
  //   if (bank >= ewokPrice){
  //   bank -= ewokPrice;
  //   credPerOrganicClickTotal -= ewokPrice;
  //   document.querySelector('#data-3').innerText = bank;
  //   credPerOrganicClickPower ++;
  //   document.querySelector('#data-2').innerText = credPerOrganicClickPower;}
  // }
  // );

  // function c3poOk(){
  //   if(bank >= c3poPrice){
      
  //   }
  // }
  

 
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

// creation de l'evenement click sur la div on darkmode

let darkOn = document.querySelector('.sith');
darkOn.addEventListener('click', function () {
  clickWookie.innerHTML = `<img src="./FinalImages/kyloRen.png" alt="chewbacca kawaii" width="100%">`;
});

// creation de l'evenement click sur la div off

let forceOn = document.querySelector('.rebel');
forceOn.addEventListener('click', function () {
  clickWookie.innerHTML = `<img src="./FinalImages/chewie.png" alt="chewbacca kawaii" width="100%">`;
});

// -------------------------------------------------------------------------------------------------------------------------creation du pop up click power

document.getElementById('ewok-help').innerText = `Power : 1 credit/clic, Price : ${prices[0]} credits`;
document.getElementById('C3PO-help').innerText = `Power : 1 credit/second, Price : ${prices[1]} credits`;
document.getElementById('R2D2-help').innerText = `Power : 10 credit/clic, Price : ${prices[2]} credits`;
document.getElementById('yoda-help').innerText = `Power : 10 credit/second , Price : ${prices[3]} credits`;
document.getElementById('xwing-help').innerText = `Power : 100 credit/clic, Price : ${prices[4]} credits`;
document.getElementById('falcon-help').innerText = `Power : You win !! , Price : ${prices[5]} credits`;