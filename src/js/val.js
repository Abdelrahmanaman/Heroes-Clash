

coin = parseInt(localStorage.getItem("coin")) 
document.getElementById("coin").innerHTML = coin
const betInput = document.getElementById("input-bet")
const coinValue = document.getElementById("coin")
// const betInput = document.getElementById("input-bet");
// const btnBet = document.getElementById("btnBet");
// const coinValue = document.getElementById("coin");

if (parseInt(localStorage.getItem("coin")))
{
coin = parseInt(localStorage.getItem("coin")) 
coinValue.textContent = coin
}
else
{
coinValue.textContent = coin
}

if (bet) {
bet.addEventListener("click", function () {
    const input = parseInt(betInput.value);

    if (!input) {
        console.log("Vous n'avez pas misé");
    } else if (input > coin || coin === 0) {
        console.log("Vous n'avez pas assez d'argent !")
    } else {
        coin -= input;
        coinValue.textContent = coin
        localStorage.setItem("bet", input)
        localStorage.setItem("coin", coin)
        
        window.location.href = "game.html"
    }
})
}


// function afficherMessage() {
//     const resultMessage = document.getElementById("resultMessage");

//     if (estGagnant) {
//         resultMessage.innerHTML = "Congratulations! You are the winner!";
//     } else {
//         resultMessage.innerHTML = "Looooooooser!";
//     }
// }
// const estGagnant = declarerWinner();
// afficherMessage(estGagnant);



