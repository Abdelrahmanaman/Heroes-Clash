
// const apiKey = 1069157230869552	
// const superheroIds = [149, 289, 70, 485, 310, 265, 644, 389, 222, 717, 332, 216];
// const superheroImg = document.querySelectorAll("#superhero-img") //* 12 grid img container simulation 
// const imgTest = document.getElementById("displayed-hero") //*Selected Img
// const compDisplay = document.getElementById("computer-display") //* Computer selected Img
// const bet = document.getElementById("btnBet") //*Button simulation 
// let superheroData = []; //* an empty array to save the object instead recalling the api over and over
// let alive = false
// let coin = 100
// let intelligence = document.getElementById("intelligence")
// let power = document.getElementById("power")
// let durability = document.getElementById("durability")
// let speed = document.getElementById("speed")
// let combat = document.getElementById("combat")
// let strength = document.getElementById("strength")
// let comIntelligence = document.getElementById("com-intelligence")
// let comPower = document.getElementById("com-power")
// let comDurability = document.getElementById("com-durability")
// let comSpeed = document.getElementById("com-speed")
// let comCombat = document.getElementById("com-combat")
// let comStrength = document.getElementById("com-strength")
// const fightBtn = document.getElementById("btnFight")
// const selectedId = parseInt(localStorage.getItem("playerId"))
// const computerSelection = superheroIds.filter((id)=> id !== selectedId)

// fightBtn.addEventListener("click", recuperateComputer)
//    async function recuperateComputer() {
//       try {
//         const computerImg = document.getElementById("computer-img");
//         if (computerImg) {
//         const randomIndex = Math.floor(Math.random() * computerSelection.length);
//           const url = `https://superheroapi.com/api/${apiKey}/${computerSelection[randomIndex]}`;
//           const result = await fetch(url);
//           const resp = await result.json();
//           computerImg.src = resp.image.url;
//           comIntelligence.textContent = `Intelligence: ${resp.powerstats.intelligence}`
//           comSpeed.textContent = `Speed: ${resp.powerstats.speed}`
//           comCombat.textContent = `Combat: ${resp.powerstats.combat}`
//           comStrength.textContent = `Strength: ${resp.powerstats.strength}`
//           comDurability.textContent = `durability: ${resp.powerstats.durability}`
//           comPower.textContent = `Power: ${resp.powerstats.power}`


//         } else {
//           console.error("Aucun personnage sélectionné.");
//         }
//       } catch (error) {
//         console.log("Erreur lors de la récupération du personnage", error);
//       }
   
// }

// async function recuperateComputer() {
//   try {
//     const computerImg = document.getElementById("computer-img");
//     const powerStatsSelect = document.getElementById("powerStats-select");
//     const comIntelligence = document.getElementById("com-intelligence");
//     const comSpeed = document.getElementById("com-speed");
//     const comCombat = document.getElementById("com-combat");
//     const comStrength = document.getElementById("com-strength");
//     const comDurability = document.getElementById("com-durability");
//     const comPower = document.getElementById("com-power");

//     if (powerStatsSelect.selectedIndex !== 0) {
//       const randomIndex = Math.floor(Math.random() * computerSelection.length);
//       const url = `https://superheroapi.com/api/${apiKey}/${computerSelection[randomIndex]}`;
//       const result = await fetch(url);
//       const resp = await result.json();

//       //* Update computer image
//       computerImg.src = resp.image.url;

//       //* Get the selected power stat for the player
//       const playerPowerstats = JSON.parse(localStorage.getItem("powerstats"));
//       const powerStatsSelect = document.getElementById("powerStats-select");
//       const selectedPowerStat = powerStatsSelect.value;

//       //* Set the selected power stat for the computer
//       const computerPowerStatsSelect = document.getElementById("-comp-powerStats");
//       computerPowerStatsSelect.value = selectedPowerStat;

//       //* Update computer power stats
//       comIntelligence.textContent = `Intelligence: ${resp.powerstats.intelligence}`;
//       comSpeed.textContent = `Speed: ${resp.powerstats.speed}`;
//       comCombat.textContent = `Combat: ${resp.powerstats.combat}`;
//       comStrength.textContent = `Strength: ${resp.powerstats.strength}`;
//       comDurability.textContent = `Durability: ${resp.powerstats.durability}`;
//       comPower.textContent = `Power: ${resp.powerstats.power}`;

//       //* Compare power stats and declare the winner
//       const playerPowerStatValue = parseInt(playerPowerstats[selectedPowerStat]);
//       const computerPowerStatValue = parseInt(resp.powerstats[selectedPowerStat]);

//       //* Replace this with your own logic to declare the winner
//       if (playerPowerStatValue > computerPowerStatValue) {
//         console.log(`Player: ${playerPowerStatValue} WINS & Computer:${computerPowerStatValue}`);
//       } else if (playerPowerStatValue === computerPowerStatValue) {
//         console.log(`Player: ${playerPowerStatValue} & Computer:${computerPowerStatValue} TIE`);
//       } else {
//         console.log(`Player: ${playerPowerStatValue} & Computer:${computerPowerStatValue} Wins`);
//       }
//     } else {
//       console.error("Aucun personnage sélectionné.");
//     }
//   } catch (error) {
//     console.log("Erreur lors de la récupération du personnage", error);
//   }
// }

// fightBtn.addEventListener("click", recuperateComputer)