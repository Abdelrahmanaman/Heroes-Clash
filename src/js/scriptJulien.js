//* fetching the Api function 
async function getSuperheroes() {
  try {

    //* Creaing a loop to render each of the heroes in one of the 12 IMG grid container *//

    for (let i = 0; i < superheroImg.length; i++) {
      const superheroId = superheroIds[i];
      const url = `https://superheroapi.com/api/${apiKey}/${superheroId}`;

      const result = await fetch(url);
      const resp = await result.json()



      console.log(resp)

      superheroImg[i].src = resp.image.url;
      //* Rendering the chosen Img on the Main selected Img container *//

      superheroImg[i].addEventListener("click", function () {
        imgTest.src = resp.image.url;
        intelligence.textContent = `Intelligence: ${resp.powerstats.intelligence}`
        speed.textContent = `Speed: ${resp.powerstats.speed}`
        combat.textContent = `Combat: ${resp.powerstats.combat}`
        strength.textContent = `Strength: ${resp.powerstats.strength}`
        durability.textContent = `durability: ${resp.powerstats.durability}`
        power.textContent = `Power: ${resp.powerstats.power}`
        console.log(resp.name)
        superheroData.filter(superhero => superhero.id !== resp.id);
        localStorage.setItem("playerImg", resp.image.url)
        localStorage.setItem("powerstats", JSON.stringify(resp.powerstats))
        localStorage.setItem("playerId", resp.id)
      });

      //* Pushing the heroes API OBJECT REUSE 
      superheroData.push(resp);


    }
    //* Generating a random Img and intailizing the game *//
    bet.addEventListener("click", function () {
      // location.href = "game.html"
    });
  } catch (error) {
    // console.error(`Error: ${error}`);
  }
}
getSuperheroes()




// //* Retrieving the img selected in the selection page and bringing it to the game page//
const selectedPlayerImg = localStorage.getItem('playerImg');
const playerImg = document.getElementById("player-img")
if (selectedPlayerImg) {
  playerImg.src = selectedPlayerImg;
} else {
  console.error('Selected superhero image URL not found in localStorage.');
}


const apiKey = 1069157230869552
const superheroIds = [149, 289, 70, 485, 310, 265, 644, 389, 222, 717, 332, 216];
const superheroImg = document.querySelectorAll("#superhero-img") //* 12 grid img container simulation 
const imgTest = document.getElementById("displayed-hero") //*Selected Img
const compDisplay = document.getElementById("computer-display") //* Computer selected Img
const bet = document.getElementById("btnBet") //*Button simulation 
let superheroData = []; //* an empty array to save the object instead recalling the api over and over
let alive = false
let coin = 100
let intelligence = document.getElementById("intelligence")
let power = document.getElementById("power")
let durability = document.getElementById("durability")
let speed = document.getElementById("speed")
let combat = document.getElementById("combat")
let strength = document.getElementById("strength")
let comIntelligence = document.getElementById("com-intelligence")
let comPower = document.getElementById("com-power")
let comDurability = document.getElementById("com-durability")
let comSpeed = document.getElementById("com-speed")
let comCombat = document.getElementById("com-combat")
let comStrength = document.getElementById("strength")
const fightBtn = document.getElementById("btnFight")
const selectedId = parseInt(localStorage.getItem("playerId"))
const computerSelection = superheroIds.filter((id) => id !== selectedId)


const powerStatsSt = localStorage.getItem("powerstats") //* A string of an object
const powerstats = JSON.parse(powerStatsSt)  //*Changing the string to an object to use the powerstats
console.log(typeof powerstats)

// Object.keys(powerstats).forEach(function(cle){
//   console.log(cle + "" + powerstats[cle])
// })
// // const selectedValues = powerstats.value.split('');
// console.log(selectedValues[1])
// const intelValue = parseInt(selectedValues[1])


const selectedPlayerId = localStorage.getItem("playerId")

intelligence.textContent = `Intelligence: ${powerstats.intelligence}`
strength.textContent = `Strength: ${powerstats.strength}`
speed.textContent = `Speed: ${powerstats.speed}`
durability.textContent = `Durability: ${powerstats.durability}`
power.textContent = `Power: ${powerstats.power}`




async function recuperateComputer() {
  try {
    const computerImg = document.getElementById("computer-img");
    if (computerImg) {
      const randomIndex = Math.floor(Math.random() * computerSelection.length);
      const url = `https://superheroapi.com/api/${apiKey}/${computerSelection[randomIndex]}`;
      const result = await fetch(url);
      const resp = await result.json();
      computerImg.src = resp.image.url;
      comIntelligence.textContent = `Intelligence: ${resp.powerstats.intelligence}`
      comSpeed.textContent = `Speed: ${resp.powerstats.speed}`
      comCombat.textContent = `Combat: ${resp.powerstats.combat}`
      comStrength.textContent = `Strength: ${resp.powerstats.strength}`
      comDurability.textContent = `durability: ${resp.powerstats.durability}`
      comPower.textContent = `Power: ${resp.powerstats.power}`
    } else {
      console.error("Aucun personnage sélectionné.");
    }
  } catch (error) {
    console.log("Erreur lors de la récupération du personnage", error);
  }  
}
fightBtn.addEventListener("click", recuperateComputer)




function CompareStats() {
  let selectPowerStat = document.getElementById("powerStats-select")
  
  Object.keys(selectPowerStat).forEach(function(cle){
    console.log(cle + "" + selectPowerStat[cle])
  })

  let intelValuePLayer = parseInt(selectPowerStat.intelligence) 
  

  if(intelValuePLayer < 100) {
    console.log("fight")
  }
  // console.log(typeof selectPowerStatNumb)
  const currentPlayerStats = selectPowerStat.value
  parseInt(currentPlayerStats)
  // console.log(currentPlayerStats)
  let selectedStat = false
  let compStats = document.getElementById("comp-powerStats")
  let currentComptStats = compStats.value
  // console.log(currentComptStats)
  if (selectPowerStat) {
    compStats.value = selectPowerStat.value 
  }
}

fightBtn.addEventListener("click", CompareStats)
