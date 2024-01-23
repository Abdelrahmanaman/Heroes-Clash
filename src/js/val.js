const betInput = document.getElementById("input-bet");
  const btnBet = document.getElementById("btnBet");
  const coinValue = document.getElementById("coin");

  coin = parseInt(localStorage.getItem("coin")) 
  coinValue.textContent = coin;

  btnBet.addEventListener("click", function () {
    const input = parseInt(betInput.value);

    if (input > coin || coin === 0) {
      console.log("Vous n'avez pas assez d'argent !");
    } else {
      coin -= input;
      coinValue.textContent = coin;
      localStorage.setItem("coin", coin);
      window.location.href = "game.html";
    }
  });
  // async function recuperateComputer() {
//   try {
//     const computerImg = document.getElementById("computer-img");
//     if (computerImg) {
//       const url = `https://superheroapi.com/api/${apiKey}/${computerSelection[randomIndex]}`;
//       const result = await fetch(url);
//       const resp = await result.json();
//       computerImg.src = resp.image.url;
//     } else {
//       console.error("Aucun personnage sélectionné.");
//     }
//   } catch (error) {
//     console.log("Erreur lors de la récupération du personnage", error);
//   }
// }
//* Setting a to save the player ID to local storage

let coin = 100
