//* Declaring variable *//


const apiKey = 1069157230869552	
const superheroIds = [149, 289, 70, 485, 310, 265, 644, 389, 222, 717, 332, 216];
const test = document.querySelectorAll("#hello") //* 12 grid img container simulation 
const imgTest = document.getElementById("imgtest") //*Selected Img
const compTest = document.getElementById("computer-img") //* Computer selected Img
const bet = document.getElementById("bet-btn") //*Button simulation 
let superheroData = []; //* an empty array to save the object instead recalling the api over and over
let alive = false
let coin = 500
const imgHeroes = document.querySelectorAll(".grid-heroes-div-img img")
console.log()


//* fetching the Api function 
async function getSuperheroes() {
    try {

        //* Creaing a loop to render each of the heroes in one of the 12 IMG grid container *//
  
      for (let i = 0; i < test.length; i++) {
        const superheroId = superheroIds[i];
        const url = `https://superheroapi.com/api/${apiKey}/${superheroId}`;
  
        const result = await fetch(url);
        const resp = await result.json();
  
        test[i].src = resp.image.url;
       //* Rendering the chosen Img on the Main selected Img container *//

        test[i].addEventListener("click", function () {
          imgTest.src = resp.image.url;
          console.log(resp.name)
          superheroData = superheroData.filter(superhero => superhero.id !== resp.id);
        });

        //* Pushing the heroes API OBJECT REUSE 
        superheroData.push(resp);
  
  
      }
      //* Generating a random Img and intailizing the game *//
      bet.addEventListener("click", function () {
        const randomHeroIndex = Math.floor(Math.random() * superheroData.length);
        const randomHero = superheroData[randomHeroIndex];
        compTest.src = randomHero.image.url;
        console.log(superheroData)
      });
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }
  getSuperheroes()
  


  // //* A function to intialize the game *//

  function compareSuperheroes(){

    if (userHero.power > randomHero.power) {
      alert("Congratulations! You won!");
      coin += 100; 
    }else {
      alert("Sorry, you lost.");
      coin -= 50;
    }
  }

  //* Checks the wallet 
  function playRound() {
    if (this.wallet === 0) {
      console.log("You don't have enough coins ");
      return;
    }
  }


  class SuperHeroGame {
    constructor(initialMoney) {
      this.wallet = initialMoney;
      this.powerStats = ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat'];
    }
  
    playRound(betAmount) {
      if (this.wallet === 0) {
        console.log("You don't have enough coins");
        return;
      }
  
  
      const playerPowerStat = this.selectPowerStat();
      console.log(`You chose ${playerPowerStat} for this round. Betting ${betAmount} money.`);
  
      // Determine the winner of the round
      const playerValue = this.generateRandomValue();
      const opponentValue = opponentPowerStats[playerPowerStat];
      console.log(`Your ${playerPowerStat} value: ${playerValue}`);
      console.log(`Opponent's ${playerPowerStat} value: ${opponentValue}`);
  
      if (playerValue > opponentValue) {
        console.log("You won this round!");
        this.wallet += betAmount;
      } else {
        console.log("You lost this round.");
        this.wallet -= betAmount;
      }
  
      //* Display current wallet balance *//
      console.log(`Current wallet balance: ${this.wallet}`);
  
      // Check if the game is over or continue to the next round
      if (this.wallet <= 0) {
        console.log("Game over. Your wallet is empty.");
      } else {
        console.log("Starting the next round...\n");
      }
    }
  }
  const game = new SuperHeroGame(100);
  
/*****************Valentin********** */

  
