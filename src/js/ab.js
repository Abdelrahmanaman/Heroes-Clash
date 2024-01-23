
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
const computerSelection = superheroIds.filter((id)=> id !== selectedId)

fightBtn.addEventListener("click", recuperateComputer)
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
