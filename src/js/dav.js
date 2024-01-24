const pRoundOne = document.getElementById("p-round1")
const pRoundTwo = document.getElementById("p-round2")
const pRoundThree = document.getElementById("p-round3")
const cRoundOne = document.getElementById("c-round1")
const cRoundTwo = document.getElementById("c-round2")
const CRoundThree = document.getElementById("c-round3")

let playerPoints = 0
let computerPoints = 0

let numRound = 1


//***********************************  Function to trigger the rounds color results *****************************//

//* Fonction Test
// pRoundOne.addEventListener("click", function(){
//     pRoundOne.style.backgroundColor = "Green";
//     cRoundOne.style.backgroundColor = "Red"
// })

// function roundOne(winner){
//     winner === "player" ? (pRoundOne.style.backgroundColor = "green", cRoundOne.style.backgroundColor = "red", playerPoints += 1)
//     :  (pRoundOne.style.backgroundColor = "red", cRoundOne.style.backgroundColor = "green", computerPoints +=1);
// }
// function roundTwo(winner){
//     winner === "player" ? (pRoundTwo.style.backgroundColor = "green", cRoundTwo.style.backgroundColor = "red", playerPoints += 1)
//     :  (pRoundTwo.style.backgroundColor = "red", cRoundTwo.style.backgroundColor = "green", computerPoints +=1);
// }

// function roundThree(winner){
//     winner === "player" ? (pRoundThree.style.backgroundColor = "green", CRoundThree.style.backgroundColor = "red", playerPoints += 1)
//     :  (pRoundThree.style.backgroundColor = "red", CRoundThree.style.backgroundColor = "green", computerPoints +=1);
// }

function roundWinner(winner){
    if (numRound === 1)
    {
    winner === "player" ? (pRoundOne.style.backgroundColor = "green", cRoundOne.style.backgroundColor = "red", playerPoints += 1)
    :  (pRoundOne.style.backgroundColor = "red", cRoundOne.style.backgroundColor = "green", computerPoints +=1);
    }
    if (numRound === 2)
    {
    winner === "player" ? (pRoundTwo.style.backgroundColor = "green", cRoundTwo.style.backgroundColor = "red", playerPoints += 1)
    :  (pRoundTwo.style.backgroundColor = "red", cRoundTwo.style.backgroundColor = "green", computerPoints +=1);
    }
    if (numRound === 3)
    {
    winner === "player" ? (pRoundThree.style.backgroundColor = "green", CRoundThree.style.backgroundColor = "red", playerPoints += 1)
    :  (pRoundThree.style.backgroundColor = "red", CRoundThree.style.backgroundColor = "green", computerPoints +=1);
    }
}










//***********************************  Function to Change Title Round *****************************//
function roundTitle(round) {
    const titreRound = document.querySelector(".roundTitle-title")
    titreRound.innerHTML=`Round ${round}`
}










//***********************************  Function Désactive l'option de la liste de selection, utilisée lors du roud précédent *****************************//
// l'option en question est envoyé par le résultat du round précédent
function updateSelectList (usedValuePreviousRound) {
    const optionSelected = document.getElementById(`${usedValuePreviousRound}`)
    optionSelected.disabled = true;
}









//***********************************  Function pour Déclarer le vainqueur Final *****************************//

function declarerWinner () {
    console.log(localStorage.getItem("bet"))
    const resultMessage = document.getElementById("resultMessage");
    resultMessage.style.color = "white"
    resultMessage.style.height = "100px"
    resultMessage.style.width = "300px"


    if (playerPoints > computerPoints)
    {
        console.log("Player est vainqueur")
        resultMessage.innerHTML = "Congratulations! You are the winner!";
        coin = coin + 2*(localStorage.getItem("bet"))
        console.log(coin)
        localStorage.setItem("coin", coin)
        if (parseInt(localStorage.getItem("coin")))
        {
        coin = parseInt(localStorage.getItem("coin")) 
        const coinValue = document.getElementById("coin");
        coinValue.textContent = coin;
        }
        else
        {
        coinValue.textContent = coin;
        
        }
    }
    else
    {
        console.log("Computer est vainqueur")
        resultMessage.innerHTML = "Looooooooser!";

    }
}







