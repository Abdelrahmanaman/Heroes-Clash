//* Declaring variable *//
const apiKey = 1069157230869552	
const superheroIds = [149, 289, 70, 485, 310, 265, 644, 389, 222, 717, 332, 216];
const superheroImg = document.querySelectorAll("#superhero-img") //* 12 grid img container simulation 
const imgTest = document.getElementById("displayed-hero") //*Selected Img
const compDisplay = document.getElementById("computer-display") //* Computer selected Img
const bet = document.getElementById("btnBet") //*Button simulation 
let superheroData = []; //* an empty array to save the object instead recalling the api over and over
let alive = false
let coin = 500
let intelligence = document.getElementById("intelligence")
let power = document.getElementById("power")
let durability = document.getElementById("durability")
let speed = document.getElementById("speed")
let combat = document.getElementById("combat")
let strength = document.getElementById("strength")
const fightBtn = document.getElementById("btnFight")

//* fetching the Api function 
async function getSuperheroes() {
    try {

      //* Creaing a loop to render each of the heroes in one of the 12 IMG grid container *//
  
      for (let i = 0; i < superheroImg.length; i++) {
        const superheroId = superheroIds[i];
        const url = `https://superheroapi.com/api/${apiKey}/${superheroId}`;
  
        const result = await fetch(url);
        const resp = await result.json()
  
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
        superheroData.filter(superhero => superhero.id !== resp.id);
        localStorage.setItem("playerImg", resp.image.url)
        localStorage.setItem("powerstats", JSON.stringify(resp.powerstats))
        localStorage.setItem("playerId", resp.id)
        }); 
      }
      //* Generating a random Img and intailizing the game *//

    } catch (error) {
      console.error(`Error: ${error}`);
    }
}

getSuperheroes()
  
const powerStatsSt = localStorage.getItem("powerstats") //* A string of an object
const powerstats = JSON.parse(powerStatsSt)  //*Changing the string to an object to use the powerstats
const selectedId = parseInt(localStorage.getItem("playerId"))
const computerSelection = superheroIds.filter((id)=> id !== selectedId)
const randomIndex = Math.floor(Math.random() * computerSelection.length);
const selectedPlayerId = localStorage.getItem("playerId")















