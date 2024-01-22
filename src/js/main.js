//* Declaring variable *//


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

console.log("test")
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
        });

        //* Pushing the heroes API OBJECT REUSE 
        superheroData.push(resp);
  
  
      }
      //* Generating a random Img and intailizing the game *//
      bet.addEventListener("click", function () {
        location.href = "game.html"
      });
    } catch (error) {
      // console.error(`Error: ${error}`);
    }
  }
  getSuperheroes()
  


  // //* A function to intialize the game *//

  // function compareSuperheroes(){

  //   if (userHero.power > randomHero.power) {
  //     alert("Congratulations! You won!");
  //     coin += 100; 
  //   }else {
  //     alert("Sorry, you lost.");
  //     coin -= 50;
  //   }
  // }

  // //* Checks the wallet 
  // function playRound() {
  //   if (this.wallet === 0) {
  //     console.log("You don't have enough coins ");
  //     return;
  //   }
  // }


  // class SuperHeroGame {
  //   constructor(initialMoney) {
  //     this.wallet = initialMoney;
  //     this.powerStats = ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat'];
  //   }
  
  //   playRound(betAmount) {
  //     if (this.wallet === 0) {
  //       console.log("You don't have enough coins");
  //       return;
  //     }
  
  
  //     const playerPowerStat = this.selectPowerStat();
  //     console.log(`You chose ${playerPowerStat} for this round. Betting ${betAmount} money.`);
  
  //     // Determine the winner of the round
  //     const playerValue = this.generateRandomValue();
  //     const opponentValue = opponentPowerStats[playerPowerStat];
  //     console.log(`Your ${playerPowerStat} value: ${playerValue}`);
  //     console.log(`Opponent's ${playerPowerStat} value: ${opponentValue}`);
  
  //     if (playerValue > opponentValue) {
  //       console.log("You won this round!");
  //       this.wallet += betAmount;
  //     } else {
  //       console.log("You lost this round.");
  //       this.wallet -= betAmount;
  //     }
  
  //     //* Display current wallet balance *//
  //     console.log(`Current wallet balance: ${this.wallet}`);
  
 
      // Check if the game is over or continue to the next round
      // if (this.wallet <= 0) {
      //   console.log("Game over. Your wallet is empty.");
      // } else {
      //   console.log("Starting the next round...\n");
      // }
    
  // const game = new SuperHeroGame(100);
  
  //     // Check if the game is over or continue to the next round
  //     if (this.wallet <= 0) {
  //       console.log("Game over. Your wallet is empty.");
  //     } else {
  //       console.log("Starting the next round...\n");
  //     }
  //   }
  // }
  // const game = new SuperHeroGame(100);
  
/*****************Valentin********** */

document.addEventListener("DOMContentLoaded", async function () {
  let btnBet = document.getElementById("btnBet");
  let btnFight = document.getElementById("btnFight");

  if (btnFight) {
    btnFight.addEventListener("click", async function () {
      const randomHeroIndex = Math.floor(Math.random() * superheroIds.length);
      const randomHero = superheroIds[randomHeroIndex];
      let amountBet = document.getElementById("input-bet")
      coin -= amountBet
      localStorage.setItem("selectedHero", randomHero);
      window.location.href = "game.html";
    });
  }
  if (btnBet) {
    btnBet.addEventListener("click", function () {
      window.location.href = "game.html";
    });
  }
  await recuperateComputer();
});
async function recuperateComputer() {
  try {
    const computerImg = document.getElementById("computer-img");
    const selectedHero = localStorage.getItem("selectedHero");
    if (selectedHero) {
      const url = `https://superheroapi.com/api/${apiKey}/${selectedHero}`;
      const result = await fetch(url);
      const resp = await result.json();
      computerImg.src = resp.image.url;
    } else {
      console.error("Aucun personnage sélectionné.");
    }
  } catch (error) {
    console.log("Erreur lors de la récupération du personnage", error);
  }
}


// //* Retrieving the img selected in the selection page and bringing it to the game page//
const selectedPlayerImg = localStorage.getItem('playerImg');
const playerImg = document.getElementById("player-img")

const powerStatsSt = localStorage.getItem("powerstats") //* A string of an object
const powerstats = JSON.parse(powerStatsSt)  //*Changing the string to an object to use the powerstats
let statSelected = false

if (selectedPlayerImg) {
  playerImg.src = selectedPlayerImg;
} else {
  console.error('Selected superhero image URL not found in localStorage.');
}

function GameStart () {
  selectPowerStat = document.getElementById("powerStats-select").value
  if(selectPowerStat) {
    statSelected = true
    console.log("fight")
    if (statSelected === true) {
      
    }
  }
  else {
    alert("Choisir une compétence")
  }
}







console.log(powerstats)