//***********************************  Function Changer de Round à l'issue du combat *****************************//

let powerStatPlayerRoundOne = "intelligence"
let winnerRound = "player"


function changeRound(i) {
    if (i < 3) {
        roundWinner(winnerRound)  //winnerRound --> variable adressé par le script de julien ou à récupérer dans le local Storage ?
        updateSelectList(powerStatPlayerRoundOne) ////winnerRound --> variable adressé par le script de julien ou à récupérer dans le local Storage ?
        roundTitle(i += 1)
        console.log(i)
        numRound += 1
        console.log(playerPoints)
        console.log(computerPoints)
        return(numRound)
    }

    if (i = 3)
    {
        roundWinner(winnerRound)  //winnerRound --> variable adressé par le script de julien ou à récupérer dans le local Storage ?
        declarerWinner()
    }
}









let btnFight = document.getElementById("btnFight");
btnFight.addEventListener("click", () => {
    changeRound(numRound)
})













































// // const myCoin = parseInt(document.getElementById("coin").textContent);
// // console.log(myCoin);


// //* Declaring variable *//


// const apiKey = 1069157230869552	
// const superheroIds = [149, 289, 70, 485, 310, 265, 644, 389, 222, 717, 332, 216];
// const superheroImg = document.querySelectorAll("#superhero-img") //* 12 grid img container simulation 
// const imgTest = document.getElementById("displayed-hero") //*Selected Img
// const compDisplay = document.getElementById("computer-display") //* Computer selected Img
// const bet = document.getElementById("btnBet") //*Button simulation 
// let superheroData = []; //* an empty array to save the object instead recalling the api over and over
// let alive = false
// let coin = 100
// // document.getElementById("coin").innerHTML = coin
// // localStorage.setItem("coin",coin)
// let intelligence = document.getElementById("intelligence")
// let power = document.getElementById("power")
// let durability = document.getElementById("durability")
// let speed = document.getElementById("speed")
// let combat = document.getElementById("combat")
// let strength = document.getElementById("strength")




// console.log("test")
// //* fetching the Api function 
// async function getSuperheroes() {
//     try {

//         //* Creaing a loop to render each of the heroes in one of the 12 IMG grid container *//
  
//       for (let i = 0; i < superheroImg.length; i++) {
//         const superheroId = superheroIds[i];
//         const url = `https://superheroapi.com/api/${apiKey}/${superheroId}`;
  
//         const result = await fetch(url);
//         const resp = await result.json()
        


//         console.log(resp)
  
//         superheroImg[i].src = resp.image.url;
//        //* Rendering the chosen Img on the Main selected Img container *//

//         superheroImg[i].addEventListener("click", function () {
//           imgTest.src = resp.image.url;
//           intelligence.textContent = `Intelligence: ${resp.powerstats.intelligence}`
//           speed.textContent = `Speed: ${resp.powerstats.speed}`
//           combat.textContent = `Combat: ${resp.powerstats.combat}`
//           strength.textContent = `Strength: ${resp.powerstats.strength}`
//           durability.textContent = `durability: ${resp.powerstats.durability}`
//           power.textContent = `Power: ${resp.powerstats.power}`
//           console.log(resp.name)
//            superheroData.filter(superhero => superhero.id !== resp.id);
//            localStorage.setItem("playerImg", resp.image.url)
//            localStorage.setItem("powerstats", JSON.stringify(resp.powerstats))
//            localStorage.setItem("playerId", resp.id)
//         });

//         //* Pushing the heroes API OBJECT REUSE 
//         superheroData.push(resp);
  
  
//       }
//       //* Generating a random Img and intailizing the game *//
//       bet.addEventListener("click", function () {
//         // location.href = "game.html"
//       });
//     } catch (error) {
//       // console.error(`Error: ${error}`);
//     }
//   }
//   getSuperheroes()
  


//   // //* A function to intialize the game *//

//   // function compareSuperheroes(){

//   //   if (userHero.power > randomHero.power) {
//   //     alert("Congratulations! You won!");
//   //     coin += 100; 
//   //   }else {
//   //     alert("Sorry, you lost.");
//   //     coin -= 50;
//   //   }
//   // }

