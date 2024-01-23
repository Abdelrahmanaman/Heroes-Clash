const fightBtn = document.getElementById("btnFight")    


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