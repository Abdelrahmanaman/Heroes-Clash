const fightBtn = document.getElementById("btnFight")       
const selectedId = parseInt(localStorage.getItem("playerId"))
const computerSelection = superheroIds.filter((id)=> id !== selectedId)
const randomIndex = Math.floor(Math.random() * computerSelection.length);

fightBtn.addEventListener("click", recuperateComputer)
   async function recuperateComputer() {
      try {
        const computerImg = document.getElementById("computer-img");
        if (computerImg) {
          const url = `https://superheroapi.com/api/${apiKey}/${computerSelection[randomIndex]}`;
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