//   // //* Checks the wallet 
//   // function playRound() {
//   //   if (this.wallet === 0) {
//   //     console.log("You don't have enough coins ");
//   //     return;
//   //   }
//   // }


//   // class SuperHeroGame {
//   //   constructor(initialMoney) {
//   //     this.wallet = initialMoney;
//   //     this.powerStats = ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat'];
//   //   }
  
//   //   playRound(betAmount) {
//   //     if (this.wallet === 0) {
//   //       console.log("You don't have enough coins");
//   //       return;
//   //     }
  
  
//   //     const playerPowerStat = this.selectPowerStat();
//   //     console.log(`You chose ${playerPowerStat} for this round. Betting ${betAmount} money.`);
  
//   //     // Determine the winner of the round
//   //     const playerValue = this.generateRandomValue();
//   //     const opponentValue = opponentPowerStats[playerPowerStat];
//   //     console.log(`Your ${playerPowerStat} value: ${playerValue}`);
//   //     console.log(`Opponent's ${playerPowerStat} value: ${opponentValue}`);
  
//   //     if (playerValue > opponentValue) {
//   //       console.log("You won this round!");
//   //       this.wallet += betAmount;
//   //     } else {
//   //       console.log("You lost this round.");
//   //       this.wallet -= betAmount;
//   //     }
  
//   //     //* Display current wallet balance *//
//   //     console.log(`Current wallet balance: ${this.wallet}`);
  
 
//       // Check if the game is over or continue to the next round
//       // if (this.wallet <= 0) {
//       //   console.log("Game over. Your wallet is empty.");
//       // } else {
//       //   console.log("Starting the next round...\n");
//       // }
    
//   // const game = new SuperHeroGame(100);
  
//   //     // Check if the game is over or continue to the next round
//   //     if (this.wallet <= 0) {
//   //       console.log("Game over. Your wallet is empty.");
//   //     } else {
//   //       console.log("Starting the next round...\n");
//   //     }
//   //   }
//   // }
//   // const game = new SuperHeroGame(100);
  

//   const powerStatsSt = localStorage.getItem("powerstats") //* A string of an object
//   const powerstats = JSON.parse(powerStatsSt)  //*Changing the string to an object to use the powerstats


//   const selectedId = parseInt(localStorage.getItem("playerId"))

//   const computerSelection = superheroIds.filter((id)=> id !== selectedId)
  
//   const randomIndex = Math.floor(Math.random() * computerSelection.length);

// /*****************Valentin********** */

// const betInput = document.getElementById("input-bet");
//   const btnBet = document.getElementById("btnBet");
//   const coinValue = document.getElementById("coin");

//   coin = parseInt(localStorage.getItem("coin")) 
//   coinValue.textContent = coin;

//   btnBet.addEventListener("click", function () {
//     const input = parseInt(betInput.value);

//     if (input > coin || coin === 0) {
//       console.log("Vous n'avez pas assez d'argent !");
//     } else {
//       coin -= input;
//       coinValue.textContent = coin;
//       localStorage.setItem("coin", coin);
//       window.location.href = "game.html";
//     }
//   });


// // async function recuperateComputer() {
// //   try {
// //     const computerImg = document.getElementById("computer-img");
// //     if (computerImg) {
// //       const url = `https://superheroapi.com/api/${apiKey}/${computerSelection[randomIndex]}`;
// //       const result = await fetch(url);
// //       const resp = await result.json();
// //       computerImg.src = resp.image.url;
// //     } else {
// //       console.error("Aucun personnage sélectionné.");
// //     }
// //   } catch (error) {
// //     console.log("Erreur lors de la récupération du personnage", error);
// //   }
// // }
// //* Setting a to save the player ID to local storage
// const selectedPlayerId = localStorage.getItem("playerId")


// // //* Retrieving the img selected in the selection page and bringing it to the game page//
//   // const selectedPlayerImg = localStorage.getItem('playerImg');
//   // const playerImg = document.getElementById("player-img")
//   // if (selectedPlayerImg) {
//   //   playerImg.src = selectedPlayerImg;
//   // } else {
//   //   console.error('Selected superhero image URL not found in localStorage.');
//   // }







// console.log(powerstats)

































































